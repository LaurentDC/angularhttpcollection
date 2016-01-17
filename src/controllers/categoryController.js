'use strict';

var url = 'http://localhost:3000/api';

newapp
  .controller('categoryList', function($scope, $http){
    $scope.categories = [];
    $scope.states = {};
    $scope.activeCategory = 'all';

    // GET CATEGORIES
    $http.get(url + '/categories')
      .success(function(data){
        $scope.categories = data;
      })
      .error(function(data){
        console.log('error: ' + data);
      });
      
    // POST CATEGORY
    $scope.createCategory = function(category){
      category['catId'] = $scope.categories.length + 1;
      $http.post(url + '/categories', category)
        .success(function(data){
          $scope.categories = data;
        })
        .error(function(data){
          console.log('error: ' + data);
        });
    };
  })
;
