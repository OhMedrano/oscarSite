'use strict';

/**
 * @ngdoc filter
 * @name oscarSiteApp.filter:createdBy
 * @function
 * @description
 * # createdBy
 * Filter in the oscarSiteApp.
 */
angular.module('oscarSiteApp')
  .filter('createdBy', function () {
    return function (input) {
      var out = [];

      angular.forEach(input, function(author){
      	if(author.creator.fullName === 'Oscar Medrano') {
      		out.push(author);
      	}
      });
      return out;
    };
  });
