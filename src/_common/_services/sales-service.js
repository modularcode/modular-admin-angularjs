/*
*	Sales service
*/

modularAdmin.common

.factory("salesService", function($http, $log) {
	return {
		get: function(){
			return $http.get('assets/data/sales.json')

			.then(function(result){
				return result.data;
			});
		}
	}
});