import Vue from 'vue'
import Vuex from 'vuex'
// import mutation from './mutation'
// import action from './action'
// import getter from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // actions,
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
