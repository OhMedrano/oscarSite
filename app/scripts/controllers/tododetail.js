'use strict';

/**
 * @ngdoc function
 * @name oscarSiteApp.controller:TododetailCtrl
 * @description
 * # TododetailCtrl
 * Controller of the oscarSiteApp
 */
angular.module('oscarSiteApp')
  .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
    $scope.todo = Todos[$routeParams.id];
  }]);
