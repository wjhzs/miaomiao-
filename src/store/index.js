import Vue from 'vue'
import Vuex from 'vuex'
import city from './city/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbar: true
  },
  mutations: {
    HideTabbar(state,data){
      state.isTabbar = data
    },
    ShowTabbar(state,data){
      state.isTabbar = data
    },
  },
  actions: {
  },
  modules: {
    city
  }
})
