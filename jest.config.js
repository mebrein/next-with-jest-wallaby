module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  collectCoverageFrom: [
    "**/*.test.js?(x)" ,
    "!<rootDir>/node_modules/",
    "!<rootDir>/path/to/dir/"
  ]
}