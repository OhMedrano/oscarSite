'use strict';

/**
 * @ngdoc service
 * @name oscarSiteApp.blog
 * @description
 * # blog
 * Factory in the oscarSiteApp.
 */
angular.module('oscarSiteApp')
  .factory('Blog',function($resource){
  	return $resource('http://localhost:3000/api/articles/',{
  		query:{method:'GET',params:{blogId:'blogs'},isArray:true}
  		});
  });