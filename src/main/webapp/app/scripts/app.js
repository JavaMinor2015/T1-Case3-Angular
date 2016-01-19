'use strict';
/**
 * @ngdoc overview
 * @name kantileverApp
 * @description
 * # kantileverApp
 *
 * Main module of the application.
 */
var kantilever = angular.module('kantileverAngular', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toastr',
    'ui.router',
    'satellizer'
])
    .controller('MainController', function ($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    };
})
    .config(function ($routeProvider, $stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
        .state('home', {
        url: '/',
        templateUrl: 'views/main.html'
    })
        .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
        .state('catalog', {
        url: '/catalog',
        templateUrl: 'views/catalog.html',
        controller: 'CatalogCtrl',
        controllerAs: 'catalog'
    })
        .state('product', {
        url: '/product',
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
    })
        .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'cartController',
        controllerAs: 'cart',
        params: { tabName: 'cart' }
    })
        .state('confirm', {
        url: '/confirm',
        templateUrl: 'views/orderConfirmation.html',
        controller: 'orderController',
        controllerAs: 'order'
    })
        .state('orders', {
        url: '/orders',
        templateUrl: 'views/orderList.html',
        controller: 'orderController',
        controllerAs: 'order'
    })
        .state('test', {
        url: '/order/:orderId',
        templateUrl: 'views/order-detail.html',
        controller: 'orderController',
        controllerAs: 'order'
    })
        .state('register', {
        url: '/register',
        templateUrl: 'views/registration.html',
        controller: 'customerController',
        controllerAs: 'customer'
    })
        .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
    })
        .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
    })
        .state('customer', {
        url: '/profile',
        templateUrl: 'views/customer.html',
        controller: 'customerController',
        controllerAs: 'customer'
    });
    //});
    $urlRouterProvider.otherwise('/');
    $authProvider.baseUrl = "http://localhost:6789";
    $authProvider.tokenRoot = "entity";
});
kantilever.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);
function skipIfLoggedIn($q, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.reject();
    }
    else {
        deferred.resolve();
    }
    return deferred.promise;
}
;
function loginRequired($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
        deferred.resolve();
    }
    else {
        $location.path('/login');
    }
    return deferred.promise;
}
;
angular.module('kantileverAngular.services', []);
angular.module('kantileverAngular.directives', []);
//# sourceMappingURL=app.js.map