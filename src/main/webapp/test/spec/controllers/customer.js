'use strict';

describe('Controller: customerController', function() {

  var scope, ctrl, httpBackend;
  var baseUrl = 'http://localhost:6789/customers';

  var customer = {
    id: 0,
    version: 0,
    firstName: 'Firstname',
    lastName: 'Lastname',
    initials: 'T.F.',
    address: {
      city: '1',
      number: '1',
      streetname: '1',
      zipcode: '1'
    },
    deliveryAddress: {
      city: '2',
      number: '2',
      streetname: '2',
      zipcode: '2'
    },
    orders: [ ]
  };

  beforeEach(function() {
    module('kantileverAngular');
    inject(function ($controller, _$rootScope_, _$httpBackend_) {
      scope = _$rootScope_.$new();
      ctrl = $controller('customerController', {$scope: scope});
      httpBackend = _$httpBackend_;
    });
  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should register a customer with 1 address', function() {
    angular.copy(customer, scope.newCustomer);
    scope.sameAddress = true;
    scope.registerForm = {
      $valid: true,
      $setPristine: function () {
      }
    };
    spyOn(scope.registerForm, '$setPristine');

    httpBackend.expectPOST(baseUrl).respond(201, {});
    scope.registerCustomer();
    httpBackend.flush();
    expect(scope.registerForm.$setPristine).toHaveBeenCalled();
  });

  it('should register a customer with 2 addresses', function() {
    angular.copy(customer, scope.newCustomer);
    scope.sameAddress = false;
    scope.registerForm = {
      $valid: true,
      $setPristine: function () {
      }
    };
    spyOn(scope.registerForm, '$setPristine');

    httpBackend.expectPOST(baseUrl).respond(201, {});
    scope.registerCustomer();
    httpBackend.flush();
    expect(scope.registerForm.$setPristine).toHaveBeenCalled();
  });

  it('should set an address', function() {
    var address = {
      address: 'test'
    };
    scope.setAddress(address);
    expect(scope.newCustomer.deliveryAddress).toBe(address);
  });

  it('should reset the customer', function() {
    scope.newCustomer = customer;
    expect(scope.newCustomer).toBe(customer);
    scope.resetCustomer();
    expect(scope.newCustomer).toEqual({
      id: 0,
      version: 0,
      firstName: "",
      lastName: "",
      initials: "",
      address: null,
      deliveryAddress: null,
      orders: [ ]
    });
  });

});
