export async function createESLintTestFileContent(): Promise<string> {
	const testCode = `
  		var thisWillBeChanged = 1;
	`;
	return testCode;
}
