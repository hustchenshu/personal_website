import Vue from 'vue'
import Admin from './Admin'
import router from './router/admin'
// import Frame from '@/components/frame/frame'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#admin',
  router,
  template: '<Admin></Admin>',
  components: { Admin }
})
