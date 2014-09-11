// Faz o carregamento automático
// de todos os controladores que
// estão nesta página
var fs = require('fs');
var files = fs.readdirSync(__dirname);

files.forEach(function(file){
  if(file !== 'index.js')
    require('./' + file);
});
