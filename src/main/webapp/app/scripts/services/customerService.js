'use strict';
angular.module('kantileverAngular').service('customerService', function ($resource) {
    var customerResource = $resource('http://localhost:6789/customers/:customerId', { customerId: '@customerId' }, {
        save: { method: 'POST' },
        update: { method: 'PUT' }
    });
    this.getCustomers = function () {
        return customerResource.query();
    };
    this.getCustomer = function (id, scope) {
        return customerResource.get({ customerId: id }, function (response) {
            scope.setCustomer(response);
        }, function () {
            handleError();
        });
    };
    this.postCustomer = function (customer) {
        customerResource.save(customer, function () {
        }, function () {
            handleError();
        });
    };
    this.updateCustomer = function (hateoasItem) {
        var customer = getContent(hateoasItem);
        customerResource.update({ customerId: customer.id }, customer, function () {
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
});
//# sourceMappingURL=customerService.js.map