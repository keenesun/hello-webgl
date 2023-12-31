const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _entry = [];
let files = fs.readdirSync(path.resolve(__dirname, './src'));
files.forEach(fileName => {
  let _path = '';
  if (fileName.indexOf('.js') > -1) {
    _path = `./src/${fileName}`;
  } else {
    _path = `./src/${fileName}/index.js`;
  }
  _entry.push(_path);
})

module.exports = {
  mode: 'development',
  entry: _entry,
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, './'),
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: 'Webgl'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};