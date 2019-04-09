import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  // 列表
  orderList: []
}
const mutations = {
  setOrderList (state, data) {
    console.log('||||||')
    state.orderList = data
  }
}
const actions = {
  /**
         * 获取列表数据
         * @param commit
         * @returns {Promise<*>}
    */
  // getOrderList ({commit}, str) {
  //   let str = 'aaaaaaaaaaaaa'
  //   console.log(str)
  //   commit('setAddressList', str)
  //   return str
  // }
  getOrderList: ({commit}, str) => commit('setOrderList', str)
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
