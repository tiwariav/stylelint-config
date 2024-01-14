const pluginColors = require("./plugins/colors");

module.exports = {
  extends: [
    "@ronilaukkarinen/stylelint-a11y/recommended",
    "stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-media-use-custom-media",
    "stylelint-no-indistinguishable-colors",
    "stylelint-plugin-defensive-css",
    "stylelint-use-nesting",
    "stylelint-value-no-unknown-custom-properties",
    pluginColors,
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-no-unknown": null,
    "declaration-property-value-no-unknown": true,
    "font-weight-notation": "numeric",
    "function-no-unknown": null,
    "max-nesting-depth": 4,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "@tiwariav/stylelint-config/no-indistinguishable-colors": [
      true,
      { threshold: 3 },
    ],
    "a11y/selector-pseudo-class-focus": null,
    "csstools/media-use-custom-media": "always",
    "csstools/use-nesting": "always",
    "csstools/value-no-unknown-custom-properties": true,
    "plugin/declaration-block-no-ignored-properties": true,
    "plugin/use-defensive-css": [
      true,
      {
        "accidental-hover": true,
        "background-repeat": true,
        "scroll-chaining": true,
        "scrollbar-gutter": true,
      },
    ],
    "scale-unlimited/declaration-strict-value": [
      [
        "/color$/",
        "background",
        "border-radius",
        "box-shadow",
        "font-size",
        "z-index",
        "/margin/",
        "/padding/",
        "/gap/",
      ],
      {
        disableFix: true,
        ignoreValues: [
          "auto",
          "currentColor",
          "inherit",
          "none",
          "transparent",
          0,
        ],
      },
    ],
  },
};
