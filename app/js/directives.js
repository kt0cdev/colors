'use strict';

var colorDirectives = angular.module('colorDirectives', [])
	.directive('swatch', function() {
		return {
	    restrict: 'E',
	    templateUrl: 'partials/color-swatch.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});
