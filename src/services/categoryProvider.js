'use strict';

newapp.service('categoryProvider', ["$http", 
    function($http) {
        var myCategories = {};
        this.getCategories = function() {
            $http.get('http://localhost:3000/api/categories')
                .success(function(data){
                    myCategories = data;
                    console.log(data);
                    return myCategories;
                })
                .error(function(data){
                    console.log('error: ' + data);
                });
        }
        this.create = function(category) {
            category['catId'] = myCategories.length + 1;
        	myCategories.$add(category);
        }
        this.remove = function(category) {
        	myCategories.$remove(category);
        }
    }
]);
