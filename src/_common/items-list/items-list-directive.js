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

				$(".item-actions-dropdown").removeClass('active');
				
				$(this).closest('.item-actions-dropdown').addClass('active');	
			});
		}
	};
});
