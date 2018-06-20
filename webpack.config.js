const path = require('path')
const rm = require('rimraf');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const entryPoint = path.resolve(__dirname, 'client', 'index.jsx')
const outputFile = process.env.WEBPACK_ENV === 'development' ? '[name].js' : '[name].[chunkhash].js'
const exportPath = path.resolve(__dirname, 'dist')

rm.sync(exportPath, { glob: false });

const plugins = [
  new htmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true,
    chunksSortMode: 'dependency'
  })
]

let env = process.env.WEBPACK_ENV || 'development'
if (env === 'production') {

}

module.exports = {
  entry: [
    entryPoint
  ],

  output: {
    path: exportPath,
    filename: outputFile
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          'file-loader?name=[name].[ext]',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              pngquant: {
                quality: '62-82',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.ico$/,
        use: [ 'file-loader?name=[name].[ext]' ]
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins
}