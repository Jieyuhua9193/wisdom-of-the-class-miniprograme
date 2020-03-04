import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/vuex/store'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false

var Fly = require('flyio/dist/npm/wx')
Vue.use(Fly)

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
