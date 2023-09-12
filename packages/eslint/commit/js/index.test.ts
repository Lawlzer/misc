import path from 'path';

import type { LintableFileExtensions } from '../../../../test-utils/utils';
import { getOppositeLintableExtensions, quickESLintTest } from '../../../../test-utils/utils';

describe(`eslint/commit/js`, () => {
	// This is a test to ensure the execSync errors if it does not import a real file (this is a test to ensure the tests work)
	it('will throw an error', async () => {
		void expect(async () => {
			// @ts-expect-error We want this to error
			await import('this does not exist');
		}).rejects.toThrow();
	});

	it('the folder is import-able in JavaScript', async () => {
		expect(async () => {
			await import('./index');
		}).not.toThrow();
	});

	const extensionsShouldWork: LintableFileExtensions[] = ['js'];
	const extensionsShouldNotWork: LintableFileExtensions[] = getOppositeLintableExtensions(extensionsShouldWork);

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
});
