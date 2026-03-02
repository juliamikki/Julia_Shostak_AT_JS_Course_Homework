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
      "jest-html-reporters",
      {
        pageTitle: "Jest Unit Test Report",
        publicPath: "./jest-report",
        filename: "report.html",
        expand: true,
        hideIcon: false,
        openReport: false,
        inlineSource: true,
      },
    ],
  ],
};
