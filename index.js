module.exports = {
  extends: [
    // enable when v16 support
    // "@ronilaukkarinen/stylelint-a11y/recommended",
    // "stylelint-config-css-modules",
    "stylelint-config-standard",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-declaration-strict-value",
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-no-unknown": null,
    "declaration-property-value-no-unknown": true,
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
