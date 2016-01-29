/*
*	Controller for sales by countries
*/

modularAdmin.app

.controller("SalesByCountriesCtrl", function($log, salesService) {

	var vm = this;

	salesService.get()

	.then(function(data){
		vm.countries = data.sales.countries;
	})

	$log.log("In sales controller");

});