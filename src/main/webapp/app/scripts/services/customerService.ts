'use strict';

angular.module('kantileverAngular').service('customerService', function ($resource, $http) {

  var customerResource = $resource(
    'http://localhost:6789/customers/profile',
    {customerId: '@customerId'},
    {
      save: {method: 'POST'},
      update: {method: 'PUT'}
    }
  );
  this.getCustomers = function () {
    return customerResource.get();
  };

  this.getCustomer = function (id) {
    return customerResource.get({customerId: id}, function () {
    }, function () {
      handleError();
    });
  };

  this.postCustomer = function (customer, callback) {
    var copiedCustomer = angular.copy(customer);
    customerResource.save(copiedCustomer, function () {
      callback.redirect();
    }, function () {
      handleError();
    });
  };

  this.updateCustomer = function (customer) {
    customerResource.update({customerId: customer.id}, customer, function () {
    }, function () {
      handleError();
    })
  };

  this.deleteCustomer = function (hateoasItem) {
    var customer = getContent(hateoasItem);
    customerResource.delete({customerId: customer.id}, function () {
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
