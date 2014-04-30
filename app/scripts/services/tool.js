'use strict';

angular.module('zhihuAngularApp')
  .service('Tool', ['$window',function ($window) {
  	var $ = $window.Zepto, Swipe = $window.Swipe || {};
    var slider = function () {
		var mySwipe = new Swipe(document.getElementById('slider'), {
			speed: 1000,
			auto: 3000,
			continuous: true,
			disableScroll: false,
			stopPropagation: false,
			callback: function(index) {
				$('.bullet').each(function(){
					var dataIndex = $(this).data('index');
					if(parseInt(dataIndex) === index){
						$(this).addClass('active').siblings().removeClass('active');
					}
				});
			}
		});
		var num = $('.swipe-wrapper').children().length;
		for(var i = 0 ;i < num;i ++){
			$('<span class="bullet" data-index="'+ i +'"></span>').appendTo('.nav-bullets');
		}
		$('.bullet').first().addClass('active');
    };
    return {
    	slider: slider
    };
  }]);
