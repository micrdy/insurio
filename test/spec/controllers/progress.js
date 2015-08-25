'use strict';

describe('Controller: ProgressCtrl', function () {

  // load the controller's module
  beforeEach(module('insurioApp'));

  var ProgressCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgressCtrl = $controller('ProgressCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProgressCtrl.awesomeThings.length).toBe(3);
  });
});
