var path = require('path');

var config = require('../config');

var rootDir 	= config.rootDir;
var srcDir 		= config.srcDir;
var destDir 	= config.destDir;

/***********************************************
*		Application script files
************************************************/

	/*
		Specifiing the source this way means:

		"take all .js files except /_main/main.js file 
		and then take /_main/main.js file"

		This ensures that main.js file is loaded in the end.
		Ignore context.js files.
	*/

	exports.scripts = [
		srcDir + "/_main.js",
		srcDir + "/config.js",
		srcDir + "/**/!(config|_main)*.js"
	];

/***********************************************
*		Application style files
************************************************/

	exports.styles = [
		srcDir + "/_main.scss",
		srcDir + "/**/!(_main|_variables|*-theme)*.scss",
	];

/***********************************************
*		Application theme files
************************************************/

	exports.themes = srcDir + "/**/*-theme.scss";

/***********************************************
*		Application layout files
************************************************/

	exports.layouts = srcDir + "/**/*.layout.html";

/***********************************************
*		Application template files
************************************************/

	exports.templates = srcDir + "/**/!(*.layout)*.html";


/***********************************************
*		Application asset files
************************************************/

	exports.assets = srcDir + "/_assets/**/*";