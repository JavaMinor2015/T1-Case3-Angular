'use strict';

describe('Controller: cartController', function () {
  beforeEach(module('kantileverAngular'));

  var cartController, scope;
  var testJSON = {
      "content": {
        "id": "98765",
        "name": "bike",
        "amount": 5,
        "price": 125.50
      },
      "_links": {
        "self": {
          "href": "http://localhost:6789/products/98765"
        },
        "next": {
          "href": "http://localhost:6789/products/98765"
        },
        "prev": {
          "href": "http://localhost:6789/products/98765"
        },
        "update": {
          "href": "http://localhost:6789/products/98765"
        },
        "delete": {
          "href": "http://localhost:6789/products/98765"
        }
      }
    };
  beforeEach(inject(function ($controller, $rootScope, ) {
    scope = $rootScope.$new();
    cartController = $controller('cartController', {
      $scope: scope
    });
  }));
  it('should check if a product is already present in the shopping cart', function () {
    cartController.addToCart(testJSON);
    cartController.addToCart(testJSON);
    expect(cartController.getCartItemAmount()).toBe(2);
  });
  it('should remove an item from the shopping cart', function () {
    cartController.addToCart(testJSON);
    expect(cartController.getCartItemAmount()).toBe(1);
    cartController.removeProduct(testJSON)
    expect(cartController.getCartItemAmount()).toBe(0);
  });
  it('should remove all items from the shopping cart', function () {
    cartController.addToCart(testJSON);
    cartController.addToCart(testJSON);
    expect(cartController.GetCartItemAmount()).toBe(2);
    cartController.emptyCart();
    expect(cartController.getCartItemAmount()).toBe(0);
  });
});
