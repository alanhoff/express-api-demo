var app = require('../lib/server');
var validate = require('../lib/validate');
var db = require('../lib/db');
var crypto = require('crypto');
var json = require('body-parser').json;
var users = db.collection('users');

app.route('/api/v1/login')
  .post(json(), function(req, res){

    var valid = validate('login', req.body);

    if(valid.error)
      return res.status(400).json(valid.error);

    // Transformamos a senha em SHA1
    req.body.password = crypto.createHash('sha1')
      .update(req.body.password)
      .digest('hex');

    var user = users.findOne(req.body);

    if(!user)
      return res.status(403).send('Username or password incorrect.');

    // Criamos um token para a autenticação
    var token = db.id();
    db.collection('sessions').insert({
      token: token,
      user_id: user._id
    });

    res.json({token: token});
  });
