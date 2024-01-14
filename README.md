# stylelint-config

Shareable config for stylelint.

## v16

Upgrade for v16 is pending following issue:

- Vscode plugin issue with yarn pnp
  <https://github.com/stylelint/vscode-stylelint/issues/464>

When the above is fixed, plugins which are not ported can be ignored.

## Installation

```bash
npm install --save-dev stylelint @tiwariav/stylelint-config
```

## Usage

Use with the shared config:

```javascript
{
  "extends": [
    "@tiwariav/stylelint-config"
  ]
}
```

To only use a particular plugin:

```javascript
{
  "plugins": [
    "@tiwariav/stylelint-config/plugins/color"
  ],
}
```
