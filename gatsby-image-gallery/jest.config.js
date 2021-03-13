// Custom Jest config, TSDX will shallow merge it with its own Jest config:
// https://github.com/formium/tsdx/blob/master/src/createJestConfig.ts

module.exports = {
  transform: {
    // Copied from TSDX
    '.(ts|tsx)$': require.resolve('ts-jest/dist'),
    '.(js|jsx)$': require.resolve('babel-jest'), // jest's default
    // Added to support CSS module
    '.(css|less)$': '<rootDir>/jest-config/style-mock.js',
  },
}
