import Vue from 'vue'
import Vuex from 'vuex'

import commonState from '@/common/vuex/store.js'
import commonMutaions from '@/common/vuex/mutations/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...commonState
  },
  mutations: {
    ...commonMutaions
  }
})

export default store
