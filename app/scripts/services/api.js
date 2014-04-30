'use strict';

angular.module('zhihuAngularApp')
  .service('Api', ['$http', '$q',function ($http, $q) {
  	var common = function (obj) {
    	var http,
    	defer = $q.defer();
    	if (obj.method === 'GET') {
    		http = $http.get(obj.url);
    	} else if (obj.method === 'POST') {
    		http = $http.post(obj.url, obj.data);
    	} else if (obj.method === 'PUT') {
    		http = $http.put(obj.url, obj.data);
    	} else if (obj.method === 'DELETE') {
    		http = $http.delete(obj.url);
    	}
    	http.success(function (data) {
    		if (data.code === 200 || data.code === 201) {
    			defer.resolve(data.data);
    		} else {
    			var error = {
    				code: 400,
    				msg: 'data error'
    			};
    			defer.reject(error);
    		}
    	}).error(function () {
    		var error = {
    			code: 500,
    			msg: 'server error'
    		};
    		defer.reject(error);
    	});
    	return defer.promise;
    };

    var get = function (url) {
    	return common({method: 'GET', url: url});
    };

    var post = function (url, data) {
    	return common({method: 'POST', url: url, data: data});
    };

    var update = function (url, data) {
    	return common({method: 'PUT', url: url, data: data});
    };

    var del = function () {
    	return common({method: 'DELETE', url: url});
    };
    return {
    	get: get,
    	post: post,
    	update: update,
    	del: del
    };
  }]);