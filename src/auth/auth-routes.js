modularAdmin.app

.config(function($stateProvider) {

	$stateProvider

	// App state
	.state('auth', {
		abstract : true,
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/auth/auth.html'); 
		},
		controller: "AuthCtrl as auth"
	})

	// Dashboard state
	.state('auth.login', {
		url: "/login",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/auth/login/login.html'); 
		},
		controller: "LoginCtrl as login",
		data: {
			page: 'login'
		}
	})

	// Dashboard state
	.state('auth.signup', {
		url: "/signup",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/auth/signup/signup.html'); 
		},
		controller: "SignupCtrl as signup",
		data: {
			page: 'signup'
		}
	})

	.state('auth.reset', {
		url: "/reset",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/auth/reset/reset.html'); 
		},
		controller: "ResetCtrl as reset",
		data: {
			page: 'reset'
		}
	});

});