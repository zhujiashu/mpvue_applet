import utils from '../utils/utils'
import store from '../vuex/index'

export async function request (obj) {
  let token = store.state.wechat.token

  return new Promise((resolve, reject) => {
    // 是否显示loading
    if (obj.dontLoading !== true) {
      wx.showNavigationBarLoading()
      wx.showLoading({
        mask: true,
        title: '处理中'
      })
    }

    wx.request({
      url: utils.API + obj.url,
      data: obj.data,
      header: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + token,
        ...obj.header
      },
      method: obj.method,

      success (res) {
        // 处理返回信息
        handleResult(res)

        // 处理 new token
        handleNewToken(res)

        if (obj.dontLoading !== true && store.state.showing !== true) {
          wx.hideLoading()
          wx.hideNavigationBarLoading()
        }

        store.commit('setShowing', false)

        resolve(res.data.data)
      },

      fail (e) {
        reject(e)
      }

    })
  })
}

// 处理new token
function handleNewToken (res) {
  let newToken = res.header['New-Token']
  if (newToken) {
    store.commit('setToken', newToken)
  }
}

// 统一显示toast
function showToast (message) {
  wx.showToast({
    title: message,
    icon: 'none',
    duration: 2000
  })

  store.commit('setShowing', true)
}
/**
 * 处理code信息
 * @param res
 */
function handleResult (res) {
  let code = res.data.code
  switch (code) {
    case 200:
      break
    case 401 :
      showToast('身份校验信息失败，请刷新页面重试！')
      store.dispatch('getUserToken')
      break

    case 412 :
      showToast('未填写个人信息！')
      wx.navigateTo({url: '../bind/main'})
      break

    case 422 :
      let errors = ''
      for (var key in res.data.errors) {
        res.data.errors[key].forEach((item) => {
          errors += item + ''
        })
      }
      errors = '提交的信息错误，请检查！'
      showToast(errors)
      break

    default:
      let msg = res.data.message ? res.data.message : '未知错误，请重试！'
      showToast(msg)
  }
}
