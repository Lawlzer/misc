import { ensureDirectoryExists, getRandomCharacters, throwError } from '@lawlzer/utils';
import { ESLint } from 'eslint';
import path from 'path';
import os from 'os'; 
import fs from 'fs-extra'; 

import { createESLintTestFileContent, exec, getModifiedEnvPath } from '../../../test-utils/utils';

( async () => {

	const tempFolderPath = path.join(os.tmpdir(), getRandomCharacters(25, { letters: true }));
	const tempFilePath = path.join(tempFolderPath, '.eslintrc.js');
	await ensureDirectoryExists(tempFolderPath);
	
	console.log('tempFolderPath: ', tempFolderPath);
		
	
		const fileContentInitial = `
		module.exports = {
			extends: ["./node_modules/@lawlzer/eslint/dist/index.js"],
			// extends: [...eslintConfigMain],
		  };
		  var thisWillBeChanged = "hello world!";
`
await fs.writeFile(tempFilePath, fileContentInitial);

		// The path to this file (if we "npm i <here>",  it should work)
		const pathToThisPackage = path.resolve(__dirname, '..');
		
		// If we have not built this package, we will not send the correct (dist/*.js) files to the new folder
		await exec(`npm run build`, { cwd: path.resolve(__dirname, '..')}); 
		
		await exec(`npm init -y`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		// I don't know why this is required, but we get the following error if we do not do this: 

		// Install this package
		const npmLinkResult = await exec(`npm i ${pathToThisPackage}`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		console.log('npmLinkResult', npmLinkResult);
		
		// npm ERR! could not determine executable to run
		await exec(`npm i`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		
		const result = await exec(`npx eslint . --fix`, { cwd: path.resolve(tempFolderPath), env: { path: getModifiedEnvPath() } });
		console.log('result', result);
		
		const fileContentAfter = await fs.readFile(tempFilePath, 'utf-8');
		expect(fileContentAfter).not.toBe(fileContentInitial);
		expect(fileContentAfter).not.toContain('var'); // Var -> Let
		expect(fileContentAfter).toContain('let'); // Var -> Let
			
	})(); 
	