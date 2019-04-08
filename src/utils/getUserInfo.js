// let globalData = {
//   userInfo: null
// }
// function getUserInfo (cb) {
//   var that = this
//   if (this.globalData.userInfo) {
//     typeof cb === 'finction' && cb(this.globalData.userInfo)
//   } else {
//     //调登录接口
//     wx.login({
//       success: function (res) {
//         console.log(res)
//         wx.getUserInfo({
//           success: function (res) {
//             //允许授权
//             that.globalData.userInfo = res.userInfo
//             typeof cb === 'function' && cb(that.globalData.userInfo)
//           },
//           fail: function (res) {
//             //拒绝授权
//             console.log(res)
//           }
//         })
//       }
//     })
//   }
// }
// module.exports = {
//   getUserInfo: getUserInfo
// }
