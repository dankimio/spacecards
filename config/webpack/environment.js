const path = require("path");
const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.config.resolve.alias = {
  '@': path.resolve(__dirname, '../../app/javascript'),
  '@images': path.resolve(__dirname, '../../app/javascript/images')
};

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
