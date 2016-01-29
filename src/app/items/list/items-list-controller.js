/*
*	Controller for itemsList state
*/

modularAdmin.app

.controller("ItemsListCtrl", function($log, itemsService) {

	var vm = this;

	itemsService.get()

	.then(function(data){
		vm.items = data.items;
	});

	vm.checkedAll = false;

	vm.checkAll = function () {
        vm.checkedAll = !vm.checkedAll;

        angular.forEach(vm.items, function (item) {
            item.checked = vm.checkedAll;
        });

    };

	$log.log("In items list controller");

});