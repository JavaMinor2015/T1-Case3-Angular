'use strict';

describe('Controller: orderController', function () {

  var scope, ctrl, httpBackend;
  var baseUrl = 'http://localhost:6789/customerorders';

  beforeEach(function () {
    module('kantileverAngular');
    inject(function ($controller, _$rootScope_, _$httpBackend_) {
      scope = _$rootScope_.$new();
      ctrl = $controller('orderController', {$scope: scope});
      httpBackend = _$httpBackend_;
    });
  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should retrieve a list of old orders', function () {
    var response = {
      content: [{}, {}, {}],
      _links: {}
    };
    httpBackend.expectGET(baseUrl).respond(response);
    httpBackend.flush();
    expect(scope.oldOrders.content.length).toBe(response.content.length);
  });

  describe('after instantiation', function () {
    beforeEach(function () {
      var response = {
        content: [{}, {}, {}],
        _links: {}
      };
      httpBackend.expectGET(baseUrl).respond(response);
      httpBackend.flush();
    });

    it('should send the order to the backend when order is completed', function () {
      scope.order = {
        'customerId': '0',
        'orderStatus': 'OPEN',
        'deliveryStatus': 'NOT SCHEDULED',
        'totalPrice': 0,
        'products': [
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      };

      httpBackend.expectPOST(baseUrl).respond(201, {content: {orderId: 1}});
      expect(scope.order.products.length).toBe(2);
      scope.completeOrder();
      expect(scope.order.products.length).toBe(0);
      httpBackend.flush();
    });

  });

});
