const path = require('path')

const dist = path.resolve(__dirname, 'static')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './src/client/client.js',
    output: {
      path: dist,
      filename: 'client.js',
      // publicPath: '/src/server/static/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader']
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: './src/client/server.js',
    output: {
      path: dist,
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      // publicPath: '/src/server/static/'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['style-loader', 'css-loader']
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    }
  }
]
