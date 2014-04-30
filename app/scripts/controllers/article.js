'use strict';

angular.module('zhihuAngularApp')
  .controller('ArticleCtrl', ['$scope', '$location', '$window', '$routeParams', 'Api', function ($scope, $location, $window, $routeParams, Api) {
    var $ = $window.Zepto, id = $routeParams.id;
    $scope.back = function () {
        $location.path('/');
    };
    $scope.share = function () {
        $('.article-share').addClass('open');
    };
    $scope.cancel = function () {
        $('.article-share').removeClass('open');
    };
    $scope.comment = function () {
        $location.path('comment/'+id);
    }; 
    Api.get('scripts/data/article.json').then(function (data) {
        $scope.data = data;
    });
  }]);