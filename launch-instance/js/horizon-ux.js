angular.module('horizon-ux', []).directive('hzSelect', function(){
  'use strict';
  return {
    link: function($scope, element, attribute){
      console.log('it works!', $scope.name);
    },
    scope: {
      'name': '@'
    }
  };
});
