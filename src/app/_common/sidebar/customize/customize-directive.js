modularAdmin.app

.directive('themeColor', function($rootScope, $log) {

	function link($scope, $element) {
		
		setThemeColor();

		$rootScope.$watch('settings.color', function(){
			setThemeColor();			
		});

		function setThemeColor(){
			var themeStyleUrl = "css/app.css";

			if ($rootScope.settings.color) {
				themeStyleUrl = "css/app-" + $rootScope.settings.color + ".css";
			} 
			
			$element.prop('href', themeStyleUrl)
			.delay(50)
			.queue(function (next) {

				var $ref = $('#ref');

				$rootScope.settings.chart = {};
				$rootScope.settings.chart.colorPrimary = tinycolor($ref.find(".chart .color-primary").css("color")).toHexString();	
				$rootScope.settings.chart.colorSecondary = tinycolor($ref.find(".chart .color-secondary").css("color")).toHexString();	

				$(document).trigger("themechange");	
				
				next();
			});
		}
	}

	// Return directive configuration.
	return({
		restrict: "A",
		link: link,
	});

});