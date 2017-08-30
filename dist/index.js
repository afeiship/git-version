'use strict';

var _gitInfo = require('git-info');

var _gitInfo2 = _interopRequireDefault(_gitInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devVersionRE = /([\d.]+)/g;
var EMPTY_ARRAY = [];

function hash() {
  return _gitInfo2.default.shortHash();
}

function semver() {
  return (_gitInfo2.default.currentBranch().match(devVersionRE) || [])[0] || '1.0.0';
}

module.exports = {
  hash: hash,
  semver: semver
};