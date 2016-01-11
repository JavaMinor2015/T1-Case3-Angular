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
    orderService.createNewOrder();
    $scope.order = orderService.newOrder;
  };

  $scope.completeOrder = function() {
    //TODO Send the order to the backend
    console.info('Thank you for your order!');
    orderService.postOrder($scope.order);
    $scope.emptyCart();
    $window.location.href = '#/orders/' + $scope.order.orderId;
  };

  $scope.getOrder = function(orderId){
    orderService.setOrderInfo(orderId);
  };

  $scope.getOrderList = function(){
    return orderService.getAllOrder();

  };
  $scope.oldOrders =$scope.getOrderList();
  $scope.orderInfo = orderService.orderInfo;

});
