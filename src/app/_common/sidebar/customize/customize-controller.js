/*
*	Customize controller
*/
modularAdmin.app

.controller("CustomizeCtrl", function($rootScope, $log, localStorage) {

	var vm = this;

	// set default settings
	var defaults = {
		themeName: '',
		sidebarFixed: false,
		headerFixed: false,
		footerFixed: false
	}

	// get theme settings
	$rootScope.settings = getThemeSettings() || defaults;

	// set theme state
	vm.setThemeState = function(){
		setThemeSettings($rootScope.settings);
	}

	// set theme color
	vm.setThemeColor = function(color){
		$rootScope.settings.themeName = color;
		setThemeSettings($rootScope.settings);
	}

	function getThemeSettings(){
		var settings = localStorage.get('themeSettings');
		if (!angular.isUndefined(settings)) {
			return JSON.parse(settings);
		}
	}

	function setThemeSettings(settings){
		localStorage.set('themeSettings', JSON.stringify(settings));
	}

});