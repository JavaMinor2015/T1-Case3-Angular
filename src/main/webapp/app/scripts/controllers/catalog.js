'use strict';
/**
 * @ngdoc function
 * @name KantileverAngular.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 *
 */
angular.module('kantileverAngular').controller('CatalogCtrl', function ($scope, $http) {
    $scope.sortType = 'name'; // set the default sort type
    $scope.sortReverse = false; // set the default sort order
    $scope.searchProduct = ''; // set the default search/filter term
    $scope.products = null;
    $http.get('productTest.json').success(function ($data) {
        $scope.products = $data;
    }).error(function ($error) {
        $scope.products = $error;
    });
});
//# sourceMappingURL=catalog.js.map