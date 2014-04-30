'use strict';

angular.module('zhihuAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'ArticleCtrl'
      })
      .when('/setting', {
        templateUrl: 'views/setting.html',
        controller: 'SettingCtrl'
      })
      .when('/comment/:id', {
        templateUrl: 'views/comment.html',
        controller: 'CommentCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
