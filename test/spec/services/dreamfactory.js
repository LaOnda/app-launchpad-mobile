'use strict';

describe('Service: df', function () {

  // load the service's module
  beforeEach(module('lpApp'));

  // instantiate service
  var df;
  beforeEach(inject(function (_df_) {
    df = _df_;
  }));

  it('should do something', function () {
    expect(!!df).toBe(true);
  });

});
