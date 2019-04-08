let globalData = {}
globalData = {
  userInfo: ''
}
export function getUserInfo (cb) {
  if (globalData.userInfo) {
    typeof cb === 'function' && cb(globalData.userInfo)
  } else {
    wx.login({
      success: function (res) {
        console.log(res)
        wx.getUserInfo({
          success: function (res) {
            globalData.userInfo = res.userInfo
            typeof cb === 'function' && cb(globalData.userInfo)
          },
          fail: function (res) {
            console.log(res)
          }
        })
      }
    })
  }
}
export default {
  getUserInfo
}
