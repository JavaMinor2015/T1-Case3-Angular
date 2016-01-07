'use strict';

/**
 * @ngdoc function
 * @name MainController
 * @description
 * # MainCtrl
 * Controller
 */


angular.module('kantileverAngular').controller('orderController',['$scope', 'orderService', function ($scope, orderService) {

  $scope.orders = [];

  $scope.getOrderList = function(){

    var temp = orderService.getOrders();
      $scope.orders = temp;
    return $scope.orders;
  };



  $scope.getOrderList();
  }]);




