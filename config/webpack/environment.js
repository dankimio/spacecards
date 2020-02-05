const path = require('path')
const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

// Custom configuration: aliases
environment.config.resolve.alias = {
  '@': path.resolve(__dirname, '../../app/javascript'),
  '@images': path.resolve(__dirname, '../../app/javascript/images')
}

// Custom configuration: configure PostCSS loader
const postcssLoader = {
  test: /\.postcss$/,
  use: [
    'vue-style-loader',
    { loader: 'postcss-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
}
environment.loaders.append('postcss', postcssLoader)

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

module.exports = environment
