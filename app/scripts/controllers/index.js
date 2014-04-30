'use strict';

angular.module('zhihuAngularApp')
  .controller('IndexCtrl', ['$scope', '$location', 'Tool', 'Api', function ($scope, $location, Tool, Api) {
    $scope.$on('ngRepeatFinished', function() {
		Tool.slider();
	});
    Api.get('scripts/data/index.json').then(function (data) {
    	console.log(data);
    	$scope.data = data;
    });
    $scope.goArticle = function (id) {
    	$location.path('article/'+id);
    };
  }]);
