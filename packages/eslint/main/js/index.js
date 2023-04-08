module.exports = {
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

				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',

				// // EXPERIMENTAL - The base one can cause errors with TypeScript, but we do not have TypeScript
				'no-redeclare': 'error',

				// Disallow unused variables -- Very annoying
				'no-unused-vars': 'off',

				// MANUAL any -- If we are manually specifying "any", we have a reason for it.
				'no-explicit-any': 'off',

				'no-var-requires': 'off', // Forces us to use weird JS imports - ??

				// Will complain if we use "let" and don't reassign the value. (Useful for dev).
				'prefer-const': 'off',

				// Empty functions - Useful for "future" functions, or for when dev testing.
				'no-empty': 'off',

				// Disable ALL "var" usage
				'no-var': 'error',
			},
		},
	],
};
