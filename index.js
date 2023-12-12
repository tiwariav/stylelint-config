function propertyValueAllowed(properties) {
  const response = {};
  for (const property of properties) {
    response[property] =
      /^(auto|currentColor|inherit|none|transparent|0|var\(.*\)|calc\(|\)|-1\s\*|\s)+$/;
  }
  return response;
}

module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    // TODO: check if any alternative package is born
    // "stylelint-a11y/recommended",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    // enable once package is updated to support v16
    // "stylelint-declaration-strict-value",
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-no-unknown": null,
    "declaration-property-value-allowed-list": propertyValueAllowed([
      /color$/,
      "background",
      "border-radius",
      "box-shadow",
      "font-size",
      "z-index",
      "/gap/",
      "/margin/",
      "/padding/",
    ]),
    "declaration-property-value-no-unknown": true,
    "function-no-unknown": null,
    "max-nesting-depth": 4,
    "plugin/declaration-block-no-ignored-properties": true,
  },
};
