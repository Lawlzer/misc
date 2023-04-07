const { eslintConfigMain } = require('../src/index.js');
// console.log('eslintConfigMain: ', eslintConfigMain);

module.exports = {
	extends: [...eslintConfigMain],
};
