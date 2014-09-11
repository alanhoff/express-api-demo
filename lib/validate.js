// Funções de validação de dados
var Joi = require('joi');

module.exports = function(schemaName, data){
  var schema = require('../validation/' + schemaName + '-schema');
  return Joi.validate(data || {}, schema);
};
