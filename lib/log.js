// Biblioteca de logs
var util = require('util');
var config = require('./config');

var info = function(contexto){
  if(config.log.indexOf('info') === -1)
    return;

  var args = Array.prototype.slice.call(arguments);
  var msg = util.format.apply(null, [args[1]].concat(args.slice(2)));
  var str = util.format('%s - %s [%s] %s', new Date(), contexto, 'info', msg);
  console.log(str);
};

var log = function(contexto){
  if(config.log.indexOf('log') === -1)
    return;

  var args = Array.prototype.slice.call(arguments);
  var msg = util.format.apply(null, [args[1]].concat(args.slice(2)));
  var str = util.format('%s - %s [%s] %s', new Date(), contexto, 'log', msg);
  console.log(str);
};

var error = function(contexto){
  if(config.log.indexOf('error') === -1)
    return;

  var args = Array.prototype.slice.call(arguments);
  var msg = util.format.apply(null, [args[1]].concat(args.slice(2)));
  var str = util.format('%s - %s [%s] %s', new Date(), contexto, 'error', msg);
  console.error(str);
};

module.exports = function(contexto){
  return {
    info: info.bind(null, contexto),
    log: log.bind(null, contexto),
    error: error.bind(null, contexto)
  };
};
