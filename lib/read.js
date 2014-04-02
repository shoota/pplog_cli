var util = require('./util'),
    request = require('request'),
    cheerio = require("cheerio");

module.exports.getPoem = function(args){
    var tw_account = args.targets[0];
    var url = 'http://www.pplog.net/u/'+tw_account;
 
  request(url, function (error, response, body) {
    if(error) util.printError(['Could not access to pplog.']);
    printResult(body,args.options.title);

  });
};


var printResult = function(body, onlyTitle){

    console.log('\r\n');


    var $ = cheerio.load(body);

    var title = $(".content").children('h1').text();
    console.log(title);

    if(!onlyTitle){
        var poem = $(".content-body").html();
        poem = poem.replace(/\<br\>/g, '\r\n').replace(/\<div.*div\>/g, '');
        console.log(poem);
    }
}

