'use strict';

angular.module('kantileverAngular').controller('customerController', function ($scope, customerService, $location, $auth, toastr) {

  $scope.newCustomer = {
    "firstName": "",
    "lastName": "",
    "initials": "",
    "address": null,
    "deliveryAddress": null,
    "orders": [ ]
  };

  $scope.sameAddress = true;

  $scope.registerCustomer = function(){
    console.info('called');
    if ($scope.sameAddress){


      $scope.setAddress($scope.newCustomer.address)
    }


    $auth.signup($scope.user)
      .then(function(response) {
        $auth.setToken(response);
        $location.path('/');
        toastr.info('You have successfully created a new account and have been signed-in');
        customerService.postCustomer($scope.newCustomer);
      })
      .catch(function(response) {
        toastr.error(response.data.message);
      });

    $scope.resetCustomer();
    $scope.registerForm.$setPristine();
  };

  $scope.setAddress = function(address) {
    $scope.newCustomer.deliveryAddress = address;
  };

  $scope.resetCustomer = function() {
    $scope.newCustomer = {
      firstName: "",
      lastName: "",
      initials: "",
      address: null,
      deliveryAddress: null,
      orders: [ ]
    };
  };

});
