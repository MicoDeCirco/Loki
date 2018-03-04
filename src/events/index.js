//Módulo para listar eventos.

const fs = require("fs");

var files = [];

fs.readdirSync(__dirname).forEach(function(e){
	e = e.replace("index.js", "").replace("manager.js", "");
	if(e != "")
		files.push(e);
});

module.exports = files;