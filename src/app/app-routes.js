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

	// Static tables page
	.state('app.staticTables', {
		url: "/static-tables",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/tables/static-tables/static-tables.html'); 
		},
		controller: "StaticTablesCtrl as staticTables",
		data: {
			page: 'static-tables'
		}
	})

	// Forms page
	.state('app.forms', {
		url: "/forms",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/forms/forms.html'); 
		},
		controller: "FormsCtrl as forms",
		data: {
			page: 'forms'
		}
	})
	
	// Buttons page
	.state('app.buttons', {
		url: "/buttons",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/ui-elements/buttons/buttons.html'); 
		},
		controller: "ButtonsCtrl as buttons",
		data: {
			page: 'buttons'
		}
	})
	
	// Cards page
	.state('app.cards', {
		url: "/cards",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/ui-elements/cards/cards.html'); 
		},
		controller: "CardsCtrl as cards",
		data: {
			page: 'cards'
		}
	})
	
	// Grid page
	.state('app.grid', {
		url: "/grid",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/ui-elements/grid/grid.html'); 
		},
		controller: "GridCtrl as grid",
		data: {
			page: 'grid'
		}
	})
	
	// Icons page
	.state('app.icons', {
		url: "/icons",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/ui-elements/icons/icons.html'); 
		},
		controller: "IconsCtrl as icons",
		data: {
			page: 'icons'
		}
	})
	
	// Typography page
	.state('app.typography', {
		url: "/typography",
		templateProvider: function($templateCache) {  
			return $templateCache.get('templates/app/ui-elements/typography/typography.html'); 
		},
		controller: "TypographyCtrl as typography",
		data: {
			page: 'typography'
		}
	});

});