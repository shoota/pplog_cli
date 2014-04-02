var cli = module.exports;

cli.run = function(opt, user){
  console.log(user+' poem');
};


cli.usage = function(){
  var usage = require('../lib/usage');
  usage.run();  
}