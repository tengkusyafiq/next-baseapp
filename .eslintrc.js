const fs = require("fs")

module.exports = {
  root: true,
  extends: [
    // "check-file", // TODO: need to fix: Failed to load config "check-file" to extend from.
    "plugin:storybook/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "react-app/jest",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    // allow type any
    "@typescript-eslint/no-explicit-any": "off",
    // if the html tag is empty, it should be self-closing
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    // do not allow relative imports outside, but allow special characters like @, ~, or #
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../"],
      },
    ],
    // follow eslint naming conventions
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          // allow I prefix for interfaces or suffix of Props
          regex: "^I[A-Z]|Props$",
          match: true,
        },
      },
      {
        selector: "property",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "method",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "accessor",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: true,
        },
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeProperty",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "objectLiteralProperty",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "variableLike",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: ["variable", "function", "objectLiteralProperty", "objectLiteralMethod"],
        types: ["function"],
        format: ["PascalCase", "camelCase"],
      },
    ],
    // // follow file naming conventions: file names should be in kebab-case
    // "check-file/filename-naming-convention": [
    //   "error",
    //   {
    //     "**/*.{jsx,tsx}": "KEBAB_CASE",
    //     "**/*.{js,ts}": "KEBAB_CASE",
    //   },
    // ],
    // // follow folder naming conventions: folder names should be in kebab-case. next js allow (), [] around folder names, and _ in front of folder names
    // // read more: https://github.com/DukeLuo/eslint-plugin-check-file/pull/27#issuecomment-1582551071
    // "check-file/folder-naming-convention": [
    //   "error",
    //   {
    //     "**/*.{jsx,tsx}": "NEXT_JS_APP_ROUTER_CASE",
    //     "**/*.{js,ts}": "NEXT_JS_APP_ROUTER_CASE",
    //   },
    // ],
    "testing-library/prefer-screen-queries": "off",
    "@next/next/no-html-link-for-pages": "off",
    // only allow unused variables that start with _
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "tailwindcss/classnames-order": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import/order": [
      1,
      {
        groups: ["external", "builtin", "internal", "sibling", "parent", "index"],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: "internal",
          })),
          {
            pattern: "env",
            group: "internal",
          },
          {
            pattern: "theme",
            group: "internal",
          },
          {
            pattern: "public/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  ignorePatterns: [
    // ignore .eslintrc.js file
    ".eslintrc.js",
  ],
}

function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory()
  })
}
