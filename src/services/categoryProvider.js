'use strict';

var myCategories = [
    {'id': 1, 'name': 'Cinéma'},
    {'id': 2, 'name': 'Music'}
];

newapp.service('categoryProvider', function() {
    this.getCategories = function() {
        return myCategories;
    };
});
