'use strict';

angular.module('zhihuAngularApp')
  .controller('CommentCtrl', ['$scope', '$location', '$routeParams', 'Tool', 'Api', function ($scope, $location, $routeParams, Tool, Api) {
    var id = $routeParams.id;
    $scope.back = function () {
    	$location.path('article/'+id);
    };
    $scope.write = function () {
    	$('.comment-publish').addClass('open');
    };
    $scope.cancel = function () {
    	$('.comment-publish').removeClass('open');
    };
    Api.get('scripts/data/comment.json').then(function (data) {
    	$scope.data = data;
    });
  }]);