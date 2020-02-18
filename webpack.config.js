const CompressionPlugin = require('compression-webpack-plugin');

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
          test: /\.(jpe?g|png|gif|svg)$/i,
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
    plugins: [
        new CompressionPlugin({
          test: /\.js(\?.*)?$/i,
          cache: true,
        }),
      ],
  };