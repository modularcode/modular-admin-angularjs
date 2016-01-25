modularAdmin.app

.directive('themeLink', function($log, $timeout, customizeService) {

	function link($scope, $element) {
		
		$timeout(function(){
			setStyleLink();
		});

		$scope.$watch('themeColor', function(){
			setStyleLink();
		});

		function setStyleLink(){
			var themeStyleUrl = "css/";

			if($scope.themeColor) {
				themeStyleUrl += "app-" + $scope.themeColor + ".css";
			} 
			else {
				themeStyleUrl += "app.css";
			}
			
			$element.prop('href', themeStyleUrl);
		}
	}

	// Return directive configuration.
	return({
		restrict: "A",
		link: link,
		controller: "CustomizeCtrl",
		scope: {
			themeColor: '='
		}
	});

});