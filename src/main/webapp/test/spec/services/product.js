/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/productservice.ts" />
'use strict';
describe('Service: productService', function () {
    beforeEach(module('kantileverAngular'));
    var productService;
    beforeEach(inject(function (_productService_) {
        productService = _productService_;
    }));
    it('should save a new product'), function () {
        productService.postProduct(testJSON);
    };
    it('should retrieve all products'), function () {
        productService.postProduct(testJSON);
        productService.postProduct(testJSON);
        expect(productService.getAllProducts().count).toBe(2);
    };
    it('should retrieve a single product'), function () {
        productService.postProduct(testJSON);
        expect(productService.getProduct(testJSON.id)).toBe(98765);
    };
    it('should update an existing product'), function () {
        productService.postProduct(testJSON);
        productService.updateProduct(testJSON);
        expect(productService.getProduct(98765)).toBe(testJSON.name = 'bike2');
    };
    it('should delete an existing product'), function () {
        productService.postProduct(testJSON);
        productService.deleteProduct(testJSON);
        expect(productService.getProduct(testJSON.id)).toBe(empty);
    };
});
//# sourceMappingURL=product.js.map