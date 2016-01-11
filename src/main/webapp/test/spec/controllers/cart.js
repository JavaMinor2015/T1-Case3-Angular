'use strict';

describe('Controller: cartController', function () {

  describe('cartController', function () {

    var scope, ctrl;
    var productJSON = {
      "id": "98765",
      "name": "bike",
      "amount": 1,
      "price": 125.5,
      "links": [
        {
          "rel": "self",
          "href": "http://localhost:6789/products/98765/"
        },
        {
          "rel": "previous_step",
          "href": "http://localhost:6789/products/98764/"
        },
        {
          "rel": "next_step",
          "href": "http://localhost:6789/products/98766/"
        },
        {
          "rel": "update",
          "href": "http://localhost:6789/products/98765/"
        },
        {
          "rel": "delete",
          "href": "http://localhost:6789/products/98765/"
        }
      ]
    };

    beforeEach(function () {
      module('kantileverAngular');
      inject(function($controller){
        scope = {};
        ctrl = $controller('cartController', {$scope: scope});
      });
    });

    it('testing',function () {
      expect(scope.test).toBe(true);
      scope.addToCart(productJSON);
      scope.addToCart(productJSON);
      expect(scope.getCartItemAmount()).toBe(2);
    });

  });

  //beforeEach(function () {
  //  module('kantileverAngular');
  //  inject(function (_$controller_, $rootScope, _$httpBackend_) {
  //    $cartController = _$controller_;
  //    $httpBackend = _$httpBackend_;
  //    $scope = $rootScope.$new();
  //  });
  //});
  //
  //afterEach(function () {
  //  $httpBackend.verifyNoOutstandingExpectation();
  //  $httpBackend.verifyNoOutstandingRequest();
  //});
  //
  //it('should check if a product is already present in the shopping cart', function () {
  //  $cartController.addToCart($testJSON);
  //  $cartController.addToCart($testJSON);
  //  expect($cartController.getCartItemAmount()).toBe(2);
  //});
  //it('should remove an item from the shopping cart', function () {
  //  $cartController.addToCart($testJSON);
  //  expect($cartController.getCartItemAmount()).toBe(1);
  //  $cartController.removeProduct($testJSON);
  //  expect($cartController.getCartItemAmount()).toBe(0);
  //});
  //it('should remove all items from the shopping cart', function () {
  //  $cartController.addToCart($testJSON);
  //  $cartController.addToCart($testJSON);
  //  expect($cartController.getCartItemAmount()).toBe(2);
  //  $cartController.emptyCart();
  //  expect($cartController.getCartItemAmount()).toBe(0);
  //});
});
