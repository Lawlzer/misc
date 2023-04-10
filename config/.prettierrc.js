const path = require('path');

// Prettier uses a different process.cwd() than the terminal, so we have to use __dirname
module.exports = require(path.resolve(__dirname, '..', 'packages', 'prettier', 'index.js'));
