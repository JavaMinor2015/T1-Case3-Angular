'use strict';

describe('Service: productService', function () {

  var productService;
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
  beforeEach(function (){
    module('kantileverAngular');
    inject(function(_productService_) {
      productService = _productService_;
      productJSON.amount = 1;
    });
  });
  it('should be testing', function(){
    expect(1).toBe(1);
  });
  it('should save a new product'), function () {
    scope.postProduct(productJSON);
  };
  it('should retrieve all products'), function () {
    scope.postProduct(productJSON);
    scope.postProduct(productJSON);
    expect(scope.getAllProducts().count).toBe(2);
  };
  it('should retrieve a single product'), function () {
    scope.postProduct(productJSON);
    expect(scope.getProduct(productJSON.id)).toBe(98765);
  };
  it('should update an existing product'), function () {
    scope.postProduct(productJSON);
    scope.updateProduct(productJSON);
    expect(scope.getProduct(98765)).toBe(productJSON.name = 'bike2');
  };
  it('should delete an existing product'), function () {
    scope.postProduct(productJSON);
    scope.deleteProduct(productJSON);
    expect(scope.getProduct(productJSON.id)).toBe(empty);
  };
});
