import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang : "fr"
  },
  getters : {
    getLang : state => state.lang
  },
  mutations: {
    setLang : (state,val) => {
      state.lang = val
    }
  },
  actions: {

  }
})
