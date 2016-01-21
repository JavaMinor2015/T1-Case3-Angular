'use strict';
angular.module('kantileverAngular').controller('customerController', function ($scope, customerService, $location, $auth, toastr) {
    $scope.newCustomer = {
        "firstName": "",
        "lastName": "",
        "initials": "",
        "address": null,
        "deliveryAddress": null,
        "orders": []
    };
    $scope.customer = {};
    $scope.sameAddress = true;
    $scope.editmode = {
        "customer": false,
        "address": false,
        "delivery": false
    };
    $scope.registerCustomer = function () {
        if ($scope.sameAddress) {
            $scope.setAddress($scope.newCustomer.address);
        }
        var newCustomer = $scope.newCustomer;
        $auth.signup($scope.user)
            .then(function (response) {
            toastr.info('You have successfully created a new account and have been signed-in');
            customerService.postCustomer(newCustomer, $scope);
            $auth.setToken(response);
        })
            .catch(function () {
            toastr.error('User already exists!');
        });
        $scope.resetCustomer();
    };
    $scope.editCustomer = function (customer) {
        customerService.updateCustomer(customer);
    };
    $scope.setAddress = function (address) {
        $scope.newCustomer.deliveryAddress = address;
    };
    $scope.resetCustomer = function () {
        $scope.newCustomer = {
            firstName: "",
            lastName: "",
            initials: "",
            address: null,
            deliveryAddress: null,
            orders: []
        };
    };
    $scope.getCustomer = function () {
        customerService.getCustomerProfile($scope);
    };
    $scope.setCustomer = function (customer) {
        $scope.customer = customer.data.content;
    };
    $scope.redirect = function () {
        $location.path('/profile');
    };
});
//# sourceMappingURL=customer.js.map