import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ]
  },
  { ignores: ["dist/**"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser globals if needed
        ...globals.node,    // Add Node.js globals like `process`
      },
    },
  },
  pluginJs.configs.recommended, // Use recommended ESLint rules
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          "printWidth": 80,
          "tabWidth": 2,
          "singleQuote": true,
          "trailingComma": "es5",
          "bracketSpacing": true
        }
      ],
      "no-console": "warn",
      "eqeqeq": "error",
      "no-unused-vars": "warn",
      "curly": ["error", "all"],
    },
  },
];
