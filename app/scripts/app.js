'use strict';

angular.module('zhihuAngularApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  'ngRoute',
  'btford.socket-io'
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
      .when('/room', {
        templateUrl: 'views/room.html',
        controller: 'RoomCtrl'
      })
      .when('/chat/:id', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
