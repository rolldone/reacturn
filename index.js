var program = require('commander');

program
  	.version('0.1.0')
  	.option('make:new-app [name]','Create New App','defaultNewApp')
  	.option('make:new-asset [name]','Create New Asset Module')
  	.option('make:model [name]','Create New Model','defaultModel')
  	.option('make:controller [name]','Create New Controller','defaultController')
	.parse(process.argv);

// console.log(program['make:new']);
// console.log('%s',program.createApp);

if(program['make:new-app']){
	
	return;
}