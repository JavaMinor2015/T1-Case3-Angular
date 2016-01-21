'use strict';

angular.module('kantileverAngular')
  .service('productService', function ($resource) {

    var productResource = $resource(
      'http://localhost:6789/products/:productId',
      {contactId: '@productId'},
      {update: {method: 'PUT'}}
    );

    this.getAllProducts = function () {
      return productResource.get();
    };

    this.getProduct = function (id) {
      return productResource.get({productId: id});
    };

  });
