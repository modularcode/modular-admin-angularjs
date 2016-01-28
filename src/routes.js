modularAdmin.main

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/dashboard");		
})

.run(function ($rootScope) {
	$rootScope.uiState = {};

	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
        if (toState.data && toState.data.page) {
        	$rootScope.uiState.page = toState.data.page;
        }
        if (toState.data && toState.data.pageTitle) {
        	$rootScope.uiState.title = toState.data.pageTitle;
        }
  	});

});