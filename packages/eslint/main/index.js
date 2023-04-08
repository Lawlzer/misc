// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

const path = require('path');

module.exports = {
	extends: [path.resolve(__dirname, 'js', 'index.js'), path.resolve(__dirname, 'ts', 'index.js')],
};
