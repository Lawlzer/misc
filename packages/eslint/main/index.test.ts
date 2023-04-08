import { ensureDirectoryExists, getRandomCharacters, throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import fs from 'fs-extra';
import ms from 'ms';
import os from 'os';
import path from 'path';

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
		expect(resultText).toContain('let'); // Var should be changed to let
		expect(initialText).not.toBe(resultText); // The text should be different
	});

	it('will lint a TypeScript file', async () => {
		const initialText = await createESLintTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.ts' });
		const resultText = results[0].output;

		expect(resultText).not.toContain('var'); // Var should be changed to let
		expect(resultText).toContain('let'); // Var should be changed to let
		expect(initialText).not.toBe(resultText); // The text should be different
	});

	// // For some reason, it's not fully installing the package -- the files are empty.
	// it('will successfully import the file with zero node_modules', async () => {
	// 	const tempFolderPath = path.join(os.tmpdir(), getRandomCharacters(25, { letters: true }));
	// 	await ensureDirectoryExists(tempFolderPath);

	// 	const eslintFilePath = path.join(tempFolderPath, '.eslintrc.js');

	// 	const fileToLintPath = path.join(tempFolderPath, 'fileToLint.js');

	// 		const eslintConfigText = `
	// 		module.exports = {
	// 			extends: ['./node_modules/@lawlzer/eslint/main/index.js'],
	// 		  };
	// `
	// 		await fs.writeFile(eslintFilePath, eslintConfigText);

	// 		const fileContentInitial = await createESLintTestFileContent();
	// 		await fs.writeFile(fileToLintPath, fileContentInitial);

	// 		// The path to this file (if we "npm i <here>",  it should work)
	// 		const pathToThisPackage = path.resolve(__dirname, '..');

	// 		await exec(`npm init -y`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// Install this package
	// 		await exec(`npm i ${pathToThisPackage}`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// I don't know why this is required, but we get the following error if we do not do this:
	// 		// npm ERR! could not determine executable to run
	// 		await exec(`npm i`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		await exec(`npx eslint . --fix`, { cwd: path.resolve(tempFolderPath) });

	// 		const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
	// 		expect(fileContentAfter).not.toBe(eslintConfigText);
	// 		expect(fileContentAfter).not.toContain('var'); // Var -> Let
	// 		expect(fileContentAfter).toContain('let'); // Var -> Let
	// }, ms('30s'));
});
