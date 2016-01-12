'use strict';

angular.module('kantileverAngular').controller('customerController', function ($scope, customerService) {

  $scope.newCustomer = {
    id: 0,
    version: 0,
    firstName: "",
    lastName: "",
    initials: "",
    address: null,
    deliveryAddress: null,
    orders: [ ]
  };

  $scope.registerCustomer = function(){
    console.log($scope.newCustomer);
    customerService.postCustomer($scope.newcustomer);
    $scope.newCustomer = {
      id: 0
    };
    $scope.registerForm.$setPristine();
  };

});
