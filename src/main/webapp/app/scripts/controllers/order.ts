'use strict';

/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('orderController', function($scope, $window, orderService,$routeParams) {

  $scope.order = orderService.newOrder;
  $scope.orderInfo= [];


  $scope.emptyCart = function(){
    orderService.createNewOrder();
    $scope.order = orderService.newOrder;
  };

  $scope.completeOrder = function() {
    //TODO Send the order to the backend
    console.info('Thank you for your order!');
    console.info($scope.order);
    var order = $scope.order;
    orderService.postOrder(order);
    $scope.emptyCart();
    $window.location.href = '#/orders/' + $routeParams.orderId;
  };

  $scope.getOrder = function(){

    var orderid = $routeParams.orderId;
    $scope.orderInfo = orderService.setOrderInfo(orderid);
    console.info($scope.orderInfo);
  };

  $scope.getOrderList = function(){
    return orderService.getAllOrder();

  };
  $scope.oldOrders =$scope.getOrderList();



});
