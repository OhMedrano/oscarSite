'use strict';

describe('Filter: createdBy', function () {

  // load the filter's module
  beforeEach(module('oscarSiteApp'));

  // initialize a new instance of the filter before each test
  var createdBy;
  beforeEach(inject(function ($filter) {
    createdBy = $filter('createdBy');
  }));

  it('should return the input prefixed with "createdBy filter:"', function () {
    var text = 'angularjs';
    expect(createdBy(text)).toBe('createdBy filter: ' + text);
  });

});
