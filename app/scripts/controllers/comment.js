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
    $scope.publish = function () {
        Api.get('scripts/data/ok.json').then(function (data) {
            var comment = {
                id: data.id,
                time: data.time,
                content: $scope.content,
                good: 0,
                user: {
                    img: "images/slider.jpg",
                    desc: "猴子不郁闷"
                }
            };
            $scope.data.push(comment);
            $scope.content = '';
            $scope.cancel();
        });
    };
    Api.get('scripts/data/comment.json').then(function (data) {
    	$scope.data = data;
    });
  }]);