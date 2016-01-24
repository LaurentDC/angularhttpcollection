'use strict';
newapp
	.service('categoryService', function($http){
		this.getCategories = function(){
			return $http.get('http://localhost:3000/api/categories')
				.then(
					function(response){
						return response.data;
					});
		};
	});