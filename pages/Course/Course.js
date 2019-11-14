// pages/Course/Course.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_id:"",
    course: { 
      course_id: "1100",
      courseName: "计算机网络", 
      courseNature: "必修课", 
      credit: "3.0", 
      institute: "软件学院", 
      classKind: "专业领域课", 
      courseBelong: "无", 
      teacher: "刘孜文",
      brief: "这是计算机网络课"
    }
      // week: [1, 16], 
      // classRoom: ["A1101","A1101"], 
      // day: ["星期一","星期三"],
      // time: [[1,2],[5,6]],
  },

  GoBack: function (e) {
    wx.navigateBack({
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    console.log(options)
    console.log(options.course_id)
    that.course_id = options.course_id
    that.setData({
      course_id: that.course_id
    })
    console.log("this.course_id" + this.course_id)
    //查询课程


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


})