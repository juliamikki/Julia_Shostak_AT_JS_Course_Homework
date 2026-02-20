export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!chai)/"],
  moduleFileExtensions: ["js", "ts", "mjs", "cjs"],
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Jest Test Report",
        outputPath: "./jest-report/jest-report.html",
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
