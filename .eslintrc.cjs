module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/no-restricted-paths": [
      "error",
      {
        zones: [
          {
            from: "./src/features/theme/**/*",
            target: "./src/features/!(theme)/**/*",
          },
          {
            from: "node_modules/@mui/material",
            target: "./src/features/!(ui|theme)/**/*",
          },
        ],
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
