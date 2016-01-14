'use strict';

describe('Service: customerService', function() {

  var service, httpBackend;
  var baseUrl = 'http://localhost:6789/customers';

  beforeEach(function () {
    module('kantileverAngular');
    inject(function(customerService, _$httpBackend_) {
      service = customerService;
      httpBackend = _$httpBackend_;
    });
  });

  it('should get all customers', function() {
    httpBackend.expectGET(baseUrl).respond(201, []);
    service.getCustomers();
    httpBackend.flush();
  });

  it('sohuld get a specific customer', function() {
    var id = 1;
    httpBackend.expectGET(baseUrl + '/' + id).respond(201, {});
    service.getCustomer(id);
    httpBackend.flush();
  });

  it('should post a customer', function() {
    var customer = {};
    httpBackend.expectPOST(baseUrl).respond(201, {});
    service.postCustomer(customer);
    httpBackend.flush();
  });

  it('should update a customer', function() {
    var hateoasItem = {
      content: {
        id: 1
      },
      links: {

      }
    };
    httpBackend.expectPUT(baseUrl + '/' + hateoasItem.content.id).respond(201, {});
    service.updateCustomer(hateoasItem);
    httpBackend.flush();
  });

  it('should delete a customer', function() {
    var hateoasItem = {
      content: {
        id: 1
      },
      links: {}
    };
    httpBackend.expectDELETE(baseUrl + '/' + hateoasItem.content.id).respond(201, {});
    service.deleteCustomer(hateoasItem);
    httpBackend.flush();
  });

});
