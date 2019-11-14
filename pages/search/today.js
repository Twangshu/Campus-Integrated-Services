const app = getApp()
var todayInfo = require('../../untils/todayInfo.js')
Page({
  data: {
    logo: "/style/icon/user.png",
    listData: '',
    tabs: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    activeIndex: 0
  },
  onShareAppMessage: function () {
    return {
      title: this.options.name + ' 当日课表',
      path: '/pages/search/today?action=' + this.options.action + '&dept=' + this.options.dept + '&name=' + this.options.name
    }
  },
  todayInfo: function (start) {
    return todayInfo.todayInfo(start)
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  onLoad: function (options) {
    var that = this;
    var td = this.todayInfo('2019/8/25');
    if (td.week > 18) {
      td.week = 18, td.day = 0
    } else {
      this.setData({ td: td, activeIndex: td.day });
    }
    wx.setNavigationBarTitle({
      title: '第' + td.week + '周 ' + options.name +'课表'
    });
    wx.request({
      url: 'https://wechat.sangsir.com/timetable/api.php',
      data: {
        action: options.action,
        dept: options.dept,
        name: options.name
      },
      success: function (res) {
        if (res.data.status == 1) {
          wx.showModal({
            content: '暂未查询到当前课表信息',
            showCancel: false,
            success: function (res) {
              wx.navigateBack()
            }
          })
        } else {
          that.setData({
            listData: res.data.data
          })
        }
      }
    })
  }
})
