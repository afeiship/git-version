var assert = require('assert');
var semver = require('../dist/index').semver;
var hash = require('../dist/index').hash;

describe('master will return 1.0.0', function () {

  it('test semver', function () {
    assert.equal(semver(), '1.0.0');
  });


  it('test hash', function () {
    assert.equal(hash().length, 7);
  });

});
