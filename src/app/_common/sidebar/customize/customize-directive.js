modularAdmin.app

.directive('themeStyles', function($rootScope, $log) {

	function link($scope, $element) {
		
		setStyleLink();

		$rootScope.$watch('settings.themeName', function(){
			setStyleLink();
		});

		function setStyleLink(){
			var themeStyleUrl = "css/app.css";
			var themeColor = $rootScope.settings.themeName;

			if (themeColor) {
				themeStyleUrl = "css/app-" + themeColor + ".css";
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