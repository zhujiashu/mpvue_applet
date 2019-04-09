 <template>
  <div class="tabBar-wrap">
    <div class="tabBar-box">
    </div >
  </div >
</template >
<script>
export default {
  data () {
    return {}
  },
  props: {},
  created () {},
  methods: {}
}
  </script>
    <style lang="scss" scoped>
      .tabBar-box {
        position: fixed;
      bottom: 0;
      width: 100%;
      height: 80px;
      padding: 20px 0;
      border-top: 1px solid #eee;
      background-color: #f8f8f8;
    }
  
    .tabBar-nav {
        width: 100%;
      display: flex;
  
      .item {
        flex: 1;
      text-align: center;
    }
      .item-text {
        color: #666;
      font-size: 28px;
      transition: .24s linear;
    }
      .item-text-active {
        color: #27a79a;
    }
  
      .item-images {
        width: 48px;
      height: 48px;
      margin: 0 auto;
      text-align: center;
      transition: .24s linear;
  
        & img {
        display: inline;
      width: 100%;
      height: 100%;
    }
  }
  }
  
    .submit-box-btn {
        position: relative;
      z-index: 999;
      width: 85%;
      height: 90px;
      line-height: 90px;
      border-radius: 10px;
      color: #404040;
      font-size: 36px;
      border: none;
      background-color: #eee;
      text-align: center;
      border: 1px solid #eee;
    }
  
    .submit-box-btn-active {
        color: #fff;
      border: none;
      border: 1px solid #ff6c00;
      background-color: #ff6c00;
    }
  
    button {
        border: none;
      outline: none;
    }
  </style>