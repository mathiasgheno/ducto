import loglevel, {getLogger} from 'loglevel';

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

loglevel.setLevel('error');

/**
 * @type {import('@jest/types').Config.InitialOptions}
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
