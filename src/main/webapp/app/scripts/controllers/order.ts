'use strict';

/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('orderController', function($scope, $window, orderService) {

  $scope.order = orderService.newOrder;

  $scope.emptyCart = function(){
    $scope.order.products.length = 0;
    orderService.createNewOrder();
  };

  $scope.completeOrder = function() {
    //TODO Send the order to the backend
    alert('Thank you for your order!');
    $scope.emptyCart();
    $window.location.href = '#/orders/' + $scope.order.orderId;
  };

  $scope.orders = [];

  $scope.getOrderList = function(){

    var temp = orderService.getOrders();
    $scope.orders = temp;
    return $scope.orders;
  };

  $scope.getOrderList();

});
