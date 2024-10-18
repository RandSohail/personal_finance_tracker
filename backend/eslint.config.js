import globals from "globals";
import pluginJs from "@eslint/js";

export default [
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
      "no-console": "warn",
      "eqeqeq": "error",
      "no-unused-vars": "warn",
      "curly": ["error", "all"],
    },
  },
];
