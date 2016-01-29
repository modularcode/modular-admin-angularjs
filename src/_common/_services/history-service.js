/*
*	History service
*/

modularAdmin.common

.factory("historyService", function($http, $log) {
	return {
		get: function(){
			return $http.get('assets/data/history.json')

			.then(function(result){
				return result.data;
			});
		}
	}
});