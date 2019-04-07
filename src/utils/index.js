
// var app = getApp();
// function formatTime (date) {
//   var year = date.getFullYear()
//   var month = date.getMonth() + 1
//   var day = date.getDate()

//   var hour = date.getHours()
//   var minute = date.getMinutes()
//   var second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// function formatNumber (n) {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// function formatLocation (longitude, latitude) {
//   longitude = longitude.toFixed(2)
//   latitude = latitude.toFixed(2)

//   return {
//     longitude: longitude.toString().split('.'),
//     latitude: latitude.toString().split('.')
//   }
// }

// function API (api_code, para) {
//   const HOST = 'open.applesay.cn' // 主机名称和端口号
//   const PATH = '/appapi/apicenter/' // API 路径
//   const PACT = 'https://' // 协议
//   const API_KEY = 'ca89e65c77be0d3f0d732cc3134edaf4' // 身份标识
//   const API_SECRET = '32f48148e40fcf5586c269f65e6045b5' // 密钥
//   const SESSION_KEY = wx.getStorageSync('session_key')
//   console.log(" wx.getStorageSync('session_key');" + wx.getStorageSync('session_key'))
//   let api_sign = '' // 签名

//   // 参数名称按照A-Z排序, 以=连接参数名称和值, 以&拼接多个参数, 再拼接上&密钥, 最后进行MD5计算
//   let newkey = Object.keys(para).sort()
//   let newObj = {}
//   for (let i = 0; i < newkey.length; i++) {
//     newObj[newkey[i]] = para[newkey[i]]
//   }
//   for (let key in newObj) {
//     api_sign += key + '=' + newObj[key] + '&'
//   }
//   api_sign += `&${API_SECRET}`

//   let data = JSON.parse(JSON.stringify(para))
//   data.api_code = api_code
//   data.api_key = API_KEY
//   data.api_sign = api_sign
//   console.log('data')
//   console.log(data)
//   return new Promise (function (resolve, reject) {
//     wx.request({
//       url: '',
//       data: { 'data': JSON.stringify(data) },
//       success: function (res) {
//         console.log(res);
//         resolve(res.data)
//       },
//       fail: function (res) {
//         reject(res)
//       }
//     })
//   })
// }
// module.exports = {
//   formatTime: formatTime,
//   formatLocation: formatLocation,
//   API: API
// }
