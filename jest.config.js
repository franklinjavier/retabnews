/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/app/**/*.test.[jt]s?(x)'],
  verbose: true,
  cacheDirectory: '.jest',
  detectOpenHandles: true,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/dist/', 'node_modules'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    '!app/**/index.{ts,js}',
    '!app/routes/**/*.{ts,tsx}',
    '!app/*.{ts,tsx}',
  ],
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/app/$1',
  },
}
