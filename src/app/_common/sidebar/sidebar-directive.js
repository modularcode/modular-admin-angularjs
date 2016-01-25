modularAdmin.app

.directive('sidebarDropdown', function($log) {

	function link($scope,$element) {
		$element.metisMenu({
			activeClass: 'open'
		});
	}

	// Return directive configuration.
	return({
		restrict: "A",
		link: link
	});

});