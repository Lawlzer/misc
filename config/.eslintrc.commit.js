const path = require('path');

module.exports = {
	extends: [path.resolve(process.cwd(), 'packages', 'eslint', 'commit', 'index.js')],
};
