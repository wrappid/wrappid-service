module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["import", "node", "promise", "unused-imports"],
  rules: {
    indent: ["error", 2, { MemberExpression: 1, SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-console": "off",
    "no-unused-vars": ["error", { args: "after-used", vars: "all" }],
    "import/order": [
      "error",
      { alphabetize: { caseInsensitive: true, order: "asc" } },
    ],
    "import/newline-after-import": "error",
  },
};
