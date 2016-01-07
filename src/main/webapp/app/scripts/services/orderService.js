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
});
//# sourceMappingURL=orderService.js.map