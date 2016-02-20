'use strict';

/**
 * @ngdoc service
 * @name oscarSiteApp.blog
 * @description
 * # blog
 * Factory in the oscarSiteApp.
 */
angular.module('oscarSiteApp')
  .factory('Blog',['$resource',function($resource){
  	return $resource('http://localhost:3000/api/articles/:articleId',{
  		articleId:'@_id'
  	}, {
  		update: {
  			method:'PUT'
  		}
  	});
  }]);