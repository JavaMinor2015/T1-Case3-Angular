'use strict';

describe('Controller: orderController', function () {

  var scope, ctrl, httpBackend, state;
  var baseUrl = 'http://localhost:6789/customerorders';

  beforeEach(module('kantileverAngular'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function ($state, $controller, _$rootScope_, _$httpBackend_) {
    state = $state;
    scope = _$rootScope_.$new();
    ctrl = $controller('orderController', {
      $scope: scope,
      $routeParams: {orderId: 1}
    });
    httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
    window.localStorage.clear();
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

    it('should POST the order to the backend when order is completed', function () {
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

    it('should PUT the order to the backend when order is completed', function () {
      scope.order = {
        'id': 12345,
        'orderId': 1,
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

      httpBackend.expectPUT(baseUrl + '/' + scope.order.id).respond(201, {content: {orderId: 1}});
      expect(scope.order.products.length).toBe(2);
      scope.completeOrder();
      expect(scope.order.products.length).toBe(0);
      httpBackend.flush();
    });

    it('should get an order by routeparam id', function () {
      var response = {orderId: 1};
      httpBackend.expectGET(baseUrl + '/' + 1).respond(201, response);
      scope.getOrder();
      httpBackend.flush();
      expect(angular.equals(response, scope.orderInfo)).toBe(true);
    });

    it('should cancel an order', function () {
      var order = {
        id: 12345,
        orderId: 1,
        orderStatus: 'OPEN'
      };

      expect(order.orderStatus).toEqual('OPEN');
      httpBackend.expectPUT(baseUrl + '/' + order.id).respond(201, {content: {orderId: 1}});
      scope.cancelOrder(order);
      httpBackend.flush();
      expect(order.orderStatus).toEqual('CANCELLED');
    });

    it('should edit an order', function () {
      var order = {
        orderId: 1
      };

      expect(JSON.parse(window.localStorage.getItem('order'))).toBe(null);
      scope.editOrder(order);
      expect(scope.order).toBe(order);
      expect(JSON.parse(window.localStorage.getItem('order'))).toEqual(order);
    });

  });
});
