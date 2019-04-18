const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.CONTENTFUL_ENVIRONMENT': JSON.stringify(process.env.CONTENTFUL_ENVIRONMENT),
      'process.env.CONTENTFUL_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN),
      'process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN': JSON.stringify(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN),
      'process.env.RECAPTCHA_SITE_KEY': JSON.stringify(process.env.RECAPTCHA_SITE_KEY),
      'process.env.PARDOT_BASE_URL': JSON.stringify(process.env.PARDOT_BASE_URL),
      'process.env.GTMID': JSON.stringify(process.env.GTMID),
      'process.env.GAID': JSON.stringify(process.env.GAID)
    })
  ]
})
