'use strict';

/**
 * @ngdoc function
 * @name AuthController
 * @description
 * # AuthController
 * Controller
 */


angular.module('kantileverAngular')
  .controller('NavbarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

  });
