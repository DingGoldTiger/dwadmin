
import Vue from 'vue'
import Vuex from 'vuex'
import state from './store'
import mutations from './mutations'
import getters from './getter'
import actions from './action'
import test from './modules/test'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    test
  },
  strict: process.env.NODE_ENV !== 'production'
})
export default store
