module.exports = [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: 'global',
      sourceMap: true
    }
  },
  'resolve-url-loader',
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      sourceMapContents: false
    }
  }
]
