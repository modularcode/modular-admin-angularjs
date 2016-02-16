/*
*	Controller for reset page
*/

modularAdmin.auth

.controller("ResetCtrl", function($scope, $log, $state) {

	var vm = this;

	vm.email = "";

	vm.reset = function() {

		if ($scope.resetForm.$invalid) {
			return false;
		}

		$state.go('auth.login');
	}

	$log.log("Reset Controller");

});