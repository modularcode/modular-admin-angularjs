/*
*	Controller for app state
*/

modularAdmin.app

.controller("AppController", function($log, sidebarService) {

	var vm = this;

	$log.log("App Controller");

	/***********************************************
	*	  Attach App Components to app viewmodel
	************************************************/

	// sidebar
	vm.sidebar = sidebarService;

});