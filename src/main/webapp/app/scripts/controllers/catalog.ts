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

    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchProduct  = '';   // set the default search/filter term

    $scope.products = [
      {
        id: "98765",
        name: "Wheel",
        price: 45.5,
      },
      {
        id: "56789",
        name: "Bike",
        price: 125.2,
      }
    ];

    $scope.addToCart = function(product){
      //TODO: Add the product to the cart
    };

    $scope.redirect = function(product){
      $location.url('/main.html');
    }

  });
