module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'browser',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: [
    './src/**/__tests__/**/*.[jt]s?(x)', './src/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
