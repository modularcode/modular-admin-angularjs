modularAdmin.main

.controller("MainController", function ($log, customizeService) {

	var vm = this; 

	$log.log("Main Controller");

	/***********************************************
	*	  Attach App Components to app viewmodel
	************************************************/

	//get theme settings
	vm.themeSettings = customizeService;

});
