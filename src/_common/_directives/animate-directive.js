modularAdmin.common

.directive('animate', function () {
	return {
		restrict: 'A',
		link: function ($scope, $element, attrs) {
			var animationName = "animated " + $scope.animation;
			var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			
			$element.prev().on('click', function(){

				console.log($scope);
				$element.addClass(animationName)
				.one(animationEnd, 
					function(){
						$(this).removeClass(animationName);
					}
				);
			})
		},
		scope: {
			animation: '@'
		}
	};
});