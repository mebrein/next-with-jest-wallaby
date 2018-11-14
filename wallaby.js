module.exports = function(wallaby) {
  return {
    files: ['/pages/**/*.js?(x)', 'jest.setup.js', 'jest.config.js', 'package.json'],
    tests: ['**/*.test.js?(x)', '!node_modules/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        babelrc: true
      })
    },

    testFramework: 'jest',

    debug: false
  }
}
