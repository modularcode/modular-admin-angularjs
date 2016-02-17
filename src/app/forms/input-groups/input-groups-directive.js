modularAdmin.app

.directive('inputGroup', function () {
    return {
        restrict: 'A', 
        link: function (scope, $element) {
            $element.focus(function() {
				$(this).siblings('.input-group-addon').addClass('focus');
			});

			$element.blur(function() {
				$(this).siblings('.input-group-addon').removeClass('focus');
			});
        }
    };
});