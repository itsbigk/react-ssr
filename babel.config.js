const LoadablePlugin = require('@loadable/babel-plugin')

function isClientTarget (caller) {
  return Boolean(caller && caller.target === 'client')
}

function isWebpack (caller) {
  return Boolean(caller && caller.name === 'babel-loader')
}

module.exports = api => {
  const web = api.caller(isClientTarget)
  const webpack = api.caller(isWebpack)

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs'
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      LoadablePlugin
    ]
  }
}
