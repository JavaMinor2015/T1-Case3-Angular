'use strict';
/**
 * @ngdoc function
 * @name CartController
 * @description
 * # CartController
 * Controller
 */
angular.module('kantileverAngular').controller('cartController', function ($scope, $http) {
    $scope.products = null;
    $http.get('productTest.json')
        .success(function ($data) {
        $scope.products = $data;
    })
        .error(function ($error) {
        $scope.products = $error;
    });
});
//# sourceMappingURL=cart.js.map