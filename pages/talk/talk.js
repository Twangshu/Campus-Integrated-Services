//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    test: [
      "今年大二了，视觉传达专业，成绩排名十几，担心自己不能保上研，但是考研也太难了吧，有没有学长学姐保研成功的或者小伙伴们到设计保研的相关交流群呀，求推荐",
      "吃了两天早饭，感觉还不错",
      "佩服在肯打鸡和麦当劳看书的人，音乐那么大声，一堆人在聊天，却能在嘈杂环境中捧着一本高数学习",
      "研的话是自学快一点还是报班学习呢？\n大多数学习的还是在图书馆，但是朋友说报班的话有气氛进步比较快，但是专业课的还要自己复习。现在在纠结到底怎么办，在纠结这点事上浪费的时间太多了"
    ],
    read1:[8,15,21,34],
    test2: [
      "有没有想拍抖音的小伙伴，求组队一起，有设备啥都懂，缺人",
      "本周六（11.16）不懂去哪玩？街舞K歌轰趴一起组队吗！\n有喜欢街舞轰趴的小伙伴吗？本周六不懂去哪玩，从朋友那得知有家工作室有轰趴派对活动,想去的一起组队呀",
    ],
    read2:[11,19],
    test3: [
      "出折叠电动自行车，可带上公交车续航30公里左右，有意私聊",
    ],
    read3: [24],
    test4: [
      "希望可以找个可以每天一起吃饭的人",
    ],
    read4: [16],
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
