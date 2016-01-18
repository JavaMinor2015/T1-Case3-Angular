'use strict';
angular.module('kantileverAngular').controller('customerController', function ($scope, customerService) {
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
        customerService.postCustomer($scope.newCustomer);
        $scope.resetCustomer();
        $scope.registerForm.$setPristine();
    };
    $scope.editCustomer = function (id) {
        $scope.customer = $scope.getCustomer(id);
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
    $scope.getCustomer = function (id) {
        customerService.getCustomer(id, $scope);
    };
    $scope.setCustomer = function (customer) {
        $scope.customer = customer.content;
        console.log($scope.customer);
    };
});
//# sourceMappingURL=customer.js.map