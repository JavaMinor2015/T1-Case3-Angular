'use strict';
/**
 * @ngdoc function
 * @name MainController
 * @description
 * # MainCtrl
 * Controller
 */
angular.module('kantileverAngular').controller('MainCtrl', function () {
    this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Test'
    ];
});
angular.module('kantileverAngular').controller('shoppingCartController', function($scope, $http){

  $scope.products = null;
  $http.get('productTest.json')
    .success(function(data){
      $scope.products = data;
  })
    .error(function(data, status, error, config){
      $scope.products = [{heading:"Error",description:"Could not load json   data"}];
  });
});
//# sourceMappingURL=main.js.map
