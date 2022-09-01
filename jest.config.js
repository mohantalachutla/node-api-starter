module.exports = {
  verbose: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    './src/controller/**',
    '!./src/**/index.js',
    // '!./src/app.js',
    // '!./src/config/**',
    // '!./src/server.js',
    // '!./src/index.js',
    // '!./src/http.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules'],
  coverageThreshold: {
    global: {
      // branches: 90,
      // functions: 90,
      lines: 90,
      // statements: 90,
    },
  },
  transform: {
    '\\.js': 'babel-jest',
  },
}
