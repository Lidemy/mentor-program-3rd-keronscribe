const path = require('path');

module.exports = {
  entry: '../hw2/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './../hw2'),
  },
};
