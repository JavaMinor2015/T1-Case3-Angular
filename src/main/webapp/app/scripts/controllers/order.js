'use strict';
/**
 * @ngdoc function
 * @name MainController
 * @description
 * # MainCtrl
 * Controller
 */
kantilever.controller('orderController', ['$scope', 'orderService', function ($scope, orderService) {
    $scope.orders = [];
    $scope.getOrderList = function () {
        var temp = orderService.getOrders();
        $scope.orders = temp;
        return $scope.orders;
    };
    $scope.getOrderList();
}]);
//# sourceMappingURL=order.js.map