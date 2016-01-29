modularAdmin.app

.directive('salesMap', function () {
	return {
		restrict: 'A',
		link: function ($scope, $element) {

			drawSalesMap();

			$scope.$watch('salesData', function(){
				drawSalesMap();
			})

			function drawSalesMap(){
				$element.empty();

				$element.vectorMap({
		            map: 'world_en',
		            backgroundColor: 'transparent',
		            color: '#E5E3E5',
		            hoverOpacity: 0.7,
		            //selectedColor: selectedColor,
		            enableZoom: true,
		            showTooltip: true,
		            values: $scope.salesData,
		            //scaleColors: [ color, darkColor],
		            normalizeFunction: 'linear'
		        });
			}
		},
		scope: {
			salesData: '=' 
		}
	};
});
