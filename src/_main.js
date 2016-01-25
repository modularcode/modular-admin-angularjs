var modularAdmin = {};

modularAdmin.main = angular.module("modularAdmin", [

	// Library modules
	'ui.router',
	'angular-storage', 

	// Application cached tempaltes
	"modularAdmin.templates",
	
	// Application modules
	"modularAdmin.common",
	"modularAdmin.app",
	"modularAdmin.auth"
]);

// Common components module
modularAdmin.common = angular.module("modularAdmin.common", []);

// App module
modularAdmin.app = angular.module("modularAdmin.app", []);

// Auth module
modularAdmin.auth = angular.module("modularAdmin.auth", []);