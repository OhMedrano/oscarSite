'use strict';

describe('Filter: lineBreak', function () {

  // load the filter's module
  beforeEach(module('oscarSiteApp'));

  // initialize a new instance of the filter before each test
  var lineBreak;
  beforeEach(inject(function ($filter) {
    lineBreak = $filter('lineBreak');
  }));

  it('should return the input prefixed with "lineBreak filter:"', function () {
    var text = 'angularjs';
    expect(lineBreak(text)).toBe('lineBreak filter: ' + text);
  });

});
