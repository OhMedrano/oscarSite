'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('MainCtrl', function ($scope, $http) {
    var app = this;
    var url = 'http://localhost:3000';

    $scope.thingsFromMongo = [];

    $scope.submit = function(){
    	$http.post(url+'/add',{thing:thing})
    };
  });
