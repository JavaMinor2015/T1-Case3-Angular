'use strict';

/**
 * @ngdoc overview
 * @name kantileverApp
 * @description
 * # kantileverApp
 *
 * Main module of the application.
 */
angular.module('kantileverAngular', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller('MainController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  })
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
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'cartController',
        controllerAs: 'cart'
      })
      .when('/order', {
        templateUrl: 'views/orderConfirmation.html',
        controller: 'orderController',
        controllerAs: 'order'
      })
      .when('/orders', {
        templateUrl: 'views/orderList.html',
        controller: 'orderController',
        controllerAs: 'order'
      })
      .when('/orders/:orderId',{
        templateUrl: 'views/order-detail.html',
        controller: 'orderController',
        controllerAs: 'order'
    })
      .when('/register', {
        templateUrl: 'views/registration.html',
        controller: 'customerController',
        controllerAs: 'customer'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
angular.module('kantileverAngular.services', []);
