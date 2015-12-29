'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
