const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = () => ({
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../src/static'),
    historyApiFallback: true,
    open: true
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new Dotenv()
  ]
})
