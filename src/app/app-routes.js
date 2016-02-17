modularAdmin.app

.config(function($stateProvider) {

	$stateProvider

	// App state
	.state('app', {
		abstract : true,
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/app.html'); 
		},
		controller: "AppCtrl as app"
	})

	// Dashboard state
	.state('app.dashboard', {
		url: "/dashboard",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/dashboard/dashboard.html'); 
		},
		controller: "DashboardCtrl as dashboard",
		data: {
			page: 'dashboard'
		}
	})

	// Items list page
	.state('app.itemsList', {
		url: "/items-list",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/items/list/items-list.html'); 
		},
		controller: "ItemsListCtrl as itemsList",
		data: {
			page: 'items-list'
		}
	})


	// Responsive tables page
	.state('app.responsiveTables', {
		url: "/responsive-tables",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/tables/responsive-tables/responsive-tables.html'); 
		},
		controller: "ResponsiveTablesCtrl as responsiveTables",
		data: {
			page: 'responsive-tables'
		}
	})

	.state('app.staticTables', {
		url: "/static-tables",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/tables/static-tables/static-tables.html'); 
		},
		controller: "StaticTablesCtrl as staticTables",
		data: {
			page: 'static-tables'
		}
	});

});