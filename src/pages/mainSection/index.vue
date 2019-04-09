<template>
  <div>
    首页
    <i-button type="primary" @click="toLogin">这是一个按钮</i-button>
    <vueTabBar></vueTabBar>
  </div>
</template>

<script>
import vueTabBar from '../../components/tabbar'
import {mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },

  components: {
    vueTabBar
  },
  computed: {

  },
  onShow () {
    this.a()
  },
  methods: {
    ...mapActions([
      'getOrderList'
    ]),
    async a () {
      console.log('a||||')
      // 调用请求获取订单列表接口
      this.getOrderList('aaa')
      console.log('getOrderList|||||')
      console.log(this.getOrderList)
    },
    toLogin () {
      wx.navigateTo({
        url: '/pages/logs/main'
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
