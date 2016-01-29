/*
*	Controller for history
*/

modularAdmin.app

.controller("HistoryVisitsCtrl", function($log, historyService) {

	var vm = this;

	// set tabs controls
	vm.activeTab = 'visits';

	vm.setTab = function(tab){
		vm.activeTab = tab;
	}

	vm.isActiveTab = function(tab){
		return vm.activeTab === tab;
	}

	// set visits chart options

	vm.visitsOptions = {};
	vm.visitsOptions.resize = true;
	vm.visitsOptions.xkey = 'x';
    vm.visitsOptions.ykeys = ['y'];
    vm.visitsOptions.ymin = 'auto 40';
    vm.visitsOptions.labels = ['Visits'];
    vm.visitsOptions.xLabels = "day";
    vm.visitsOptions.hideHover = 'auto';
    vm.visitsOptions.yLabelFormat = function (y) {
        // Only integers
        if (y === parseInt(y, 10)) {
            return y;
        }
        else {
            return '';
        }
    };
	/* line-chart
	line-data='historyVisits.visitsOptions.data'
	line-resize='historyVisits.visitsOptions.resize'
	line-xkey='historyVisits.visitsOptions.xkey'
	line-ykeys='historyVisits.visitsOptions.ykeys'
	ymin='historyVisits.visitsOptions.ymin'
	line-labels='historyVisits.visitsOptions.labels'
	x-labels='historyVisits.visitsOptions.xLabels'
	hide-hover='historyVisits.visitsOptions.hideHover'
	y-label-format='historyVisits.visitsOptions.yLabelFormat'
	line-colors='["#31C0BE"]'
	*/


	historyService.get()

	.then(function(data){
		vm.visitsOptions.data = data.history.visits;
	})


	// set downloads chart options
	vm.downloadsOptions = {};

	$log.log("In history controller");

});