<template>
  <div>
    首页
    <i-button type="primary" @click="toLogin">这是一个按钮</i-button>
    <!-- <vue-tab-bar
      @fetch-index="clickIndexNav"
      :selectNavIndex=selectNavIndex
      :needButton="needButton"
      :handButton="handButton"
      :btnText="btnText">
    </vue-tab-bar> -->
  </div>
</template>

<script>
// import vueTabBar from '../../components/tabbar/index'

export default {
  data () {
    return {
    }
  },

  components: {
    vueTabBar
  },

  methods: {
    toLogin () {
      wx.navigateTo({
        url: '/pages/logs/main'
      })
    }
  },
  onLoad () {
    wx.hideTabBar()
    console.log('onLoad')
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>

</style>
