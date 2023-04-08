import { ensureDirectoryExists, getRandomCharacters, throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import path from 'path';
import os from 'os'; 
import fs from 'fs-extra'; 

import { createESLintTestFileContent, exec, getModifiedEnvPath } from '../../../test-utils/utils';

describe(`eslint/js is working as expected (Will lint TS files)`, () => {
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
			await import('./ts/index');
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

	it('will lint a TypeScript file', async () => {
		const initialText = await createESLintTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.ts' });
		const resultText = results[0].output;
		
		expect(resultText).not.toContain('var'); // Var should be changed to let
		expect(resultText).toContain('let'); // Var should be changed to let]
		expect(initialText).not.toBe(resultText); // The text should be different
	});

	
	it('will successfully import the file with zero node_modules', async () => {
		const tempFolderPath = path.join(os.tmpdir(), getRandomCharacters(25, { letters: true }));
		const tempFilePath = path.join(tempFolderPath, '.eslintrc.js');
		await ensureDirectoryExists(tempFolderPath);

		console.log('tempFolderPath: ', tempFolderPath);
		

		const fileContentInitial = `
		const { eslintConfigMain } = require('@lawlzer/eslint'); 

		module.exports = {
			extends: [...eslintConfigMain],
		};
		var thisWillBeChanged = 'hello world!'; 
`
		await fs.writeFile(tempFilePath, fileContentInitial);

		// The path to this file (if we "npm i <here>",  it should work)
		const pathToThisPackage = path.resolve(__dirname);
		

		const npmLinkResult = await exec(`npm i ${pathToThisPackage}`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		console.log('npmLinkResult', npmLinkResult);
		
		const result = await exec(`npx eslint --fix`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		console.log('result', result);

		const fileContentAfter = await fs.readFile(tempFilePath, 'utf-8');
		expect(fileContentAfter).not.toBe(fileContentInitial);
		expect(fileContentAfter).not.toContain('var'); // Var -> Let
		expect(fileContentAfter).toContain('let'); // Var -> Let
			
	}); 
});
