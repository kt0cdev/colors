'use strict';

ColorApp.factory('colorFactory', function($http) {
 return{
  getColors : function() {
    return $http({
      url: 'colors/colors.json',
      method: 'GET'
    })
  }
 }
});
