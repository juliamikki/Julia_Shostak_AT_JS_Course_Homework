export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "babel-jest", // transform js/ts files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!chai)/",  // don't ignore chai (or any other modules)
  ],
  moduleFileExtensions: ["js", "ts", "mjs", "cjs"],
  roots: ["<rootDir>/cw9_jest"],  // look for test in directory
  reporters: [
    "default", 
    ["jest-html-reporter", {
      pageTitle: "Jest Test Report",
      outputPath: "./jest-report/jest-report.html",
      includeFailureMsg: true,
      includeSuiteFailure: true
    }]
  ],
  testTimeout: 5000
};