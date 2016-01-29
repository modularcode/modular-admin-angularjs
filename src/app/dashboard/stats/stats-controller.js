/*
*	Controller for stats
*/

modularAdmin.app

.controller("StatsCtrl", function($log, statsService) {

	var vm = this;

	statsService.get()

	.then(function(data){
		vm.stats = data.stats;
	});

	$log.log("In stats controller");

});