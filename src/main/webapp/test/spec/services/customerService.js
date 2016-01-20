'use strict';

describe('Service: customerService', function() {

  var service, httpBackend, state;
  var baseUrl = 'http://localhost:6789/customers';

  beforeEach(module('kantileverAngular'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function($state, customerService, _$httpBackend_) {
    state = $state;
    service = customerService;
    httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should get all customers', function() {
    //Success
    httpBackend.expectGET(baseUrl).respond(201, {});
    service.getCustomers();
    httpBackend.flush();

    //Fail
    httpBackend.expectGET(baseUrl).respond(500, {});
    service.getCustomers();
    httpBackend.flush();
  });

  it('should get a specific customer', function() {
    var id = 1;
    //Success
    httpBackend.expectGET(baseUrl + '/' + id).respond(201, {});
    service.getCustomer(id);
    httpBackend.flush();

    //Fail
    httpBackend.expectGET(baseUrl + '/' + id).respond(500, []);
    service.getCustomer(id);
    httpBackend.flush();
  });

  it('should post a customer', function() {
    var customer = {};
    var callback = {
      redirect: function(){}
    };
    spyOn(callback, 'redirect');

    //Success
    httpBackend.expectPOST(baseUrl).respond(201, {});
    service.postCustomer(customer, callback);
    httpBackend.flush();
    expect(callback.redirect).toHaveBeenCalled();

    //Fail
    httpBackend.expectPOST(baseUrl).respond(500, {});
    service.postCustomer(customer, callback);
    httpBackend.flush();
  });

  it('should update a customer', function() {
    var customer = {
      id: 1
    };
    //Success
    httpBackend.expectPUT(baseUrl + '/profile').respond(201, {});
    service.updateCustomer(customer);
    httpBackend.flush();

    //Fail
    httpBackend.expectPUT(baseUrl + '/profile').respond(500, {});
    service.updateCustomer(customer);
    httpBackend.flush();
  });

  it('should delete a customer', function() {
    var hateoasItem = {
      content: {
        id: 1
      },
      links: {}
    };
    //Success
    httpBackend.expectDELETE(baseUrl + '/' + hateoasItem.content.id).respond(201, {});
    service.deleteCustomer(hateoasItem);
    httpBackend.flush();

    //Fail
    httpBackend.expectDELETE(baseUrl + '/' + hateoasItem.content.id).respond(500, {});
    service.deleteCustomer(hateoasItem);
    httpBackend.flush();
  });

});
