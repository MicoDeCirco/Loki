//Módulo para listar comandos.

const fs = require("fs");

var files = [];

fs.readdirSync(__dirname).forEach(function(e){
	e = e.replace("index.js", "").replace("manager.js", "").replace("message", "");
	if(e != "")
		files.push(e);
});

module.exports = files;