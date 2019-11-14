//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      { "xqj": 1, "skjc": 1, "skcd": 3, "kcmc": "算法设计与分析@教A2-407" },
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "软件项目管理@教A1-102" },
      { "xqj": 2, "skjc": 1, "skcd": 2,"kcmc":"软件测试与维护@教A3-303"},
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "算法设计与分析@教A2-203" },
      { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "人工智能@教A1-301" },
      { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "数据挖掘@教A2-301" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "软件项目管理@教A3-301" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "形式与政策@教A4-301" },
      { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "软件测试与维护@教A3-301" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "计算机图形学@教A2-301" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "公益传播@教A2-301" },

      { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "安卓开发@教A1-301" },




     
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
