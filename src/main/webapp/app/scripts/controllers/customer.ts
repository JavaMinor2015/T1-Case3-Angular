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

  $scope.sameAddress = true;

  $scope.registerCustomer = function(){
    if ($scope.sameAddress){
      $scope.setAddress($scope.newCustomer.address)
    }
    customerService.postCustomer($scope.newcustomer);
    $scope.resetCustomer();
    $scope.registerForm.$setPristine();
  };

  $scope.setAddress = function(address) {
    $scope.newCustomer.deliveryAddress = address;
  };

  $scope.resetCustomer = function() {
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
  };

});
