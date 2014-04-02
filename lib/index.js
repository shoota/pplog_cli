var cli = module.exports;

var argv = require('argv');
var util = require('./util');
var read = require('./read');

argv.option([
	{
    	name: 'title',
    	short: 't',
    	type : 'boolean',
    	description :'get only poem title'
	}
	// ,
	// {
 //    	name: 'footprint',
 //    	short: 'f',
 //    	type : 'string',
 //    	description :'get poem with footprints'
	// }
]);


cli.run = function(){
	var args = argv.run();
	if(util.checkOptions(args)){
		util.printError(['see usage with -h option.']);
	}else{
		read.getPoem(args);
	}

};