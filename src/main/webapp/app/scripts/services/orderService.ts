'use strict';


angular.module('kantileverAngular').service('orderService', function ($http) {

  this.getOrders = function () {
    var $list = [
      {
        orderId: 12345,
        totalAmount: 359.00,
        orderDate: '06-01-2016'
      },
      {
        orderId: 23456,
        totalAmount: 99.99,
        orderDate: '05-01-2016'
      }
    ];
    return $list;
  };

  this.getOrder = function (orderId) {
    return $http.get('orders/orderById/' + orderId);
  };

  this.newOrder = {
    "orderId": "0",
    "customerId": "0",
    "orderStatus": "OPEN",
    "deliveryStatus": "NOT SCHEDULED",
    "totalPrice": 0,
    "version": 5,
    "products": []
  };

  this.calculateTotal = function(){
    for (var i = 0; i < this.newOrder.products.length; i++){
      this.newOrder.totalPrice += this.newOrder.products[i].amount * this.newOrder.products[i].price;
    }
  };

  this.createNewOrder = function(){
    this.newOrder = {
      "orderId": "1",
      "customerId": "0",
      "orderStatus": "OPEN",
      "deliveryStatus": "NOT SCHEDULED",
      "totalPrice": 0,
      "version": 5,
      "products": []
    };
  };

});

