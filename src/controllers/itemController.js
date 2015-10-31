'use strict';

newapp
  .controller('itemIndex', function($scope) {

  })
  .controller('itemCreate', function($scope, categoryProvider, itemProvider) {
      $scope.categories = categoryProvider.getCategories();
      $scope.items = itemProvider.getItems();
      $scope.createItem = function(item) {
          $scope.items = itemProvider.create(item);
      }
  })
  .controller('itemList', function($scope, itemProvider, categoryProvider) {
      $scope.items = itemProvider.getItems();
      $scope.categories = categoryProvider.getCategories();
      $scope.filterName = function(item, categories) {
        for (var i = 0; i < categories.length; i++) {
          if (item.category_id === categories[i].id) {
            return categories[i].name;
          };
        };
      };
      $scope.predicate = 'title';
      $scope.reverse = true;
      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };
  })
  .controller('itemRemove', function($scope, itemProvider) {
      $scope.items = itemProvider.getItems();
      $scope.removeItem = function(item) {
          $scope.items = itemProvider.remove(item);
      }
  })
;
