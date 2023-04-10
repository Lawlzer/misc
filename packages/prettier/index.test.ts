import { ensureDirectoryExists, getRandomCharacters } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import fs from 'fs-extra';
import ms from 'ms';
import os from 'os';
import path from 'path';
import prettier from 'prettier';

import { createLintableTestFileContent, exec, getModifiedEnvPath } from '../../test-utils/utils';
import * as prettierConfig from './index';

describe(`Prettier`, () => {
	it('will lint a JavaScript file', async () => {
		const initialText = await createLintableTestFileContent();

		const formatted = prettier.format(initialText, {
			filepath: 'a.js',
			...(prettierConfig as prettier.Options),
		});

		expect(initialText).not.toBe(formatted); // The text should be different
	});

	it('will lint a TypeScript file', async () => {
		const initialText = await createLintableTestFileContent();

		const formatted = prettier.format(initialText, {
			filepath: 'a.ts',
			...(prettierConfig as prettier.Options),
		});

		expect(initialText).not.toBe(formatted); // The text should be different
	});

	// // For some reason, it's not fully installing the package -- the files are empty.
	// it(
	// 	'will be usable with no external dependencies',
	// 	async () => {
	// 		// If we use os.tmpdir(), the path includes AppData, which for some reason crashes in the `npx` script
	// 		const tempFolderPath = path.join(process.cwd(), 'temp', 'test', 'prettier', getRandomCharacters(25, { letters: true }));
	// 		await ensureDirectoryExists(tempFolderPath);

	// 		const prettierFilePath = path.join(tempFolderPath, '.prettierrc.js');
	// 		const fileToLintPath = path.join(tempFolderPath, 'fileToLint.js');

	// 		const prettierConfigText = `
	// 		const path = require('path');
	// 		module.exports = {
	// 			...require(path.resolve(__dirname, 'node_modules', '@lawlzer', 'prettier', 'index.js')),
	// 		};
	// 		`;
	// 		await fs.writeFile(prettierFilePath, prettierConfigText);

	// 		const fileContentInitial = await createLintableTestFileContent();
	// 		await fs.writeFile(fileToLintPath, fileContentInitial);

	// 		// The path to this file (if we "npm i <here>",  it should work)
	// 		const pathToThisPackage = path.resolve(__dirname);
	// 		await exec(`npm init -y`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// Install this package
	// 		await exec(`npm i ${pathToThisPackage}`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		// I don't know why this is required, but we get the following error if we do not do this:
	// 		// npm ERR! could not determine executable to run
	// 		await exec(`npm i`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		await exec(`npm config set cache ${tempFolderPath}-npm-cache`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		await exec(`npx --yes prettier --write .`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });

	// 		const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
	// 		expect(fileContentAfter).not.toBe(prettierConfigText);
	// 		expect(fileContentAfter).toContain('var'); // Var stays as Var
	// 	},
	// 	ms('1m')
	// );
});
