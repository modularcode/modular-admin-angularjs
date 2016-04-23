var path = require('path');

module.exports = {
	rootDir: "../",						// Root dir
	srcDir: path.resolve("../src"),					// Source files 
	destDir: path.resolve("../dist"),				// Build destination
	bowerDir: "../bower_components",  	// Bower dir
	npmDir:   "../node_modules",		// Npm dir
	port:  process.env.PORT || 3333,
	host: process.env.IP || '127.0.0.1'
};