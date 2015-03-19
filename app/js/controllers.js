'use strict';

var colorController = angular.module('colorController', [])
	.controller('colorCtrl', function($scope, colorFactory) {
		$scope.colors = [];
		colorFactory.getColors().success(function(data){
			$scope.colors = data;
		});
	});

var blendController = angular.module('blendController',[])
	.controller('blendCtrl', function($scope, sharedFactory) {
		$scope.blendModeToggle = function() {
      sharedFactory.blendMode = !sharedFactory.blendMode;
      sharedFactory.blendModeToggleRoot(sharedFactory.blendMode);
    };
    $scope.$on('handleBroadcast', function() {
      $scope.blendMode = sharedFactory.blendMode;
    });
	});

angular.module('ui.bootstrap').controller('modalCtrl', function ($scope, $modal, $log) {
	$scope.open = function (tmp) {
		var modalTmpUrl = "partials/modal/" + tmp + ".html";
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

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $modalInstance, sharedFactory) {
	$scope.ok = function () {
		sharedFactory.blendMode = !sharedFactory.blendMode;
    sharedFactory.blendModeToggleRoot(sharedFactory.blendMode);
		$modalInstance.close();
	};
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
	$scope.$on('handleBroadcast', function() {
    $scope.blendMode = sharedFactory.blendMode;
  });
});

