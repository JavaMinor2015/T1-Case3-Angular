'use strict';

describe('Controller: orderController', function () {

  var scope, ctrl, httpBackend;
  var baseUrl = 'http://localhost:6789/customerorders';

  beforeEach(function() {
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

  it('should retrieve a list of old orders', function() {
    var response = {
      content: [{},{},{}],
      _links: {}
    };
    httpBackend.expectGET(baseUrl).respond(response);
    httpBackend.flush();
    expect(scope.oldOrders.content.length).toBe(response.content.length);
  });

  describe('after instantiation', function () {
    beforeEach(function () {
      var response = {
        content: [{},{},{}],
        _links: {}
      };
      httpBackend.expectGET(baseUrl).respond(response);
      httpBackend.flush();
    });

    it('should empty the shopping cart', function() {
      scope.order = {
        'orderId': '0',
        'customerId': '0',
        'orderStatus': 'OPEN',
        'deliveryStatus': 'NOT SCHEDULED',
        'totalPrice': 0,
        'version': 5,
        'products': [
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      };

      expect(scope.order.products.length).toBe(2);
      scope.emptyCart();
      expect(scope.order.products.length).toBe(0)
    });

    it('should send the order to the backend when order is completed', function(){
      scope.order = {
        'orderId': '0',
        'customerId': '0',
        'orderStatus': 'OPEN',
        'deliveryStatus': 'NOT SCHEDULED',
        'totalPrice': 0,
        'version': 5,
        'products': [
          {
            id: 1
          },
          {
            id: 2
          }
        ]
      };

      httpBackend.expectPOST(baseUrl + '/' + scope.order.orderId).respond(201, {});
      scope.completeOrder();
      httpBackend.flush();
    });

  });

});
