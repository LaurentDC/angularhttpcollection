'use strict';

newapp
	.controller('catList', function($log, $scope, categoryService){
		$scope.states = {};
    	$scope.activeCategory = 'all';
    	$scope.getCategoryList = function() {
			console.log('in catList');
			categoryService.getCategories()
				.then(function(data){
					$scope.categories = data;
				});
		};
	});