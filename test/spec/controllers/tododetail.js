'use strict';

describe('Controller: TododetailCtrl', function () {

  // load the controller's module
  beforeEach(module('oscarSiteApp'));

  var TododetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TododetailCtrl = $controller('TododetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
