// const eslintConfigMain = require('../packages/eslint/typescript/src/index.js');
// console.log('eslintConfigMain: ', eslintConfigMain);

const path = require('path');

module.exports = {
	extends: [path.resolve(process.cwd(), 'packages', 'eslint', 'typescript', 'src', 'index.js')],
};
