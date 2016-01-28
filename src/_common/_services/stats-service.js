/*
*	Stats service
*/

modularAdmin.common

.factory("statsService", function($http, $log) {
	return {
		get: function(){
			return $http.get('assets/data/stats.json')

			.then(function(result){
				return result.data;
			});
		}
	}
});