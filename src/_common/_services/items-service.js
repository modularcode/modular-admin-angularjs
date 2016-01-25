/*
*	Items service
*/

modularAdmin.common

.factory("itemsService", function($http, $log) {
	return {
		get: function(){
			return $http.get('assets/data/items.json')

			.then(function(result){
				return result.data;
			});
		}
	}
});