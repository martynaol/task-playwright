module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:playwright/recommended`,
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [`.eslintrc.{js,cjs}`],
      parserOptions: {
        sourceType: `script`,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`,
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    quotes: [`error`, `backtick`],
    semi: [`error`, `always`],
  },
};
