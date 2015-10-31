'use strict';

newapp.directive('decorateItem', function(){
    return {
        templateUrl: 'views/item/directive/decorator.html',
        restrict: 'E'
    };
});
newapp.directive('removedecorateItem', function(){
	return {
		templateUrl: 'views/item/directive/removeitemdecorator.html',
		restrict: 'E'
	};
});
