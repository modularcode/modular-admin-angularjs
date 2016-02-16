/*
*	Controller for login page
*/

modularAdmin.auth

.controller("LoginCtrl", function($scope, $log, $state) {

	var vm = this;

	vm.username = "";
	vm.password = "";

	vm.login = function() {

		if ($scope.loginForm.$invalid) {
			return false;
		}

		$state.go('app.dashboard');
	}

	$log.log("Login Controller");

});