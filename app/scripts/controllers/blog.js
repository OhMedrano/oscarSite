'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('BlogCtrl',function ($scope, $routeParams, Blog) {
/*   $scope.find = function() {
   	$scope.blogs = Blog.query();
   };

   $scope.findOne = function(){
   	$scope.blog = Blog.get({
   		articleId: $routeParams.articleId
   	});*/

  $scope.blogs = Blog.query({blogId:$routeParams.blogId});
  console.log($scope.blogs);
   
  });
