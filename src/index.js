// import path from 'path';
const path = require('path');

module.exports = {
	// eslintConfigMain: [...require('./eslint/javascript/.eslintrc.js')],
	eslintConfigMain: [
		path.resolve(__dirname, 'eslint', 'typescript', '.eslintrc.js'), //
		path.resolve(__dirname, 'eslint', 'javascript', '.eslintrc.js'),
	],

	// eslintConfigMain: { extends: './eslint/javascript/.esclintrc.js' },
	// eslintConfigCommit: require('./eslint/.eslintrc.commit.js'),
};
