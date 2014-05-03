'use strict';

angular.module('zhihuAngularApp')
  .controller('RoomCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.chat = function () {
    	$location.path('chat/0');
    };
  }]);