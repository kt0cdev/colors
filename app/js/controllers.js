'use strict';

var colorControllers = angular.module('colorControllers', [])
	.controller('colorCtrl', function($scope, colorFactory) {
		$scope.colors = [];
		colorFactory.getColors().success(function(data){
			$scope.colors = data;
		});
	});
