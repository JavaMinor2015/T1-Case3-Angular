
'use strict';

/**
 * @ngdoc function
 * @name KantileverAngular.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 *
 */
angular.module('kantileverAngular')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        toastr.info('You have been logged out');
        $location.path('/#/');
      });
  });
