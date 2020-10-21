## Vendor
StyleLint Config.

## Installation
yarn add -D @mbvue/stylelint-config

## Usage
.stylelintrc.js：

module.exports = {
  extends: ['@mbvue/stylelint-config']
};

module.exports = {
  extends: ['@mbvue/stylelint-config'],
  rules: {}
};

or

.stylelintrc.json：

or

{
  "extends": ["@mbvue/stylelint-config"]
}


{
  "extends": ["@mbvue/stylelint-config"],
  "rules": {}
}

or

package.json：

{
  "stylelint": {
    "extends": "@mbvue/stylelint-config"
  }
}

{
  "stylelint": {
    "extends": "@mbvue/stylelint-config",
    "rules": {}
  }
}
