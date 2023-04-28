const rules = require('../../rules/javascript')({ commit: true });
module.exports = {
	// parser: '@typescript-eslint/parser',
	plugins: [
		'simple-import-sort', // eslint-plugin-simple-import-sort
		'import', // eslint-plugin-import
		'unused-imports', // eslint-plugin-unused-imports
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
			files: ['**/*.ts'],

			rules: {
				...rules,
			},
		},
	],
};
