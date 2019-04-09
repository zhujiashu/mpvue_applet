 <template>
    <div class="tabBar-box">
      <div class="tabBar-nav" v-for='(item, index) in tabberList' :key='index' @click='clickBar(item.id)'>
        <img src="" alt="">
        <div class="text">{{item.text}}</div>
      </div>
  </div >
</template >
<script>
import store from '../vuex/store'
export default {
  data () {
    return {
      current: 'homepage',
      tabberList: [],
      tabberList1: [{
        id: 1,
        text: '项目'
      }, {
        id: 2,
        text: '会议'
      }, {
        id: 3,
        text: '我的'
      }],
      tabberList2: [{
        id: 4,
        text: '机构'
      }, {
        id: 1,
        text: '项目'
      }, {
        id: 3,
        text: '我的'
      }
      ]
    }
  },
  watch: {},
  onLoad () {
    let theStatusId = store.state.theStatusId
    console.log('this.theStatusId' + theStatusId)
    console.log(typeof (theStatusId))
    if (theStatusId === 1) {
      this.tabberList = this.tabberList1
    } else {
      this.tabberList = this.tabberList2
    }
  },
  onShow () {},
  methods: {
    clickBar (id) {
      console.log('当前点击的菜单' + id)
      this.$emit('getTabBarId', id)
    }
  }
}
  </script>
    <style lang="scss" scoped>
      .tabBar-box {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 70px;
      padding: 20px 0;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      .tabBar-nav {
        width: 33%;
        height:100%;
        color: #666;
        text-align:center;
        img{
          width: 50px;
          height: 50px;
          background-color: #eee
        }
        .text{
          line-height: 36px
        }
      }
    }
  </style>