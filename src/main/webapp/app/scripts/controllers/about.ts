'use strict';

/**
 * @ngdoc function
 * @name KantileverAngular.controller:AboutCtrl
 * @description
 * # AboutCtrl
 *
 */

angular.module('kantileverAngular')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
          toastr.success('You have successfully signed in!');
          $location.path('/');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

  });
