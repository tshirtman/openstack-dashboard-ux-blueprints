angular.module('horizon-ux', []).directive('hzSelect', function(){
  'use strict';
  return {
    link: function($scope, element, attribute){
      console.log('it works!', $scope.name);
    },
    controller: function($scope){
      $scope.$watch('foo', function () {console.log($scope.foo)});
    },
    scope: {
      'name': '@'
    }
  };
});
