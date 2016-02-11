/*
*	Customize controller
*/
modularAdmin.app

.controller("CustomizeCtrl", function($rootScope, localStorage, $log) {

	var vm = this;

	// get theme settings
	$rootScope.settings = getThemeSettings();

	// set theme color
	vm.setThemeColor = function(color){
		$rootScope.settings.color = color;
	}

	// save theme state
	$rootScope.$watch('settings.color', function(){
		saveThemeSettings();
	});

	/************************************************
	*				Storage Functions
	*************************************************/

	function getThemeSettings() {
		var settings = (localStorage.get('themeSettings')) ? JSON.parse(localStorage.get('themeSettings')) : {};

		// theme color option
		settings.color = settings.color || '';

		// theme states options
		settings.headerFixed = settings.headerFixed || false;
		settings.sidebarFixed = settings.sidebarFixed || false;
		settings.footerFixed = settings.footerFixed || false;

		return settings;
	}

	function saveThemeSettings(){
		localStorage.set('themeSettings', JSON.stringify($rootScope.settings));
	}

});