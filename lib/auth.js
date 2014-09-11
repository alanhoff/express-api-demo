// Módulo de autenticação no sistema
var db = require('./db');

module.exports = function(req, res, next){
  req.user = null;

  if(!req.headers.authorization)
    return next();

  var session = db.collection('sessions')
    .findOne({token: req.headers.authorization});

  if(!session)
    return next();

  req.user = db.collection('users')
    .findOne({_id : session.user_id});

  next();
};
