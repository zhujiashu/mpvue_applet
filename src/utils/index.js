
// var app = getApp()
export function formatTime (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export function formatLocation (longitude, latitude) {
  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

export function API (apiCode, para) {
  const HOST = '' // 主机名称和端口号
  const PATH = '' // API 路径
  const PACT = 'https://' // 协议
  const API_KEY = '' // 身份标识
  const API_SECRET = '' // 密钥
  let apiSign = '' // 签名

  // 参数名称按照A-Z排序, 以=连接参数名称和值, 以&拼接多个参数, 再拼接上&密钥, 最后进行MD5计算
  let newkey = Object.keys(para).sort()
  let newObj = {}
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = para[newkey[i]]
  }
  for (let key in newObj) {
    apiSign += key + '=' + newObj[key] + '&'
  }
  apiSign += `&${API_SECRET}`

  let data = JSON.parse(JSON.stringify(para))
  data.api_code = apiCode
  data.api_key = API_KEY
  data.api_sign = apiSign
  console.log('data')
  console.log(data)
  return new Promise(function (resolve, reject) {
    wx.request({
      url: `${HOST}${PATH}${PACT}${apiCode}`,
      data: { 'data': JSON.stringify(data) },
      success: function (res) {
        console.log(res)
        resolve(res.data)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}
export default {
  formatTime,
  formatLocation,
  API
}
