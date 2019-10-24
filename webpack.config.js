const webpack = require('webpack');
const path = require('path');

const config = {
  entry: ['@babel/polyfill','./src/main.js'], 
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
      contentBase: __dirname + '/public'
  },

  module: {
      rules:[
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
          }
        
      ],
  }
};

module.exports = config;