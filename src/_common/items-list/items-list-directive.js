modularAdmin.common

.directive('itemActions', function () {
	return {
		restrict: 'A',
		link: function ($scope, $element, attrs) {

			$(document).on('click',function(e) {
				if (!$(e.target).closest('.item-actions-dropdown').length) {
					$(".item-actions-dropdown").removeClass('active');
				}
			});
			
			$element.on('click',function(e){
				e.preventDefault();

				var $thisActionList = $(this).closest('.item-actions-dropdown');

				$(".item-actions-dropdown").not($thisActionList).removeClass('active');
				
				$thisActionList.toggleClass('active');
			});
		}
	};
});
