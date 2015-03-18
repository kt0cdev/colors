'use strict';

var colorServics = angular.module('colorService', [])
	.factory('colorFactory', function($http) {
	 return{
	  getColors : function() {
	    return $http({
	      url: 'colors/colors.json',
	      method: 'GET'
	    })
	  }
	 }
	});
