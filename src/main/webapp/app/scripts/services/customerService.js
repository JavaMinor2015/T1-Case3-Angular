'use strict';
angular.module('kantileverAngular').service('customerService', function ($resource, $http) {
    var customerResource = $resource('http://localhost:6789/customers/:customerId/:profile', {
        customerId: '@customerId',
        profile: '@profile'
    }, {
        save: { method: 'POST' },
        update: { method: 'PUT' }
    });
    this.getCustomers = function () {
        return customerResource.get();
    };
    this.getCustomer = function (id, scope) {
        return customerResource.get({ customerId: id }, function (response) {
        }, function () {
            handleError();
        });
    };
    this.postCustomer = function (customer) {
        var copiedCustomer = angular.copy(customer);
        customerResource.save(copiedCustomer, function () {
        }, function () {
            handleError();
        });
    };
    this.updateCustomer = function (customer) {
        customerResource.update({ profile: "profile" }, customer, function () {
        }, function () {
            handleError();
        });
    };
    this.deleteCustomer = function (hateoasItem) {
        var customer = getContent(hateoasItem);
        customerResource.delete({ customerId: customer.id }, function () {
        }, function () {
            handleError();
        });
    };
    var getContent = function (hateoasItem) {
        return hateoasItem.content;
    };
    var handleError = function () {
        console.log('error');
    };
    this.getCustomerProfile = function (scope) {
        $http({
            method: 'GET',
            url: 'http://localhost:6789/customers/profile'
        }).then(function (response) {
            scope.setCustomer(response);
        }, function () {
            handleError();
        });
    };
});
//# sourceMappingURL=customerService.js.map