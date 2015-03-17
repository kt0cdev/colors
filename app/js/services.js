'use strict';

var colorServices = angular.module('colorServices', [])
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
