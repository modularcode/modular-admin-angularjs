/*
*	Controller for signup page
*/

modularAdmin.auth

.controller("SignupCtrl", function($scope, $log, $state) {

	var vm = this;

	vm.data = {};

	vm.register = function() {

		if ($scope.signupForm.$invalid) {
			return false;
		}

		$state.go('auth.login');
	}

	$log.log("Signup Controller");

});