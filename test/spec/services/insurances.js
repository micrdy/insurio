'use strict';

describe('Service: Insurances', function () {

  // load the service's module
  beforeEach(module('insurioApp'));

  // instantiate service
  var Insurances;
  beforeEach(inject(function (_Insurances_) {
    Insurances = _Insurances_;
  }));

  it('should do something', function () {
    expect(!!Insurances).toBe(true);
  });

});
