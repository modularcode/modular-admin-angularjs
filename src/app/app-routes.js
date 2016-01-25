modularAdmin.app

.config(function($stateProvider) {

	$stateProvider

	// App state
	.state('app', {
		abstract : true,
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/app.html'); 
		},
		controller: "AppController as app"
	})

	// Dashboard state
	.state('app.dashboard', {
		url: "/dashboard",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/dashboard/dashboard.html'); 
		},
		controller: "DashboardController as DashboardCtrl",
		data: {
			pageTitle: '',
		}
	});

});