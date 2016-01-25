modularAdmin.common
.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, $element, attrs) {
            $element.replaceWith($element.children());
        }
    };
});