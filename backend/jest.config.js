/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Test file patterns
  testMatch: ['**/tests/**/*.test.ts'],

  // TS transformer
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // Code coverage
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts', // exclude server bootstrap
    '!src/**/index.ts', // optional
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'lcov'],

  moduleFileExtensions: ['ts', 'js', 'json'],
};
