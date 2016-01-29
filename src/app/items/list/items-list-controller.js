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

	$log.log("In items list controller");

});