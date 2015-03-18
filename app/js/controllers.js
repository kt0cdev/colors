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

angular.module('ui.bootstrap').controller('modalDemoCtrl', function ($scope, $modal, $log) {

	  $scope.open = function () {
	    var modalInstance = $modal.open({
	      templateUrl: 'partials/color-blend-cancel-alert.html',
	      controller: 'ModalInstanceCtrl',
	      resolve: {
	        items: function () {
	          return $scope.items;
	        }
	      }
	    });

	    modalInstance.result.then(function () {
	       $log.info('ok');
	    }, function () {
	      $log.info('cancel');
	    });
	  };
	});

angular.module('ui.bootstrap').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

