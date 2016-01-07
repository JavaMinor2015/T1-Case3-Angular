'use strict';

/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('orderController', function($scope, ShoppingCartService, $window, orderService) {

  $scope.products = ShoppingCartService.products;

  $scope.emptyCart = function(){
    $scope.products.length = 0;
  };

  $scope.completeOrder = function() {
    //TODO Send the order to the backend
    alert('Thank you for your order!');
    $scope.emptyCart();
    $window.location.href = '#/catalog';
  };

  $scope.orders = [];

  $scope.getOrderList = function(){

    var temp = orderService.getOrders();
    $scope.orders = temp;
    return $scope.orders;
  };

  $scope.getOrderList();
});
