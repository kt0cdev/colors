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

var newBtn = angular.module('newBtn', [])
	.directive('newbtn', function() {
		return {
	    restrict: 'E',
	    transclude: 'true',
	    templateUrl: 'partials/new-btn.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});

var saveBtn = angular.module('saveBtn', [])
	.directive('savebtn', function() {
		return {
	    restrict: 'E',
	    transclude: 'true',
	    templateUrl: 'partials/save-btn.html',
	    link: function(scope, el, attr) {

	    }
	  }
	});

