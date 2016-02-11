modularAdmin.main

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/dashboard");		
})

.run(function ($rootScope) {

	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        if (toState.data && toState.data.page) {
        	$rootScope.settings.page = toState.data.page;
        }
  	});

});