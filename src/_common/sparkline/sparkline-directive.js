modularAdmin.common

.directive('sparkline', function ($log) {
	return {
		restrict: 'A',
		link: function ($scope, $element) {
			var type = $scope.sparklineType;

			// There is predefined data
			if ($scope.sparklineData) {
				var data = $(this).data('data').split(',').map(function(item) {
					if (item.indexOf(":") > 0) {
						return item.split(":");
					}
					else {
						return item;
					}
				});
			}
			// Generate random data
			else {
				var data = [];
				for (var i = 0; i < 17; i++) {
					data.push(Math.round(100 * Math.random()));
				}
			}

			$element.sparkline(data, {
				//barColor: config.chart.colorPrimary.toString(),
				height: $element.height(),
				type: type
			});
		},
		scope: {
			sparklineType: '@',
			sparklineData: '='

		}
	};
});