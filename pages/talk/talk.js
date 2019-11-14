//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test: [
      "火车票优惠卡没充值的同学，下周四9:00-12:00,14:00-17:00，拿学生证到学院办公室充值。",
      "【通知】以下公示两个文件：文件1：《华南理工大学软件学院本科生科技创新及竞赛资助办法（试行）》文件2：《软件学院本科生学风管理补充规定(试行) 》。如有修改意见，请于本周日前向辅导员提出。如无意见，将按规定严格执行。",
      "一、活动时间11月18日（星期一）早上6：30 - 7：30  二、活动地点大学城校区图书馆正门广场  三、参加人员大一至大三全体本科生，大四学生志愿参加",
      "https://www.wjx.top/jq/49394689.aspx 毕业资格审查，还未填写问卷的同学请尽快填写"
    ],
    read1:[8,15,21,34],
    test2: [
      "tip: decode可以解析的有 &nbsp; &lt; &gt; &amp; &apos; &ensp; &emsp;",
      "各个操作系统的空格标准并不一致。",
      "基础库版本低于 2.1.0 时， text 组件内嵌的 text style 设置可能不会生效。"
    ],
    // 是否显示面板指示点
    indicatorDots: false
  },


  //事件处理函数
  bindViewTap: function() {
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
    } else if (this.data.canIUse){
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
  onReplyClick: function () {
    wx.navigateTo({
      url: '../reply/reply' 
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  
})
