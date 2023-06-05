module.exports = {
	plugins: [],

	parserOptions: {
		tsconfigRootDir: process.cwd(),
		ecmaVersion: 2023,
		sourceType: 'module',
		ecmaFeatures: {},
		// extraFileExtensions: ['.json'],
	},

	env: {
		node: true,
		jest: true,
	},

	settings: {},
	overrides: [
		{
			files: ['**/*.test.ts'],

			rules: {
				'@typescript-eslint/no-unused-vars': 'off', // We use unused vars in tests for compile-time type checking
			},
		},
	],
};
