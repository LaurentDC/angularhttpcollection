'use strict';

var url = 'http://localhost:3000/api';

newapp
  .controller('itemList', function($rootScope, $scope, $http) {
      $scope.categories = [];
      $scope.editorEnabled = false;
      $scope.checked = false;
      $scope.editDisabled = true;
      $scope.currentPage = 0;
      $scope.maxPage = 10;
      $scope.filters = {};
      $scope.items = [];

      // GET ITEMS
      $http.get(url + '/items')
        .success(function(data){
          $scope.items = data;
        })
        .error(function(data){
          console.log('error: ' + data);
        });
      // GET CATEGORIES
      $http.get(url + '/categories')
        .success(function(data){
          $scope.categories = data;
          console.log(data);
        })
        .error(function(data){
          console.log('error: ' + data);
        });
      $scope.applyFilters = function(id) {
          $scope.filters = {category_id: id};
      }
      $scope.numberOfPages = function(){
        return Math.ceil($scope.items.length / $scope.maxPage);
      }
      // POST ITEM
      $scope.createItem = function(item){
        item['itemId'] = $scope.items.length + 1;
        $http.post(url + '/items', item)
          .success(function(data){
            $scope.items = data;
          })
          .error(function(data){
            console.log('error: ' + data);
          });
      };
      // PUT ITEM
      $scope.editItem = function(item) {
        $http.put(url + '/items/' + item._id, item)
          .success(function(data){
            $scope.items = data;
          })
          .error(function(data){
            console.log('error: ' + data);
          });
      };
      // DELETE ITEM
      $scope.removeItem = function(item) {
        $http.delete(url + '/items/' + item._id, item)
          .success(function(data){
            $scope.items = data;
          })
          .error(function(data){
            console.log('error: ' + data);
          });
      };
  })
;
