'use strict';

/**
 * @ngdoc function
 * @name KantileverAngular.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 *
 */
angular.module('kantileverAngular')
  .controller('CatalogCtrl', function ($scope, ProductService) {

    $scope.productService = ProductService;

    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchProduct = ''; // set the default search/filter term
    $scope.products = $scope.productService.getAllProducts();
  });
