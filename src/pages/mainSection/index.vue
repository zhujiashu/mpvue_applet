<template>
  <div class="full-screen">
    <project v-if='tabBarId === 1'></project>
    <meeting v-if='tabBarId === 2'></meeting>
    <mine v-if='tabBarId === 3'></mine>
    <agency v-if='tabBarId === 4'></agency>
    <vueTabBar @getTabBarId='getTabBarId' :tabBarId='tabBarId'></vueTabBar>
  </div>
</template>

<script>
import vueTabBar from '../../components/tabbar'
import project from '../../components/project'
import meeting from '../../components/meeting'
import mine from '../../components/mine'
import agency from '../../components/agency'

export default {
  data () {
    return {
      tabBarId: 1
    }
  },
  components: {
    vueTabBar,
    project,
    meeting,
    mine,
    agency
  },
  onShow () {
  },
  methods: {
    getTabBarId (res) {
      this.tabBarId = res
      console.log('||||||||||' + this.tabBarId)
    }
  },
  onLoad () {
    console.log('onLoad+++')
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang='scss'>

</style>
