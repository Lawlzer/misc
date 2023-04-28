const path = require('path');
const rules = require('../../rules/typescript')({ commit: false });
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'simple-import-sort', // eslint-plugin-simple-import-sort
		'import', // eslint-plugin-import
		'unused-imports', // eslint-plugin-unused-imports
	],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		project: [path.join(process.cwd(), 'tsconfig.json')],
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
