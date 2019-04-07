<template>
  <div @click="clickHandle">

    <div class="userinfo" @click="bindViewTap">
      <div class="abc">
        <div class="aaa">
          123
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped lang=scss>
.userinfo {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .abc {
    width: 100px;
    height: 100px;
    background-color: red;
    .aaa{
      color: #fff;
    }
  }
}
</style>
