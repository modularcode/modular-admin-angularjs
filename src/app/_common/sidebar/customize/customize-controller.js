/*
*	Customize controller
*/

modularAdmin.app

.controller("CustomizeCtrl", function($log, customizeService) {

	var vm = this;

	vm.themeSettings = {
		themeName: '',
		sidebarFixed: false,
		headerFixed: false,
		footerFixed: false
	}

	if (customizeService.getThemeSettings()) {
		vm.themeSettings = customizeService.getThemeSettings();
	}

	vm.setThemeState = function(){
		customizeService.setThemeSettings(vm.themeSettings);
	}

	vm.setThemeColor = function(themeColor){
		vm.themeSettings.themeName = themeColor;
		customizeService.setThemeSettings(vm.themeSettings);
	}

	/***************************************
	*		   Customize Controls
	****************************************/

	vm.controls = {};

	vm.controls.getThemeSettingItem = function(settingName){
		return vm.themeSettings[settingName];
	}


	/**********************************************
	*	 External API through Customize factory
	***********************************************/

	customizeService.controls = vm.controls;
});