import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import chaiFriendly from "eslint-plugin-chai-friendly";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // TypeScript config
  ...tseslint.configs.recommended,

  // Mocha test files
  {
    files: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
    rules: {
      "no-unused-expressions": "off",
      "chai-friendly/no-unused-expressions": "error",
    },
  },
]);
