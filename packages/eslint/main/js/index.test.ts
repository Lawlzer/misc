import { ensureDirectoryExists, getRandomCharacters, throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import fs from 'fs-extra';
import ms from 'ms';
import path from 'path';
import rimraf from 'rimraf';

import { createLintableTestFileContent, exec, findPackageJson, getModifiedEnvPath, testESlintFreshInstall } from '../../../../test-utils/utils';

describe(`eslint/main/js`, () => {
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
		const initialText = await createLintableTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.js' });
		const resultText = results[0].output;

		expect(resultText).not.toContain('var'); // Var should be changed to let
		expect(resultText).toContain('let'); // Var should be changed to let
		expect(initialText).not.toBe(resultText); // The text should be different
	});

	it('will NOT lint a TypeScript file', async () => {
		const initialText = await createLintableTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.ts' });
		const resultText = results[0].output;
		expect(resultText).toBe(undefined);
	});

	it(
		'will import the file with zero node_modules',
		async () => {
			await testESlintFreshInstall({
				pathToLintingConfiguration: __dirname,
				shouldLint: ['js'],
			});
		},
		ms('1m')
	);
});
