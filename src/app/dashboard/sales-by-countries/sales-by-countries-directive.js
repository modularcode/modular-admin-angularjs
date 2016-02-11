modularAdmin.app

.directive('salesMap', function ($rootScope) {
	return {
		restrict: 'A',
		link: function ($scope, $element) {

			drawSalesMap();

			$(document).on("themechange", function(){
				drawSalesMap();
			})

			function drawSalesMap(){
				$element.empty();

				if (!$rootScope.settings.chart) {
					return false;
				}

				var color = $rootScope.settings.chart.colorPrimary;
		        var darkColor = tinycolor(color).darken(40).toHexString();
		        var selectedColor = tinycolor(color).darken(10).toHexString();

				$element.vectorMap({
		            map: 'world_en',
		            backgroundColor: 'transparent',
		            color: '#E5E3E5',
		            hoverOpacity: 0.7,
		            selectedColor: selectedColor,
		            enableZoom: true,
		            showTooltip: true,
		            values: $scope.salesData,
		            scaleColors: [ color, darkColor],
		            normalizeFunction: 'linear'
		        });
			}
		},
		scope: {
			salesData: '=' 
		}
	};
});
