/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironmentOptions: {
    browser: "chrome"
  },
  testTimeout: 1_000_000
};