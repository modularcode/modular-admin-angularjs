/*
*   Controller for sales by countries
*/

modularAdmin.app

.controller("SalesBreakdownCtrl", function($rootScope, $log, salesService) {

    var vm = this;

    //set breakdown options
    vm.options = {};

    vm.options.resize = true;
    vm.options.formatter = "currency";

    if ($rootScope.settings.chart) {        
       /* vm.options.colors = [
            tinycolor($rootScope.settings.chart.colorPrimary).lighten(10).toString(),
            tinycolor($rootScope.settings.chart.colorPrimary).darken(8).toString(),
            $rootScope.settings.chart.colorPrimary
        ];*/
    }

    // get breakdown data
    salesService.get()

    .then(function(data){
        vm.options.data = data.sales.breakdown;
    })

    $log.log("In sales controller");

});