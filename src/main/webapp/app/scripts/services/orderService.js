'use strict';
angular.module('kantileverAngular').service('orderService', function ($resource) {
    var orderResource = $resource('http://localhost:6789/customerorders/:orderId1', { orderId1: '@orderId1' }, {
        save: { method: 'POST' },
        update: { method: 'PUT' }
    });
    this.getAllOrder = function () {
        return orderResource.get();
    };
    this.getOrder = function (id) {
        return orderResource.get({ orderId1: id });
    };
    this.postOrder = function (order) {
        var copiedOrder = angular.copy(order);
        orderResource.save(copiedOrder, function () { }, function () {
            handleError();
        });
    };
    this.updateOrder = function (order) {
        orderResource.update({ orderId1: order.id }, order, function () {
        }, function () {
            handleError();
        });
    };
    this.deleteOrder = function (order) {
        orderResource.delete({ orderId1: order.id }, function () {
        }, function () {
            handleError();
        });
    };
    var handleError = function () {
        console.log('error');
    };
    this.fetchOrder = function () {
        if (localStorage.getItem("order") === null) {
            return {
                'customerId': '0',
                'orderStatus': 'OPEN',
                'deliveryStatus': 'NOT SCHEDULED',
                'totalPrice': 0,
                'products': []
            };
        }
        else {
            var retrievedOrder = localStorage.getItem('order');
            return JSON.parse(retrievedOrder);
        }
    };
    this.newOrder = this.fetchOrder();
    this.setOrderInfo = function (orderId) {
        return this.getOrder(orderId);
    };
    this.createNewOrder = function () {
        this.newOrder.products.length = 0;
        this.newOrder.totalPrice = 0;
    };
    this.emptyCart = function () {
        localStorage.removeItem('order');
        this.newOrder = this.fetchOrder();
        return this.newOrder;
    };
});
//# sourceMappingURL=orderService.js.map