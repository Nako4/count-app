import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    // incrementが5秒後(5000)に実行されるような記述
    increment: ({ commit }) => {
      setTimeout(() => {
        commit('increment')
      }, 5000)
    }
  },
  modules: {
  }
})
