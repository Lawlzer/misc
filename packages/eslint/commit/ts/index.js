const path = require('path');
const rules = require('../../rules/typescript')({ commit: true });

module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint', //
		'eslint-plugin-simple-import-sort',
		'eslint-plugin-import',
		'unused-imports', // eslint-plugin-unused-imports // TEMPORARILY DISABLED due to being outdated!
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
