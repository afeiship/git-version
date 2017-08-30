import gitInfo from 'git-info';

const devVersionRE = /([\d.]+)/g;
const EMPTY_ARRAY = [];

function hash(){
  return gitInfo.shortHash();
}

function semver(){
  return (gitInfo.currentBranch().match(devVersionRE) || [])[0] || '1.0.0';
}

module.exports = {
  hash,
  semver
};
