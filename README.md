## Installation
```bash
npm install --save-dev @mbvue/stylelint-config
#OR
yarn add -D @mbvue/stylelint-config
```

## Usage
.stylelintrc.js：

```js
module.exports = {
  extends: ['@mbvue/stylelint-config'],
  rules: {}
};
```

OR

.stylelintrc.json：

```json
{
  "extends": ["@mbvue/stylelint-config"],
  "rules": {}
}
```

OR

package.json：

```json
{
  "stylelint": {
    "extends": "@mbvue/stylelint-config",
    "rules": {}
  }
}
```
