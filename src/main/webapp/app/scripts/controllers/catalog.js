'use strict';
/**
 * @ngdoc function
 * @name KantileverAngular.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 *
 */
angular.module('kantileverAngular')
    .controller('CatalogCtrl', function ($scope, $location) {
    $scope.products = [
        {
            id: "98765",
            name: "bike",
            price: 125.5
        },
        {
            id: "56789",
            name: "Wheel",
            price: 45.2
        }
    ];
    $scope.addToCart = function (product) {
        //TODO: Add the product to the cart
    };
});
//# sourceMappingURL=catalog.js.map
