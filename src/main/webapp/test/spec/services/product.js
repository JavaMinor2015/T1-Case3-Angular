'use strict';

//describe('Service: productService', function () {
//
//  var productService;
//  var productJSON = {
//    "content": {
//      "id": "98765",
//      "name": "bike",
//      "amount": 1,
//      "price": 125.5
//    },
//    "links": [
//      {
//        "rel": "self",
//        "href": "http://localhost:6789/products/98765/"
//      },
//      {
//        "rel": "previous_step",
//        "href": "http://localhost:6789/products/98764/"
//      },
//      {
//        "rel": "next_step",
//        "href": "http://localhost:6789/products/98766/"
//      },
//      {
//        "rel": "update",
//        "href": "http://localhost:6789/products/98765/"
//      },
//      {
//        "rel": "delete",
//        "href": "http://localhost:6789/products/98765/"
//      }
//    ]
//  };
//  var productResource = (
//    'http://localhost:6789/products/:productId' ,
//    {contactId: '@productId'},
//    {update: {method: 'PUT'}}
//  );
//
//  beforeEach(module("kantileverAngular"));
//
//  beforeEach(inject(function (_productService_) {
//    productService = _productService_;
//  }));
//
//it('should save a new product', function () {
//  productService.postProduct();
//  expect().toBe(1);
//});
//it('should retrieve all products', function () {
//  productService.postProduct(productJSON);
//  productService.postProduct(productJSON);
//});
//it('should retrieve a single product', function () {
//  productService.postProduct(productJSON);
//});
//it('should update an existing product', function () {
//  productService.postProduct(productJSON);
//  productService.updateProduct(productJSON);
//});
//it('should delete an existing product', function () {
//  productService.postProduct(productJSON);
//  productService.deleteProduct(productJSON);
//});
//})
//;
