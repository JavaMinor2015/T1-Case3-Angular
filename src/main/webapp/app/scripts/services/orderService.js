'use strict';
angular.module('kantileverAngular').service('orderService', function ($resource) {
    var orderResource = $resource('http://localhost:6789/customerorder/:orderId', { orderId: '@orderId' }, { update: { method: 'PUT' } });
    this.getAllOrder = function () {
        return orderResource.query();
    };
    this.getOrder = function (id) {
        return orderResource.get({ orderId: id });
    };
    this.postOrder = function (hateoasItem) {
        var order = getContent(hateoasItem);
        orderResource.save(order, function () { }, function () {
            handleError();
        });
    };
    this.updateOrder = function (hateoasItem) {
        var order = getContent(hateoasItem);
        orderResource.update({ orderId: order.id }, order, function () { }, function () {
            handleError();
        });
    };
    this.deleteOrder = function (hateoasItem) {
        var order = getContent(hateoasItem);
        orderResource.delete({ orderId: order.id }, function () { }, function () {
            handleError();
        });
    };
    var getContent = function (hateoasItem) {
        return hateoasItem.content;
    };
    var handleError = function () {
        console.log('error');
    };
    this.newOrder = {
        'orderId': '0',
        'customerId': '0',
        'orderStatus': 'OPEN',
        'deliveryStatus': 'NOT SCHEDULED',
        'totalPrice': 0,
        'version': 5,
        'products': []
    };
    this.calculateTotal = function () {
        for (var i = 0; i < this.newOrder.products.length; i++) {
            this.newOrder.totalPrice += this.newOrder.products[i].content.amount * this.newOrder.products[i].content.price;
        }
    };
    this.createNewOrder = function () {
        this.newOrder.products.length = 0;
        this.newOrder.totalPrice = 0;
    };
});
//# sourceMappingURL=orderService.js.map