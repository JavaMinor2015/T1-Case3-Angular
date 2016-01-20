'use strict';

describe('Controller: mainController', function() {

  var scope, ctrl, location, rootScope;

  beforeEach(function() {
    module('kantileverAngular');
    inject(function ($controller, _$rootScope_, $location) {
      scope = _$rootScope_.$new();
      rootScope = _$rootScope_;
      ctrl = $controller('MainController', {$scope: scope});
      location = $location;
    });
  });

  it('should check if passed path is current path', function() {
    location.path('/testpath');
    rootScope.$apply();
    expect(location.path()).toBe('/testpath');

    // test whatever the service should do...
    expect(scope.isActive('/testpath')).toBe(true);
    expect(scope.isActive('/wrongpath')).toBe(false);
  });

});
