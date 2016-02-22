'use strict';

/**
 * @ngdoc filter
 * @name oscarSiteApp.filter:lineBreak
 * @function
 * @description
 * # lineBreak
 * Filter in the oscarSiteApp.
 */
angular.module('oscarSiteApp')
  .filter('lineBreak', function () {
   return function(data) {
   if (!data) return data;
   return data.replace(/\n\r?/g, '<br />');
 };
  });
