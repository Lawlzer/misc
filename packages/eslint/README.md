npm link C:/code/npm/config/packages/eslint
npm i @lawlzer/config
npm i -D eslint

const path = require('path');
module.exports = {
extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'main', 'index.js')],
};

var example = 'hey! :)';

ESLint must be installed separately
