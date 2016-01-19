'use strict';
/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('orderController', function ($scope, $window, orderService, $routeParams) {
    $scope.order = orderService.newOrder;
    $scope.orderInfo = [];
    $scope.completeOrder = function () {
        console.info('Thank you for your order!');
        if ($scope.order.orderId === undefined) {
            orderService.postOrder($scope.order);
        }
        else {
            orderService.updateOrder($scope.order);
        }
        $scope.order = orderService.emptyCart();
    };
    $scope.getOrder = function () {
        var orderid = $routeParams.orderId;
        $scope.orderInfo = orderService.setOrderInfo(orderid);
    };
    $scope.getOrderList = function () {
        return orderService.getAllOrder();
    };
    $scope.cancelOrder = function (order) {
        order.orderStatus = 'CANCELLED';
        orderService.updateOrder(order);
    };
    $scope.editOrder = function (order) {
        localStorage.setItem('order', JSON.stringify(order));
        orderService.newOrder = order;
        $scope.order = orderService.newOrder;
        //TODO redirect
    };
    $scope.oldOrders = $scope.getOrderList();
});
//# sourceMappingURL=order.js.map