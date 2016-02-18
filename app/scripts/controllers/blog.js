'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('BlogCtrl',['$scope','blog' ,function ($scope, blog) {
    $scope.blog = blog.query();

    console.log($scope.blog);
  }]);
