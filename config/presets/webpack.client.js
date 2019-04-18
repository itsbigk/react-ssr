const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssLoaders = require('../cssLoaders')

module.exports = ({ mode }) => {
  const config = {
    entry: path.resolve(__dirname, '../../src/index.js'),
    module: {
      rules: [
        {
          test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                mimetype: 'application/octet-stream',
                name: 'fonts/[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                mimetype: 'application/octet-stream',
                name: 'fonts/[hash].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        hash: false,
        filename: 'index.html',
        inject: 'body',
        minify: {
          collapseWhitespace: true
        }
      }),
      new HtmlWebpackPlugin({
        template: './src/404.html',
        hash: false,
        filename: '404.html',
        minify: {
          collapseWhitespace: true
        }
      })
    ]
  }

  if (mode === 'production') {
    config.output = {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }

    config.optimization = {
      minimizer: [
        new OptimizeCSSAssetsPlugin({})
      ]
    }

    config.module.rules.push({
      test: /\.scss$/,
      include: path.join(__dirname, '../../src'),
      use: [
        MiniCssExtractPlugin.loader,
        ...cssLoaders.slice(1, cssLoaders.length)
      ]
    })

    config.plugins = [...config.plugins, ...[
      new MiniCssExtractPlugin({
        filename: 'bundle.[hash].css',
        chunkFilename: '[name].[hash].css'
      }),
      new PurgecssPlugin({
        paths: glob.sync(path.join(__dirname, '../../src/**/*'), { nodir: true })
      })
    ]]
  } else {
    config.module.rules.push({
      test: /\.scss$/,
      use: cssLoaders
    })
  }

  return config
}
