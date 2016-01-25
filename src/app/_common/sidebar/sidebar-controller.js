/*
*	Controller for app state
*/

modularAdmin.app

.controller("SidebarController", function($log, sidebarService) {

	var vm = this;

	vm.isVisible = false;

	/***************************************
	*		   Sidebar Controls
	****************************************/
	vm.controls = {};

	vm.controls.show = function(){
		vm.isVisible = true;
	}

	vm.controls.hide = function(){
		vm.isVisible = false;
	}

	vm.controls.isVisible = function() {
		return vm.isVisible;
	};

	/**********************************************
	*	 External API through Sidebar factory
	***********************************************/

	sidebarService.controls = vm.controls;

	$log.log("Sidebar Controller");

});