'use strict';

var colorController = angular.module('colorController', [])
	.controller('colorCtrl', function($scope, colorFactory) {
		$scope.colors = [];
		colorFactory.getColors().success(function(data){
			$scope.colors = data;
		});
	});

var blendController = angular.module('blendController', [])
	.controller('blendCtrl', function($scope) {
		$scope.blendMode = false;
	});

angular.module('ui.bootstrap').controller('modalCtrl', function ($scope, $modal, $log) {
	$scope.open = function (tmp) {
		var modalTmpUrl = "partials/" + tmp + ".html";
		var modalInstance = $modal.open({
			templateUrl: modalTmpUrl,
			controller: 'ModalInstanceCtrl'
		});
		modalInstance.result.then(function () {
			$log.info('ok');
		}, function () {
			$log.info('dismiss');
		});
	};
});

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
		$modalInstance.close();
	};
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});

