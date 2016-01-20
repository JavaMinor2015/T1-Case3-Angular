'use strict';

describe('Service: productService', function () {

  var service, httpBackend, state;
  var baseUrl = 'http://localhost:6789/products';


  beforeEach(module('kantileverAngular'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function ($state, productService, _$httpBackend_) {
    state = $state;
    service = productService;
    httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should get all products', function () {
    //Success
    httpBackend.expectGET(baseUrl).respond(201, {});
    service.getAllProducts();
    httpBackend.flush();

    //Fail
    httpBackend.expectGET(baseUrl).respond(500, {});
    service.getAllProducts();
    httpBackend.flush();
  });

  it('should get a specific product', function () {
    var id = 1;
    //Success
    httpBackend.expectGET(baseUrl + '/' + id).respond(201, {});
    service.getProduct(id);
    httpBackend.flush();

    //Fail
    httpBackend.expectGET(baseUrl + '/' + id).respond(500, {});
    service.getProduct(id);
    httpBackend.flush();
  });

});
