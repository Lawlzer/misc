const path = require('path');

module.exports = {
	extends: [path.resolve(process.cwd(), 'packages', 'eslint', 'main', 'index.js')],
};
