modularAdmin.app

.directive('themeStyles', function($rootScope, $log) {

	function link($scope, $element) {
		
		setStyleLink();

		$rootScope.$watch('settings.color', function(){
			setStyleLink();
		});

		function setStyleLink(){
			var themeStyleUrl = "css/app.css";

			if ($rootScope.settings.color) {
				themeStyleUrl = "css/app-" + $rootScope.settings.color + ".css";
			} 
			
			$element.prop('href', themeStyleUrl);
		}
	}

	// Return directive configuration.
	return({
		restrict: "A",
		link: link,
	});

});