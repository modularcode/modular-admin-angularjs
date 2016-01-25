/*
*	Controller for tasks
*/

modularAdmin.app

.controller("TasksController", function($log, tasksService) {

	var vm = this;

	tasksService.get()

	.then(function(data){
		vm.tasks = data.tasks;
	});

	$log.log("In tasks controller");

});