const path = require('path')
const webpackMerge = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')

const modeConfig = env => require(`./config/webpack.${env}`)(env)
const presetConfig = require('./config/loadPresets')
const getTarget = presets => {
  const client = presets.indexOf('client')
  const server = presets.indexOf('server')

  if (client > -1) {
    return {
      target: 'client'
    }
  }

  if (server > -1) {
    return {
      target: 'server'
    }
  }
}

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
      resolve: {
        modules: [
          'node_modules',
          path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.jsx']
      },
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  caller: getTarget(presets)
                }
              },
              'eslint-loader'
            ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  limit: 100000,
                  name: 'images/[hash].[ext]'
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new LoadablePlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
