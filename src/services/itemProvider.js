'use strict';

var myItems = [
    {'title': 'Apocalypse Now', 'name': 'Francis Ford Coppola', 'category_id': 1},
    {'title': 'Shrek', 'name': 'Andrew Adamson', 'category_id': 1},
    {'title': 'Metro Manila', 'name': 'Sean Ellis', 'category_id': 1},
    {'title': 'C\'est arrivé près de chez vous', 'name': 'Benoît Poelvoorde', 'category_id': 1},
    {'title': 'So What', 'name': 'Miles Davis', 'category_id': 2},
    {'title': 'Blue Train', 'name': 'John Coltrane', 'category_id': 2},
    {'title': 'Blues and the Abstract Truth', 'name': 'Oliver Nelson', 'category_id': 2},
    {'title': 'This is All Yours', 'name': 'Alt-J', 'category_id': 2}
];

newapp.service('itemProvider', function() {

    this.getItems = function() {
        return myItems;
    };
    this.create = function(item) {
        myItems.push(item);
        return myItems;
    };
    this.remove = function(item) {
        var index = myItems.indexOf(item);
        //console.log(index);
        myItems.splice(index, 1);
        return myItems;
    }
});
