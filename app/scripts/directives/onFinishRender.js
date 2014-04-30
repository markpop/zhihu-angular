'use strict';

angular.module('zhihuAngularApp')
	.directive('onFinishRender', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope) {
				if (scope.$last === true) {
					$timeout(function () {
						scope.$emit('ngRepeatFinished');
					});
				}
			}
		};
	}]);