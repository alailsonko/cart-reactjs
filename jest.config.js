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
};
