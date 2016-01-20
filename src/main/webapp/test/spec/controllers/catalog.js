'use strict';

describe('Controller: CatalogCtrl', function () {

  var scope, ctrl, httpBackend, state;
  var baseUrl = 'http://localhost:6789/products';

  beforeEach(module('kantileverAngular'));
  beforeEach(module('stateMock'));

  beforeEach(inject(function ($state, $controller, _$rootScope_, _$httpBackend_) {
    state = $state;
    scope = _$rootScope_.$new();
    ctrl = $controller('CatalogCtrl', {$scope: scope});
    httpBackend = _$httpBackend_;
  }));

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should retrieve a list of products', function () {
    var response = {
      content: [{},{},{}],
      _links: {}
    };
    httpBackend.expectGET(baseUrl).respond(response);
    httpBackend.flush();
    expect(scope.products.content.length).toBe(response.content.length);
  });

});
