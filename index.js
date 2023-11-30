module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-a11y/recommended",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
    "stylelint-use-nesting",
  ],
  rules: {
    "a11y/no-outline-none": null,
    "alpha-value-notation": "number",
    "at-rule-no-unknown": null,
    "csstools/use-nesting": true,
    "function-no-unknown": null,
    "max-nesting-depth": 4,
    "plugin/declaration-block-no-ignored-properties": true,
    "scale-unlimited/declaration-strict-value": [
      [
        "/color$/",
        "background",
        "border-radius",
        "box-shadow",
        "font-size",
        "z-index",
        "/gap/",
        "/margin/",
        "/padding/",
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
