# Using @lawlzer/eslint

### Install @lawlzer/eslint, eslint, and @typescript-eslint/eslint-plugin as development dependencies:

```
npm i -D @lawlzer/eslint eslint @typescript-eslint/eslint-plugin
```

### Add the following code to a `.eslintrc.js`

```
// .eslintrc.js
const path = require('path');

module.exports = {
  // @lawlzer/eslint
  extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'main')],
};
```

If you'd like to use an on-commit ESLint file (`.eslintrc.commit.js`, along with an on-commit hook), there is also `@lawlzer/eslint/commit`)

Example:

```
// .eslintrc.js
const path = require('path');

module.exports = {
  // @lawlzer/eslint
  extends: [path.resolve(process.cwd(), 'node_modules', '@lawlzer', 'eslint', 'commit')],
};
```

Alternatively, if you would only like JS or TS configuration, there is `@lawlzer/eslint/main/js` (and the similar variants)
