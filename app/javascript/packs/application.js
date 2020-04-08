// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require('@rails/ujs').start()
require('channels')

// Tailwind
import '../css/application.css'

// Vue

import Vue from 'vue'
import App from '../app.vue'

import router from '../routes'
import store from '../store'

import InlineSvg from 'vue-inline-svg'
Vue.component('inline-svg', InlineSvg)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import VueNotification from 'vue-notification'
Vue.use(VueNotification, { componentName: 'VueNotification' })

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
