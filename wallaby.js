module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'pages/**/*.js?(x)', instrument: true},
      { pattern: 'jest.setup.js', instrument: false },
      { pattern: 'jest.config.js', instrument: false }
    ],
    tests: ['**/*.test.js?(x)', '!node_modules/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },

    testFramework: 'jest',

    debug: false
  }
}
