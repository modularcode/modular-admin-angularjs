/*
*	Controller for app state
*/

modularAdmin.app

.controller("SidebarController", function($log, $state, sidebarService) {

	var vm = this;

	vm.isActive = function(states){
		var currentState = $state.current.name;

		if (states.indexOf(currentState) >= 0) {
			return true;
		}
	}

	/***************************************
	*		   Sidebar Controls
	****************************************/
	vm.isVisible = false;
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