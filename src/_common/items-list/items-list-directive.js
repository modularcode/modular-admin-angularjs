modularAdmin.common

.directive('itemActions', function () {
	return {
		restrict: 'A',
		link: function ($scope, $element, attrs) {

			var $itemActions = $(".item-actions-dropdown");
			$(document).on('click',function(e) {
				if (!$(e.target).closest('.item-actions-dropdown').length) {
					$itemActions.removeClass('active');
				}
			});
			
			$element.on('click',function(e){
				e.preventDefault();

				var $thisActionList = $(this).closest('.item-actions-dropdown');

				$itemActions.not($thisActionList).removeClass('active');

				$thisActionList.toggleClass('active');	
			});
		}
	};
});
