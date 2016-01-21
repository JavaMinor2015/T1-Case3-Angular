'use strict';

/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('orderController', function ($scope, $location, orderService, $stateParams) {

  $scope.order = orderService.newOrder;
  $scope.orderInfo = [];

  $scope.completeOrder = function() {
    if ($scope.order.orderId === undefined){
      orderService.postOrder($scope.order);
    }
    else {
      orderService.updateOrder($scope.order);
    }
    $scope.order = orderService.emptyCart();
  };

  $scope.getOrder = function () {
    var orderid = $stateParams.orderId;
    $scope.orderInfo = orderService.setOrderInfo(orderid);
  };

  $scope.getOrderList = function() {
    return orderService.getMyOrders();
  };

  $scope.cancelOrder = function(order){
    order.orderStatus = 'CANCELLED';
    orderService.updateOrder(order);
  };

  $scope.editOrder = function(order){
    localStorage.setItem('order', JSON.stringify(order));
    orderService.newOrder = order;
    $scope.order = orderService.newOrder;
    //TODO redirect
    $location.path('/cart');
  };
  $scope.oldOrders = $scope.getOrderList();
});
