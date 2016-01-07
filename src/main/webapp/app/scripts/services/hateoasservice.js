/// <reference path="../app.ts" />
'use strict';
angular.module('kantileverAngular')
    .service('HateoasService', function ($resource) {
    this.getAllItems = function (url) {
        return $resource(url).query();
    };
    this.getItem = function (hateoasItem) {
        var link = getLink(hateoasItem, 'self');
        return $resource(link).get();
    };
    this.updateItem = function (hateoasItem) {
        var link = getLink(hateoasItem, 'update');
        var content = getContent(hateoasItem);
        $resource(link).update(content, function () { }, function () {
            handleError();
        });
    };
    this.nextItem = function (hateoasItem) {
        var link = getLink(hateoasItem, 'next');
        $resource(link).get(function () { }, function () {
            handleError();
        });
    };
    this.prevItem = function (hateoasItem) {
        var link = getLink(hateoasItem, 'prev');
        $resource(link).get(function () { }, function () {
            handleError();
        });
    };
    this.deleteItem = function (hateoasItem) {
        var link = getLink(hateoasItem, 'update');
        $resource(link).delete(function () { }, function () {
            handleError();
        });
    };
    var getContent = function (hateoasItem) {
        return hateoasItem.content;
    };
    var getLink = function (hateoasItem, rel) {
        var url = '';
        hateoasItem._links.forEach(function (link) {
            if (link.rel === rel) {
                url = link.href;
            }
        });
        return url;
    };
    var handleError = function () {
        console.log('error');
    };
});
//# sourceMappingURL=hateoasservice.js.map