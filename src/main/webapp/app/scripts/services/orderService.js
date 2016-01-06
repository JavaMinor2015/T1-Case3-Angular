'use strict';
kantilever.service('orderService', function ($http, $q) {
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
});
//# sourceMappingURL=orderService.js.map