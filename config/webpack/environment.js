const path = require('path')
const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

// Custom configuration: aliases
environment.config.resolve.alias = {
  '@': path.resolve(__dirname, '../../app/javascript'),
  '@images': path.resolve(__dirname, '../../app/javascript/images')
}

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

// Fix a bug for file inclusion like <img :src="require()"/>
// https://github.com/vuejs/vue-loader/issues/1612
environment.loaders.get('file').use.find(item => item.loader === 'file-loader').options.esModule = false

module.exports = environment
