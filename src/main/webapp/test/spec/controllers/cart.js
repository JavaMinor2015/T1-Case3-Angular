'use strict';

describe('Controller: cartController', function () {

  var scope, ctrl;
  var productJSON = {
    "content": {
      "id": "98765",
      "name": "bike",
      "amount": 1,
      "price": 125.5
    },
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
    inject(function ($controller, _$rootScope_) {
      scope = _$rootScope_.$new();
      ctrl = $controller('cartController', {$scope: scope});
      productJSON.content.amount = 1;
    });
  });
  it('should check if a product is already present in the shopping cart', function () {
    scope.addToCart(productJSON);
    scope.addToCart(productJSON);
    scope.addToCart(productJSON);
    scope.addToCart(productJSON);
    expect(scope.products[0].content.amount).toBe(4);
  });
  it('should remove an item from the shopping cart', function () {
    scope.addToCart(productJSON);
    expect(scope.getCartItemAmount()).toBe(1);
    scope.removeProduct(productJSON);
    expect(scope.getCartItemAmount()).toBe(0);
  });
  it('should remove all items from the shopping cart', function () {
    scope.addToCart(productJSON);
    scope.addToCart(productJSON);
    expect(scope.getCartItemAmount()).toBe(2);
    scope.emptyCart();
    expect(scope.getCartItemAmount()).toBe(0);
  });
});
