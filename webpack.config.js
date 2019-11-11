const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'cdcrftWebStorage',
    libraryTarget: 'umd',
    globalObject: 'this',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};