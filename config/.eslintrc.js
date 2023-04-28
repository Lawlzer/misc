const path = require('path');

module.exports = {
	extends: [path.resolve(process.cwd(), 'packages', 'eslint', 'main', 'index.js')],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		extraFileExtensions: ['.json'],
	},
};
