'use strict';

var colorSwatch = angular.module('colorSwatch', [])
	.directive('swatch', function() {
		return {
	    restrict: 'E',
	    templateUrl: 'partials/color-swatch.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});
