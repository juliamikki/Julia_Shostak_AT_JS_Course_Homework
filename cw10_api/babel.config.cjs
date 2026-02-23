module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { node: "current" },
        modules: "auto", // transform ES modules to CJS for Jest
      },
    ],
  ],
};