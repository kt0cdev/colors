'use strict';

var ColorApp = angular.module('ColorApp', [
  'ngRoute',
  'colorServices',
  'colorControllers',
  'colorDirectives'
]);


ColorApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/colors/list', {
        templateUrl: 'partials/color-list.html',
        controller: 'colorCtrl'
      }).
      when('/colors/color-picker', {
        templateUrl: 'partials/color-picker.html',
        controller: 'colorCtrl'
      }).
     otherwise({
        templateUrl: 'partials/color-list.html',
        controller: 'colorCtrl'
      });
  }]);