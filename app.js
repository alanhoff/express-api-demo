// Levantamos os controladores
require('./controller');

// Fazemos o require das bibliotecas que
// precisamos neste momento
var app = require('./lib/server');
var log = require('./lib/log')('app');
var config = require('./lib/config');


app.listen(config.port, function(err){
  if(err)
    throw err;

  log.info('Aplicação iniciada na porta %s', config.port);
});
