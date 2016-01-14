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
        orderService.postOrder($scope.order);
        $scope.order = orderService.emptyCart();
        $window.location.href = '#/orders/' + $routeParams.orderId;
    };
    $scope.getOrder = function () {
        var orderid = $routeParams.orderId;
        $scope.orderInfo = orderService.setOrderInfo(orderid);
        console.info($scope.orderInfo);
    };
    $scope.getOrderList = function () {
        return orderService.getAllOrder();
    };
    $scope.oldOrders = $scope.getOrderList();
});
//# sourceMappingURL=order.js.map