/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {},
  testMatch: [
    '<rootDir>/packages/**/*.spec.js',
    '<rootDir>/packages/**/*.spec.mjs',
  ],
};
