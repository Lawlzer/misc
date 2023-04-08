import { throwError } from '@lawlzer/utils';
import type { ExecOptions } from 'child_process';
import { exec as execOriginal } from 'child_process';
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
export async function createESLintTestFileContent(): Promise<string> {
	const testCode = `
  		var thisWillBeChanged = 1;
	`;
	return testCode;
}
