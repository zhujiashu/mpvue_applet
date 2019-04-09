import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 列表
  theStatusId: ''
}
const mutations = {
  setTheStatusId (state, data) {
    console.log('||||||')
    state.theStatusId = data
  }
}
export default new Vuex.Store({
  state,
  mutations
})
