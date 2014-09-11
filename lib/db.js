var Puid = require('puid');
var puid = new Puid();
var sift = require('sift');

// Variável principal que serve como banco de dados
// já populamos um usuário admin com a senha admin
var db = {
  users: [
    {
      username: 'admin',
      password: 'd033e22ae348aeb5660fc2140aec35850c4da997'
    }
  ]
};

// Funções do nosso banco de dados
module.exports = {
  collection: function(name){
    var self = this;
    return {
      find: self.find.bind(null, name),
      findOne: self.findOne.bind(null, name),
      remove: self.remove.bind(null, name),
      update: self.update.bind(null, name),
      insert: self.insert.bind(null, name)
    };
  },
  find: function(collection, term){
    if(!(collection in db))
      db[collection] = [];

    return sift(term, db[collection]);
  },
  findOne: function(collection, term){
    if(!(collection in db))
      db[collection] = [];

    return sift(term, db[collection])[0] || null;
  },
  remove: function(collection, term){
    if(!(collection in db))
      db[collection] = [];

    var bkp = db[collection];
    sift(term, bkp).forEach(function(item, i){
      bkp.splice(i, 0);
    });

    db[collection] = bkp;
  },
  update: function(collection, term, update){
    if(!(collection in db))
      db[collection] = [];

    sift(term, db[collection]).forEach(function(item, i){
      update._id = item._id;
      db[collection][i] = update;
    });
  },
  insert: function(collection, item){
    if(!(collection in db))
      db[collection] = [];

    item._id = puid.generate();
    db[collection].push(item);

    return item;
  },
  id: function(){
    return puid.generate();
  }
};
