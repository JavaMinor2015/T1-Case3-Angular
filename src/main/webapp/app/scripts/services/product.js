'use strict';
angular.module('kantileverAngular')
    .service('ProductService', function ($resource) {
    var productResource = $resource('http://localhost:6789/products/:productId', { contactId: '@productId' }, { update: { method: 'PUT' } });
    this.getAllProducts = function () {
        return productResource.get();
    };
    this.getProduct = function (id) {
        return productResource.get({ productId: id });
    };
    this.postProduct = function (hateoasItem) {
        var product = getContent(hateoasItem);
        productResource.save(product, function () { }, function () {
            handleError();
        });
    };
    this.updateProduct = function (hateoasItem) {
        var product = getContent(hateoasItem);
        productResource.update({ productId: product.id }, product, function () { }, function () {
            handleError();
        });
    };
    this.deleteProduct = function (product) {
        productResource.delete({ productId: product.id }, function () { }, function () {
            handleError();
        });
    };
    var getContent = function (hateoasItem) {
        return hateoasItem.content;
    };
    var handleError = function () {
        console.log('error');
    };
});
//# sourceMappingURL=product.js.map