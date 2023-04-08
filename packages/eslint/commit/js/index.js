module.exports = {
	extends: ['../../main/js/index.js'],
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
		// // Project is disabled because it's EXTREMELY slow. It has a lot of nice features, but sadly it's too slow.
		// project: ['../tsconfig.json', '../src/**/*.ts', '../test-utils/**/*.ts'],
		extraFileExtensions: ['.json'],
	},

	env: {
		node: true,
	},

	settings: {},

	overrides: [
		{
			files: ['**/*.js'],

			rules: {
				strict: 2,

				// Sort imports
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',

				// Unused imports
				'unused-imports/no-unused-imports': 'error',

				// Empty interface
				'@typescript-eslint/no-empty-interface': 'error',

				// Functions without code inside them
				'@typescript-eslint/no-empty-function': 'error',

				// Using let without reassigning the value
				'prefer-const': 'error',

				// Empty block statements
				'no-empty': 'error',

				// disallow console.log, but allow other console methods (console.info, console.error, etc)
				'no-console': [
					'error',
					{
						allow: ['info', 'warn', 'error', 'debug', 'trace'],
					},
				],

				// // This also removes variables from functions, so we can't use potential generics.
				// 'no-unused-vars': 'error',
				// '@typescript-eslint/no-unused-vars': 'error',
			},
		},
	],
};
