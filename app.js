// app.js
const callRequire = require("utils/request.js"); //引入接口封装文件
const getSystemInfo = callRequire.promisify(wx.getSystemInfo)
const login = callRequire.promisify(wx.login)
const getSetting = callRequire.promisify(wx.getSetting)
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  wx: {
    getSystemInfo: getSystemInfo,
    login: login,
    getSetting: getSetting
  }
})
