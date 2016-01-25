/*
*	Customize service
*/

modularAdmin.main

.factory("customizeService", function($log, localStorage) {
	return {
		controls: {},
		getThemeSettings: function(){
			var settings = localStorage.get('themeSettings');
			if (settings) {
				return JSON.parse(settings);
			}
		},
		setThemeSettings: function(settings){
			localStorage.set('themeSettings', JSON.stringify(settings));
		}
	}
});