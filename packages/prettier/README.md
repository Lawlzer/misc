# Using @lawlzer/prettier

### Install @lawlzer/prettier as a development dependency:

```
npm i -D @lawlzer/prettier
```

### Add the following code to a `.prettierrc.js`

```
// .prettierrc.js
module.exports = {
	...require('@lawlzer/prettier'),
};
```

This package automatically installs Prettier (it is not a necessary dependency)
