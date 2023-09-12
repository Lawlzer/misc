import { ensureDirectoryExists, getRandomCharacters } from '@lawlzer/utils';
import fs from 'fs-extra';
import ms from 'ms';
import path from 'path';

// import type { LintableFileExtensions } from '../../../test-utils/utils';
// import { exec, findPackageJson, getModifiedEnvPath, lintableFileTypes, quickESLintTest } from '../../../test-utils/utils';
import type { LintableFileExtensions } from '../../../test-utils/utils';
import { exec, findPackageJson, getModifiedEnvPath, lintableFileTypes, quickESLintTest } from '../../../test-utils/utils';

describe(`eslint/main`, () => {
	// This is a test to ensure the execSync errors if it does not import a real file (this is a test to ensure the tests work)
	it('will throw an error', async () => {
		void expect(async () => {
			// @ts-expect-error We want this to error
			await import('this does not exist');
		}).rejects.toThrow();
	});

	it('the folder is import-able in JavaScript', async () => {
		expect(async () => {
			await import('./ts/index');
		}).not.toThrow();
	});

	const extensionsShouldWork: LintableFileExtensions[] = ['ts', 'js'];
	const extensionsShouldNotWork = lintableFileTypes.filter((x) => {
		return !extensionsShouldWork.includes(x.extension);
	}) as unknown as LintableFileExtensions[];

	extensionsShouldWork.forEach((extension) => {
		it(`will lint a ${extension} file`, async () => {
			await quickESLintTest({ pathToESLintConfiguration: path.resolve(__dirname, 'index.js'), shouldLintExtension: extension, shouldSucceed: true });
		});
	});

	extensionsShouldNotWork.forEach((extension) => {
		it(`will not lint a ${extension} file`, async () => {
			await quickESLintTest({ pathToESLintConfiguration: path.resolve(__dirname, 'index.js'), shouldLintExtension: extension, shouldSucceed: false });
		});
	});

	it(
		'will import the file with zero node_modules, and work with the expected file types',
		async () => {
			const tempFolderPath = path.join(process.cwd(), 'temp', 'test', getRandomCharacters(25, { letters: true }));

			const packageJsonPath = await findPackageJson(__dirname);
			const pathToPackage = path.dirname(packageJsonPath);

			const relativePath = path.relative(pathToPackage, __dirname).replaceAll('\\', '/');
			await ensureDirectoryExists(tempFolderPath);

			const eslintConfigText = `
			module.exports = {
						extends: ['./node_modules/@lawlzer/eslint/${relativePath}/index.js'], // todo remove index.js from here
					};
					`;
			await fs.writeFile(path.join(tempFolderPath, '.eslintrc.js'), eslintConfigText);

			void (await exec(`npm init -y`, {
				cwd: path.resolve(tempFolderPath),
				env: { path: getModifiedEnvPath() },
			}));

			// Install this package
			void (await exec(`npm i --no-package-lock ${pathToPackage}`, {
				cwd: path.resolve(tempFolderPath),
				env: { path: getModifiedEnvPath() },
			}));

			// We get the following error if we do not do this:
			// npm ERR! could not determine executable to run
			void (await exec(`npm i --no-package-lock`, {
				cwd: path.resolve(tempFolderPath),
				env: { path: getModifiedEnvPath() },
			}));

			const shouldLint = lintableFileTypes.filter((x) => {
				return extensionsShouldWork.includes(x.extension);
			});

			for await (const testData of shouldLint) {
				const fileToLintPath = path.join(tempFolderPath, `fileToLint.${testData.extension}`);
				await fs.writeFile(fileToLintPath, testData.fileContent);

				await exec(`npx tsc --init`);

				console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaapath: ', path.resolve(tempFolderPath));

				// Sometimes the command "fails", but it still lints.
				try {
					await exec(`npx --yes eslint . --fix`, {
						cwd: path.resolve(tempFolderPath),
						env: { path: getModifiedEnvPath() },
					});
				} catch (e) {}
				console.log('path: ', path.resolve(tempFolderPath));

				const fileContentAfter = await fs.readFile(fileToLintPath, 'utf-8');
				await testData.test(fileContentAfter);
			}
			await fs.remove(tempFolderPath);
		},
		ms('1m')
	);
});
