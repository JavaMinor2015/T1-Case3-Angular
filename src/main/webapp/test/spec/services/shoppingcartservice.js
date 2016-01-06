/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/shoppingcartservice.ts" />
'use strict';
describe('Service: shoppingCartService', function () {
    // load the service's module
    beforeEach(module('kantileverAngular'));
    // instantiate service
    var shoppingCartService;
    beforeEach(inject(function (_shoppingCartService_) {
        shoppingCartService = _shoppingCartService_;
    }));
    it('should do something', function () {
        expect(!!shoppingCartService).toBe(true);
    });
});
//# sourceMappingURL=shoppingcartservice.js.map