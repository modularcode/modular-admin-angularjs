/*
*	Tasks service
*/

modularAdmin.common

.factory("tasksService", function($http, $log) {
	return {
		get: function(){
			return $http.get('assets/data/tasks.json')

			.then(function(result){
				return result.data;
			});
		}
	}
});