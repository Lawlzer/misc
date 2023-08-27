const rules = require('../../rules/javascript')({ commit: true });
module.exports = {
	// parser: '@typescript-eslint/parser',
	plugins: [
		'simple-import-sort', // eslint-plugin-simple-import-sort
		'import', // eslint-plugin-import
		'unused-imports', // eslint-plugin-unused-imports // TEMPORARILY DISABLED due to being outdated!
	],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		// extraFileExtensions: ['.json'],
	},

	env: {
		node: true,
	},

	settings: {},
	overrides: [
		{
			files: ['**/*.js'],

			rules: {
				...rules,
			},
		},
	],
};
