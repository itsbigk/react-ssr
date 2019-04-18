const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = () => ({
  target: 'node',
  entry: './server/index.js',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server.js',
    // chunkFilename: '[name].server.js',
    path: path.resolve(__dirname, '../../dist/server')
  },
  externals: [
    '@loadable/component',
    webpackNodeExternals()
  ]
})
