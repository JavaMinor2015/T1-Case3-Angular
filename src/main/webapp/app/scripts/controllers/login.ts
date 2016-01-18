'use strict';

angular.module('kantileverAngular')
  .controller('loginController', function ($scope, $location, $auth, toastr) {
    $scope.login = function () {
      $auth.login($scope.user)
        .then(function () {
          console.info($auth.getToken());
          toastr.success('You have successfully signed in!');
          $location.path('/');
        })
        .catch(function (error) {
          toastr.error(error.data.message, error.status);
        });
    };
  });
