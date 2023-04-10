import { ensureDirectoryExists, getRandomCharacters, throwError } from '@lawlzer/utils';
import type { ExecOptions } from 'child_process';
import { exec as execOriginal } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import { promisify } from 'util';

const asyncExec = promisify(execOriginal);

/**
 * If we use normal exec, it will combine OUR node_modules, with the filePath's node_modules!
 *
 * To avoid this, we will remove this file the path, so exec only uses the filePath's node_modules
 */
export function getModifiedEnvPath() {
	const path = process.env.path;
	if (!path) throwError('path and process.env.path is undefined...?');

	const pathArray = path.split(';');
	const newPathArray = pathArray.filter((path) => !path.includes('node_modules'));

	return newPathArray.join(';');
}

export async function exec(command: string, options?: ExecOptions) {
	const result = await asyncExec(command, options);

	if (options?.cwd) {
		if (options.env) options.env.path = getModifiedEnvPath();
		else options.env = { path: getModifiedEnvPath() };
	}

	return { stdout: result.stdout.toString(), stderr: result.stderr.toString() };
}

/**
 * Create a test file for ESLint
 */
export async function createLintableTestFileContent(): Promise<string> {
	const testCode = `
  		var thisWillBeChanged = 1;
	`;
	return testCode;
}

/**
 * Recursively looks in above paths (/1/2 -> /1)
 *
 * Returns the path to the nearest packageJson, or throws an error
 */
export async function findPackageJson(currentPath: string): Promise<string> {
	const packageJsonPath = path.resolve(currentPath, 'package.json');
	if (await fs.pathExists(packageJsonPath)) {
		return packageJsonPath;
	}

	const parentPath = path.resolve(currentPath, '..');
	if (parentPath === currentPath) throwError(`Could not find package.json`);

	return await findPackageJson(parentPath);
}

export const lintableFileTypes = ['js', 'ts'] as const;
export type LintableFileType = (typeof lintableFileTypes)[number];

export interface Options {
	pathToLintingConfiguration: string; // The path to the folder of the linting configuration (index.js)
	shouldLint: LintableFileType[];
}

/**
 * Used for testing an ESLint configuration completely fresh (outside of this repo)
 */
export async function testESlintFreshInstall({ pathToLintingConfiguration: pathToFile, shouldLint }: Options) {
	// const tempFolderPath = path.join(process.cwd(), 'temp', 'test', pathToPackage);
	const tempFolderPath = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(25, { letters: true }));

	const packageJsonPath = await findPackageJson(pathToFile);
	const pathToPackage = path.dirname(packageJsonPath);

	// @ts-expect-error Our ES version is 2022, I don't know why replaceAll does not exist
	const relativePath = path.relative(pathToPackage, pathToFile).replaceAll('\\', '/');
	await ensureDirectoryExists(tempFolderPath);

	const fileContentInitial = await createLintableTestFileContent();

	const eslintConfigText = `
	module.exports = {
				extends: ['./node_modules/@lawlzer/eslint/${relativePath}/index.js'], // todo remove index.js from here
			};
			`;
	await fs.writeFile(path.join(tempFolderPath, '.eslintrc.js'), eslintConfigText);

	const npmInitResult = await exec(`npm init -y`, {
		cwd: path.resolve(tempFolderPath),
		env: { path: getModifiedEnvPath() },
	});

	// Install this package
	const npmIPackageResult = await exec(`npm i --no-package-lock ${pathToPackage}`, {
		cwd: path.resolve(tempFolderPath),
		env: { path: getModifiedEnvPath() },
	});

	// I don't know why this is required, but we get the following error if we do not do this:
	// npm ERR! could not determine executable to run
	const npmIResult = await exec(`npm i --no-package-lock`, {
		cwd: path.resolve(tempFolderPath),
		env: { path: getModifiedEnvPath() },
	});

	console.log('tempFolderPath: ', tempFolderPath);
	console.log('pathToPackage: ', pathToPackage);
	console.log('pathToFile: ', pathToFile);
	console.log('relativePath: ', relativePath);
	console.log('npmIResult: ', npmIResult);
	console.log('npmIPackageResult: ', npmIPackageResult);

	const shouldNotLintTypes = lintableFileTypes.filter((x) => !shouldLint.includes(x));
	for await (const fileType of shouldLint) {
		const fileToLintPath = path.join(tempFolderPath, `fileToLint.${fileType}`);
		await fs.writeFile(fileToLintPath, fileContentInitial);

		// The command "fails", but it still lints, for one repo. I don't know why.
		try {
			await exec(`npx --yes eslint . --fix`, {
				cwd: path.resolve(tempFolderPath),
				env: { path: getModifiedEnvPath() },
			});
		} catch (e) {}

		const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
		expect(fileContentAfter).not.toBe(eslintConfigText);
		expect(fileContentAfter).not.toContain('var'); // Var -> Let || const
		try {
			expect(fileContentAfter).toContain('let'); // Var -> Let || const
		} catch (e) {
			expect(fileContentAfter).toContain('const'); // Var -> Let || const
		}
	}

	for await (const fileType of shouldNotLintTypes) {
		const fileToLintPath = path.join(tempFolderPath, `fileToLint.${fileType}`);
		await fs.writeFile(fileToLintPath, fileContentInitial);
		try {
			await exec(`npx --yes eslint . --fix`, {
				cwd: path.resolve(tempFolderPath),
				env: { path: getModifiedEnvPath() },
			});
		} catch (e) {}

		const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
		expect(fileContentAfter).toBe(fileContentInitial);
	}
}
