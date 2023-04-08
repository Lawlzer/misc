import { throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import path from 'path';

import { createESLintTestFileContent } from '../../../../test-utils/utils';

describe(`eslint/js is working as expected (Will lint JS files)`, () => {
	const eslintInstance = new ESLint({
		fix: true,
		useEslintrc: false,
		overrideConfig: {
			extends: [path.resolve(__dirname, 'index.js')],
		},
		// overrideConfigFile: eslintFilePath,
	});
	// This is a test to ensure the execSync errors if it does not import a real file (this is a test to ensure the tests work)
	it('will throw an error', async () => {
		expect(async () => {
			// @ts-expect-error We want this to error
			await import('this does not exist');
		}).rejects.toThrow();
	});

	it('is an import-able file in JavaScript (the folder is import-able)', async () => {
		expect(async () => {
			await import('./index');
		}).not.toThrow();
	});

	it('will lint a JavaScript file', async () => {
		const initialText = await createESLintTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.js' });
		const resultText = results[0].output;
	
		expect(resultText).not.toContain('var'); // Var should be changed to let
		expect(resultText).toContain('let'); // Var should be changed to let]
		expect(initialText).not.toBe(resultText); // The text should be different
	});
	
	it('will NOT lint a TypeScript file', async () => {
		const initialText = await createESLintTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.ts' });
		const resultText = results[0].output;
		expect(resultText).toBe(undefined);
	});
});
