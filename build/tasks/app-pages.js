var config 	= require('../config');

module.exports.task = function(gulp, plugins, paths) {

	// get all templates 
	gulp.src(paths.app.templates)

		// pretify html structure
		.pipe(plugins.prettify({
			indent_size: 4
		}))

		// Output in /templates folder
		.pipe(gulp.dest(config.destDir + "/templates"))

		.pipe(plugins.ngHtml2js({
			moduleName: "modularAdmin.templates",
			prefix: "templates/"
		}))

		// Handle errors
		.on('error', plugins.util.log)

		.pipe(plugins.concat("app-templates.js"))

		.pipe(gulp.dest(config.destDir + "/js"));


	// get all templalayoutstes 	
	gulp.src(paths.app.layouts)

		// Flatten structure
		.pipe(plugins.flatten())

		// Rename .layout.html to .html
		.pipe(plugins.rename(function (path) {
			path.basename = path.basename.replace(".layout", "");
		}))	

		// pretify html structure
		.pipe(plugins.prettify({
			indent_size: 4
		}))

		// Output
		.pipe(gulp.dest(config.destDir));
	
};