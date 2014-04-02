module.exports.checkOptions = function(args){
    return (args.targets.length!=1);
};

module.exports.printError = function(messages){
    console.log('unexpected error!');
    if(messages){
        messages.forEach(function(msg){
            console.log(log);
        });
    }
};
