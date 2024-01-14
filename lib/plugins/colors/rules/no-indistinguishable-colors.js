const stylelint = require("stylelint");
const Color = require("colorjs.io").default;

const {
  createPlugin,
  utils: { report, ruleMessages, validateOptions },
} = stylelint;

const ruleName = "@tiwariav/stylelint-config/no-indistinguishable-colors";

const messages = ruleMessages(ruleName, {
  rejected: (color1, color2, delta) =>
    `Unexpected indistinguishable colors "${color1}" and "${color2}", with a delta of ${delta}`,
});

const meta = {
  url: "https://github.com/tiwariav/stylelint-config/rules/no-indistinguishable-colors/README.md",
};

const COLOR_PROP_REGEX =
  /(^(--.*)\b|\b(.*color|.*shadow|background.*|border.*|outline.*|list-style.*|fill|stroke)\b)/;
const COLOR_VALUE_REGEX =
  /#(?:[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})\b|\b(?:rgb|hsl|oklch)a?\([^)]*\)/gi;

const getWhitelistHashKey = (pair) => {
  pair = pair.sort();
  return pair[0] + "-" + pair[1];
};

/** @type {import('stylelint').Rule} */
const ruleFunction = (primary, secondaryOptions) => {
  return (root, result) => {
    const validOptions = validateOptions(
      result,
      ruleName,
      {
        actual: primary,
        possible: [true],
      },
      {
        optional: true,
        actual: secondaryOptions,
        possible: {
          whitelist: (x) => Array.isArray(x) && typeof x === "string",
          threshold: (x) => Number.isInteger(x) && x >= 0 && x <= 100,
        },
      }
    );
    const { threshold = 3, whitelist = [] } = secondaryOptions;
    const whitelistHash = {};
    for (const pair of whitelist) {
      if (!Array.isArray(pair)) {
        throw new Error(
          "The whitelist option takes an array of array pairs. " +
            "You probably sent an array of strings."
        );
      }
      whitelistHash[getWhitelistHashKey(pair)] = true;
    }
    if (!validOptions) return;
    const colors = {};
    root.walkDecls(COLOR_PROP_REGEX, (decl) => {
      const newColorStrings = decl.value.match(COLOR_VALUE_REGEX);
      if (!newColorStrings) {
        return;
      }

      for (const newColorString of newColorStrings) {
        const newColor = new Color(newColorString);

        if (!(newColorString in colors)) {
          colors[newColorString] = colors[newColorString] || [];
          colors[newColorString].push(newColor);
        }

        for (const colorString of Object.keys(colors)) {
          /** @type {Color[]} */
          const colorList = colors[colorString];
          if (colorList[0] === newColor) {
            return;
          }
          const delta = colorList[0].deltaE(newColor, "2000");
          if (delta < threshold) {
            report({
              result,
              ruleName,
              message: messages.rejected(colorString, newColorString, delta),
              node: decl,
              word: newColorString,
            });
          }
        }
      }
    });
  };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;
ruleFunction.meta = meta;

module.exports = createPlugin(ruleName, ruleFunction);
