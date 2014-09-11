// Só exportamos a instância do express para que eles possam
// usar o mesmo singletone e facilitar a vida de todos

var express = require('express');
var app = express();
var log = require('../lib/log')('express');
var auth = require('../lib/auth');

// Fazemos o log de todas as requisições através de um
// middleware muito simples
app.use(function(req, res, next){
  log.log('%s %s', req.method.toUpperCase(), req.url);
  next();
});

// Fazemos a autenticação se existir a header Authorization
app.use(auth);

module.exports = app;
