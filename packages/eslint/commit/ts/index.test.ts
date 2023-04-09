import { ensureDirectoryExists, throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import fs from 'fs-extra';
import ms from 'ms';
import path from 'path';
import rimraf from 'rimraf';

import { createLintableTestFileContent, exec, getModifiedEnvPath } from '../../../../test-utils/utils';

describe(`eslint/main/ts`, () => {
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

	it('will NOT lint a JavaScript file', async () => {
		const initialText = await createLintableTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.js' });
		const resultText = results[0].output;
		expect(resultText).toBe(undefined);
	});

	it('will lint a TypeScript file', async () => {
		const initialText = await createLintableTestFileContent();
		const results = await eslintInstance.lintText(initialText, { filePath: 'a.ts' });
		const resultText = results[0].output;
		if (!resultText) throwError('ESLint did not return any text');

		expect(resultText).not.toContain('var'); // Var should be changed to let
		expect(resultText).toContain('let'); // Var should be changed to let
		expect(initialText).not.toBe(resultText); // The text should be different
	});

	// // Temporarily disabled, because they share an NPM lock file -> they break when ran at the same time.
	// it(
	// 	'will import the file with zero node_modules',
	// 	async () => {
	// 		// If we use os.tmpdir(), on Windows it goes through AppData, which for some reason breaks npx
	// 		const tempFolderPath = path.join(process.cwd(), 'temp', 'test', 'eslint', 'commit', 'ts');

	// 		await ensureDirectoryExists(tempFolderPath);

	// 		const eslintFilePath = path.join(tempFolderPath, '.eslintrc.js');

	// 		const fileToLintPath = path.join(tempFolderPath, 'fileToLint.ts');

	// 		const eslintConfigText = `
	// 			module.exports = {
	// 				extends: ['./node_modules/@lawlzer/eslint/commit/ts/index.js'],
	// 				root: true,
	// 			  };
	// 	`;
	// 		await fs.writeFile(eslintFilePath, eslintConfigText);

	// 		const fileContentInitial = await createLintableTestFileContent();
	// 		await fs.writeFile(fileToLintPath, fileContentInitial);

	// 		// The path to this repo/package (if we "npm i <here>",  it should work)
	// 		const pathToThisPackage = path.resolve(__dirname, '..', '..');

	// 		await exec(`npm init -y`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// Install this package
	// 		await exec(`npm i ${pathToThisPackage}`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// I don't know why this is required, but we get the following error if we do not do this:
	// 		// npm ERR! could not determine executable to run
	// 		await exec(`npm i`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		await exec(`npx --yes eslint . --fix`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
	// 		expect(fileContentAfter).not.toBe(eslintConfigText);
	// 		expect(fileContentAfter).not.toContain('var'); // Var -> Let
	// 		expect(fileContentAfter).toContain('let'); // Var -> Let
	// 	},
	// 	ms('1m')
	// );
});
