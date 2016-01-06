'use strict';
angular.module('kantileverAngular').service('ProductService', function ($http) {
    this.getAllProducts = function () {
        return $http.get('products/');
    };
    this.getProduct = function (id) {
        return $http.get('products/' + id + '/');
    };
});
//# sourceMappingURL=product.js.map