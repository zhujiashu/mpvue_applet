<template>
  <div>
    首页
    <i-button type="primary" @click="toXM">这是一个去项目方的按钮</i-button>
    <i-button type="primary" @click="toTZ">这是一个去投资方的按钮</i-button>
  </div>
</template>

<script>
import store from '../../vuex/store'

export default {
  data () {
    return {
    }
  },
  computed: {

  },
  onShow () {
    this.a()
  },
  methods: {
    async a () {
      console.log('a||||')
      // 调用请求获取订单列表接口
      this.getOrderList('aaa')
      console.log('getOrderList|||||')
      console.log(this.getOrderList)
    },
    toXM () {
      store.commit('setTheStatusId', 1)
      wx.navigateTo({
        url: '/pages/mainSection/main'
      })
    },
    toTZ () {
      store.commit('setTheStatusId', 2)
      wx.navigateTo({
        url: '/pages/mainSection/main'
      })
    }
  },
  onLoad () {
    console.log('onLoad')
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang='scss'>

</style>
