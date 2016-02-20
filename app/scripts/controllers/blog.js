'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('BlogCtrl',['$scope','Blog','$routeParams' ,function ($scope, $routeParams, Blog) {
   $scope.find = function() {
   	$scope.blogs = Blog.query();
   };

   $scope.findOne = function(){
   	$scope.blog = Blog.get({
   		articleId: $routeParams.articleId
   	});
   };
  }]);
