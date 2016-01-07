'use strict';
angular.module('kantileverAngular')
    .service('ShoppingCartService', function ($resource) {
    var orderResource = $resource('http://localhost:6789/order/:orderId', { orderId: '@orderId' }, { update: { method: 'PUT' } });
    this.getAllOrder = function () {
        return orderResource.query();
    };
    this.getOrder = function (id) {
        return orderResource.get({ orderId: id });
    };
    this.postOrder = function (order) {
        orderResource.save(order, function () { }, function () {
            handleError();
        });
    };
    this.updateOrder = function (order) {
        orderResource.update({ orderId: order.id }, order, function () { }, function () {
            handleError();
        });
    };
    this.deleteOrder = function (product) {
        orderResource.delete({ orderId: product.id }, function () { }, function () {
            handleError();
        });
    };
    var handleError = function () {
        console.log('error');
    };
    this.products = [];
});
//# sourceMappingURL=shoppingcartservice.js.map