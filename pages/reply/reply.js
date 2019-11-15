//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test: [
      "今年大二了，视觉传达专业，成绩排名十几，担心自己不能保上研，但是考研也太难了吧，有没有学长学姐保研成功的或者小伙伴们到设计保研的相关交流群呀，求推荐",
    ],
    read1:[8],
    reply:["11983731欢迎加入","同求"],
    imgSrc:"../../images/timg.jpg",
    // 是否显示面板指示点
    indicatorDots: false
  },


  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
