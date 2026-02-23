export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]s$": "babel-jest", // transform js/ts files
  },
  transformIgnorePatterns: [
    "/node_modules/(?!chai)/",  // don't ignore chai (or any other modules)
  ],
  moduleFileExtensions: ["js", "ts", "mjs", "cjs"],
  roots: ["<rootDir>"],  // look for test in directory
  reporters: [
    "default", 
    ["jest-html-reporters", {
      pageTitle: "Jest Test Report",
       publicPath: "./reports",
        filename: "test-report.html",
        enableMergeData: true,
        dataMergeLevel: 3,
    }]
  ],
  testTimeout: 5000
};