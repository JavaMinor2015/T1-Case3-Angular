'use strict';
/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('cartController', function($scope) {

  $scope.products = [];

  $scope.addToCart = function (product) {
    $scope.products.push(product);
  };
});
