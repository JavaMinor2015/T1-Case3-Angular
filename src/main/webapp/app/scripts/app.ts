'use strict';

/**
 * @ngdoc overview
 * @name kantileverApp
 * @description
 * # kantileverApp
 *
 * Main module of the application.
 */
var kantilever = angular
  .module('kantileverAngular', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/catalog', {
        templateUrl: 'views/catalog.html',
        controller: 'catalogController'
      })
      .when('/orders', {
        templateUrl: 'views/orderlist.html',
        controller: 'orderController'
      })
      .when('/orders/:orderId',{
        templateUrl: 'views/order-detail.html',
        controller: 'orderController'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('kantileverAngular.services', []);
