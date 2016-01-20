'use strict';

describe('Service: orderService', function () {

  var service, httpBackend;
  var baseUrl = 'http://localhost:6789/customerorders';

  beforeEach(function () {
    module('kantileverAngular');
    inject(function (orderService, _$httpBackend_) {
      service = orderService;
      httpBackend = _$httpBackend_;
    });
  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
    window.localStorage.clear();
  });

  it('should get a specific order', function () {
    var id = 1;
    //Success
    httpBackend.expectGET(baseUrl + '/' + id).respond(201, {});
    service.getOrder(id);
    httpBackend.flush();

    //Fail
    httpBackend.expectGET(baseUrl + '/' + id).respond(500, []);
    service.getOrder(id);
    httpBackend.flush();
  });

  it('should post a order', function () {
    var order = {};
    //Success
    httpBackend.expectPOST(baseUrl).respond(201, {
      content: {
        orderId: 1
      }
    });
    service.postOrder(order);
    httpBackend.flush();

    //Fail
    httpBackend.expectPOST(baseUrl).respond(500, {});
    service.postOrder(order);
    httpBackend.flush();
  });

  it('should update a order', function () {
    var order = {
      id: 1
    };
    //Success
    httpBackend.expectPUT(baseUrl + '/' + order.id).respond(201, {content: {orderId: 1}});
    service.updateOrder(order);
    httpBackend.flush();

    //Fail
    httpBackend.expectPUT(baseUrl + '/' + order.id).respond(500, {});
    service.updateOrder(order);
    httpBackend.flush();
  });

  it('should delete a order', function () {
    var order = {
      id: 1
    };
    //Success
    httpBackend.expectDELETE(baseUrl + '/' + order.id).respond(201, {});
    service.deleteOrder(order);
    httpBackend.flush();

    //Fail
    httpBackend.expectDELETE(baseUrl + '/' + order.id).respond(500, {});
    service.deleteOrder(order);
    httpBackend.flush();
  });

  it('should get an order from localstorage', function () {
    //Success
    expect(window.localStorage.getItem('order')).toBeNull();
    window.localStorage.setItem('order', JSON.stringify({orderId: 1}));
    expect(service.fetchOrder()).toEqual({orderId: 1});

    //Fail
    window.localStorage.clear();
    expect(window.localStorage.getItem('order')).toBeNull();
    var response = {
      'customerId': '0',
      'orderStatus': 'OPEN',
      'deliveryStatus': 'NOT SCHEDULED',
      'totalPrice': 0,
      'products': []
    };
    expect(service.fetchOrder()).toEqual(response);
  });

  it('should create a new order', function () {
    var order = {
      'orderId': '0',
      'customerId': '0',
      'orderStatus': 'OPEN',
      'deliveryStatus': 'NOT SCHEDULED',
      'totalPrice': 300,
      'version': 5,
      'products': [
        {id: 1}, {id: 2}, {id: 3}
      ]
    };

    service.newOrder = order;
    expect(service.newOrder.totalPrice).toEqual(300);
    expect(service.newOrder.products.length).toEqual(3);
    service.createNewOrder();
    expect(service.newOrder.totalPrice).toEqual(0);
    expect(service.newOrder.products.length).toEqual(0);
  });

  it('should setOderInfo correctly', function() {
    var id = 1;
    var response = {orderId: 1};
    httpBackend.expectGET(baseUrl + '/' + id).respond(200, response);
    var order = service.setOrderInfo(id);
    httpBackend.flush();
    expect(angular.equals(response, order)).toBe(true);
  });

});
