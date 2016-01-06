'use strict';
angular.module('kantileverAngular')
    .service('ProductService', function ($resource) {
    var productResource = $resource('http://localhost:6789/products/:productId', { contactId: '@productId' }, { update: { method: 'PUT' } });
    this.getAllProducts = function () {
        return productResource.query();
    };
    this.getProduct = function (id) {
        return productResource.get({ productId: id });
    };
    this.postProduct = function (product) {
        productResource.save(product, function () { }, function () {
            handleError();
        });
    };
    this.updateProduct = function (product) {
        productResource.update({ productId: product.id }, product, function () { }, function () {
            handleError();
        });
    };
    this.deleteProduct = function (product) {
        productResource.delete({ productId: product.id }, function () { }, function () {
            handleError();
        });
    };
    var handleError = function () {
        console.log('error');
    };
});
//# sourceMappingURL=product.js.map