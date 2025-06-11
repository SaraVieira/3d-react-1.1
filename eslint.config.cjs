const { defineConfig, globalIgnores } = require("eslint/config")

const globals = require("globals")

const { fixupConfigRules } = require("@eslint/compat")

const js = require("@eslint/js")

const { FlatCompat } = require("@eslint/eslintrc")

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {},
    },

    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
      )
    ),

    settings: {
      react: {
        version: "18.2",
      },
    },

    rules: {
      "react/prop-types": 0,
      "react/jsx-no-target-blank": "off",
    },
  },
  globalIgnores(["**/dist", "**/.eslintrc.cjs"]),
])
