'use strict';

describe('Controller: customerController', function() {

  var scope, ctrl, httpBackend, state;
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

  beforeEach(module('kantileverAngular'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function ($state, $controller, _$rootScope_, _$httpBackend_) {
    state = $state;
    scope = _$rootScope_.$new();
    ctrl = $controller('customerController', {$scope: scope});
    httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should register a customer with 1 address', function() {
    angular.copy(customer, scope.newCustomer);
    scope.sameAddress = true;

    httpBackend.expectPOST("http://localhost:6789/auth/signup").respond(201, {});
    httpBackend.expectPOST(baseUrl).respond(201, {});
    scope.registerCustomer();
    httpBackend.flush();

    httpBackend.expectPOST("http://localhost:6789/auth/signup").respond(500, {});
    scope.registerCustomer();
    httpBackend.flush();
  });

  it('should register a customer with 2 addresses', function() {
    angular.copy(customer, scope.newCustomer);
    scope.sameAddress = false;

    httpBackend.expectPOST('http://localhost:6789/auth/signup').respond(201, {});
    httpBackend.expectPOST(baseUrl).respond(201, {});
    scope.registerCustomer();
    httpBackend.flush();
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
      firstName: "",
      lastName: "",
      initials: "",
      address: null,
      deliveryAddress: null,
      orders: [ ]
    });
  });

  it('should edit a customer', function() {
    var customer = {
      id: 1
    };
    httpBackend.expectPUT('http://localhost:6789/customers/profile').respond(201, {});
    scope.editCustomer(customer);
    httpBackend.flush();
  });

  it('should get customer profile', function() {
    httpBackend.expectGET('http://localhost:6789/customers/profile').respond(201, {});
    scope.getCustomer(scope);
    httpBackend.flush();
  });

  it('should set the customer', function() {
    var customer = {
      data: {
        content: {
          id: 1
        }
      }
    };
    scope.setCustomer(customer);
    expect(scope.customer).toBe(customer.data.content);
  });

});
