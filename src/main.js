import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSVGIcon from 'vue-svgicon'


Vue.config.productionTip = false
Vue.use(VueSVGIcon, {tagName: 'icon'})

import layer from '@/components/v-layer.vue'
Vue.component('v-layer',layer)

import image_loader from '@/components/v-image-loader.vue'
Vue.component('v-image-loader',image_loader)


import nav from '@/components/v-nav.vue'
Vue.component('v-nav',nav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
