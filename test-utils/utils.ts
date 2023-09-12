import { throwError } from '@lawlzer/utils';
import type { ExecOptions } from 'child_process';
import { exec as execOriginal } from 'child_process';
import { ESLint } from 'eslint';
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
	const envPath = process.env.path;
	if (envPath === undefined) throwError('path and process.env.path is undefined...?');

	const pathArray = envPath.split(';');
	const newPathArray = pathArray.filter((envPathElement) => !envPathElement.includes('node_modules'));

	return newPathArray.join(';');
}

export async function exec(command: string, options?: ExecOptions) {
	const result = await asyncExec(command, options);

	if (options?.cwd !== undefined) {
		if (options.env) options.env.path = getModifiedEnvPath();
		else options.env = { path: getModifiedEnvPath() };
	}

	return { stdout: result.stdout.toString(), stderr: result.stderr.toString() };
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

	return findPackageJson(parentPath);
}

export const lintableFileTypes = [
	{
		extension: 'js',
		fileContent: 'var thisWillBeChanged = 1;',
		test: async (lintedFileContent: string) => {
			expect(lintedFileContent).not.toContain('var'); // Var -> Let || const
			try {
				expect(lintedFileContent).toContain('let'); // Var -> Let || const
			} catch (e) {
				expect(lintedFileContent).toContain('const'); // Var -> Let || const
			}
		},
	},
	{
		extension: 'ts',
		fileContent: 'var thisWillBeChanged = 1;',
		test: async (lintedFileContent: string) => {
			expect(lintedFileContent).toContain('var'); // This should not be touched at all
		},
	},
	// {
	// 	extension: 'json',
	// }
] as const;
export type LintableFile = (typeof lintableFileTypes)[number];
export type LintableFileExtensions = (typeof lintableFileTypes)[number]['extension'];

export interface ESLintFreshInstallOptions {
	pathToLintingConfiguration: string; // The path to the folder of the linting configuration (index.js)
	shouldLintExtension: LintableFileExtensions[];
}

export interface ESLintQuickTestOptions {
	pathToESLintConfiguration: string; // The path to the folder of the linting configuration (index.js)
	shouldLintExtension: LintableFileExtensions;
	shouldSucceed: boolean;
}

/**
 * Quickly test an ESLint configuration
 *
 * We only accept one file extension type here, so we can map over them in the test files -> the Jest extension looks better, and this is much easier to debug
 */
export async function quickESLintTest({ pathToESLintConfiguration: pathToESLintConfig, shouldLintExtension: extensionType, shouldSucceed: shouldSucceed }: ESLintQuickTestOptions) {
	const eslintInstance = new ESLint({
		fix: true,
		useEslintrc: false,
		overrideConfigFile: pathToESLintConfig,
	});

	const testInformation = lintableFileTypes.find((lintableFile) => lintableFile.extension === extensionType);
	if (!testInformation) throwError(`Could not find testInformation for ${extensionType}`);

	const results = await eslintInstance.lintText(testInformation.fileContent, { filePath: `index.${testInformation.extension}` });
	if (results.length > 1) throwError(`More than one result was returned...?`);
	console.log('results: ', results[0]);
	// temp stuff
	// temp stuff
	// temp stuff
	const rulesMeta = await eslintInstance.calculateConfigForFile(pathToESLintConfig);
	console.log('rulesMeta: ', rulesMeta);
	const isPathIgnored = await eslintInstance.isPathIgnored('index.js');
	console.log('isPathIgnored: ', isPathIgnored);

	console.log('pathToESLintConfig: ', pathToESLintConfig);
	// temp stuff ends
	// temp stuff ends
	// temp stuff ends

	const resultText = results[0].output;
	if (shouldSucceed) {
		expect(resultText).toBe(undefined);
	} else {
		expect(resultText).not.toBe(undefined);
	}
}

/**
 * Take an array of extensions, and return the opposite ones
 *
 * input: ['ts'], output: ['js', 'json']
 */
export function getOppositeLintableExtensions(extension: LintableFileExtensions[]): LintableFileExtensions[] {
	return lintableFileTypes.filter((lintableFile) => !extension.includes(lintableFile.extension)).map((lintableFile) => lintableFile.extension);
}
