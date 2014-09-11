var app = require('../lib/server');
var db = require('../lib/db');
var validate = require('../lib/validate');
var books = db.collection('books');
var json = require('body-parser').json;

app.route('/api/v1/books/:id?')
  .get(function(req, res){
    Object.keys(req.query).forEach(function(key){
      req.query[key] = new RegExp(req.query[key], 'i');
    });

    res.json(books.find(req.query));
  })

  .post(json(), function(req, res){
    if(!req.user)
      return res.status(403).send('You must be authenticated.');

    var valid = validate('books', req.body);
    if(valid.error)
      return res.json(valid.error);

    var doc = books.insert(req.body);
    res.json(doc);
  })

  .put(json(), function(req, res){
    if(!req.user)
      return res.status(403).send('You must be authenticated.');

    var valid = validate('books', req.body);
    if(valid.error)
      return res.json(valid.json);

    books.update({_id: req.params.id}, req.body);
    res.send();
  })

  .delete(function(req, res){
    if(!req.user)
      return res.status(403).send('You must be authenticated.');

    var valid = validate('books', req.body);
    if(valid.error)
      return res.json(valid.json);

    books.remove({_id: req.params.id});
    res.send();
  });
