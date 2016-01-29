/*
*   Controller for sales by countries
*/

modularAdmin.app

.controller("SalesBreakdownCtrl", function($log, salesService) {

    var vm = this;

    //set breakdown options
    vm.options = {};

    vm.options.resize = true;
    vm.options.formatter = "currency";
    vm.options.colors = ["#31C0BE","#c7254e","#98a0d3"];

    // get breakdown data
    salesService.get()

    .then(function(data){
        vm.options.data = data.sales.breakdown;
    })

    $log.log("In sales controller");

});