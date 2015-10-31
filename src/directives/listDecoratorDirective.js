'use strict';

newapp.directive('decorateList', function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl: 'views/list/directive/listdecorator.html'

	};
});