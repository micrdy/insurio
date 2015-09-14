'use strict';

describe('Controller: AnfrageCtrl', function () {

  // load the controller's module
  beforeEach(module('insurioApp'));

  var AnfrageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnfrageCtrl = $controller('AnfrageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AnfrageCtrl.awesomeThings.length).toBe(3);
  });
});
