'use strict';

/**
 * @ngdoc overview
 * @name oscarSiteApp
 * @description
 * # oscarSiteApp
 *
 * Main module of the application.
 */
angular
  .module('oscarSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/:id',{
        templateUrl:'templates/postExpand.html',
        controller:'TododetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
