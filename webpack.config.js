const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          loaders: [
            'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
          ]
        },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        } 
      ]
      
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    plugins: [
        new CompressionPlugin({
          test: /\.js(\?.*)?$/i,
          cache: true,
        }),
        new HtmlWebPackPlugin(
            {
                template: './public/index.html'
            }
        )
      ],
  };