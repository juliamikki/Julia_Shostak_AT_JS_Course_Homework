/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "babel-jest", // transform your JS/TS files
  },
  transformIgnorePatterns: [
    // don't ignore chai (or any ESM module you need)
    "/node_modules/(?!chai)/",
  ],
  moduleFileExtensions: ["js", "ts", "mjs", "cjs"],

  // Only look for tests in this folder
  roots: ["<rootDir>/cw9_jest"],

  // Show each test name in console
  verbose: true,

  // Add custom reporters
  reporters: [
    "default", // console output
    ["jest-html-reporter", {
      pageTitle: "Jest Test Report",
      outputPath: "./jest-report/jest-report.html",
      includeFailureMsg: true,
      includeSuiteFailure: true
    }]
  ],

  // Optional: increase default timeout if you have async tests
  testTimeout: 5000
};