'use strict';

var ColorApp = angular.module('ColorApp', [
  'ngRoute',
  'colorServices',
  'colorControllers',
  'colorSwatch',
  'newBtn',
  'saveBtn'
]);


ColorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/colors/list', {
        templateUrl: 'partials/color-list.html',
        controller: 'colorCtrl'
      }).
      when('/colors/blend', {
        templateUrl: 'partials/color-blend.html',
        controller: 'colorCtrl'
      }).
     otherwise({
        templateUrl: 'partials/blend.html',
        controller: 'colorCtrl'
      });
  }]);