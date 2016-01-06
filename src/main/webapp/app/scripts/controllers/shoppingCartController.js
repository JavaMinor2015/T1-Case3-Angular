'use strict';
/**
 * @ngdoc function
 * @name ShoppingCartController
 * @description
 * # ShoppingCartController
 * Controller
 */
angular.module('kantileverAngular').controller('shoppingCartController', function($scope, $http) {

  $scope.products = null;
  $http.get('productTest.json')
    .success(function($data) {
      $scope.products = $data;
    })
    .error(function($error){
      $scope.products = $error;
    });
  $scope.test = 'testString';
});
