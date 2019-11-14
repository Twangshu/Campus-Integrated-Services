const app = getApp()

Page({
  data: {
    logo: "/style/icon/info.png"
  },
  onShareAppMessage: function () {
    return {
      title: '华工课表',
      desc: '「华工课表」提供华工在校生班级课表及教师课表',
      path: '/pages/index/index'
    }
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '关于课表'
    });
  }
})
