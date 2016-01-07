/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/services/hateoasservice.ts" />

'use strict';

describe('Service: HateoasService', () => {

  // load the service's module
  beforeEach(module('kantileverAngular'));

  // instantiate service
  var HateoasService;
  beforeEach(inject(_HateoasService_ => {
    HateoasService = _HateoasService_;
  }));

});
