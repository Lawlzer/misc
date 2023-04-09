npm link C:/code/npm/config/packages/eslint
npm i @lawlzer/config
npm i -D eslint

const path = require('path');

module.exports = {
// ...require('@lawlzer/prettier')
...require(path.resolve(\_\_dirname, '..', 'node_modules', '@lawlzer', 'prettier', 'index.js')),
};

Maybe needs Prettier installed
(if yes, move to peerDependency)
