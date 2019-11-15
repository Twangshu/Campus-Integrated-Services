// pages/EmptyClass/EmptyClass.js
var that


Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    place: "",
    placeList: ["南校区", "北校区", "国际校区"],
    roomKind: "",
    roomKindList: ["多媒体教室", "报告厅", "公用资源", "计算机房", "教师休息室"],
    week: "",
    weekList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    day: "",
    dayList: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    time: "",
    timeList: ["第1,2节", "第3,4节", "第5,6节", "第7,8节", "第9,10,11节"],
    emptyClassRoomList: [
      { place: "南校区", roomKind: "计算机房", week: 1, day: "星期一", time: "第1,2节", classRoomID: "A1101" },
      { place: "南校区", roomKind: "计算机房", week: 1, day: "星期一", time: "第1,2节", classRoomID: "A1102" },
      { place: "南校区", roomKind: "计算机房", week: 1, day: "星期一", time: "第1,2节", classRoomID: "A1103" }]
  },

  pickerChange: function (e) {
    switch (e.currentTarget.id) {
      case 'place':
        that.data.place = e.detail.value
        that.setData({
          place: that.data.place
        })
        break;

      case 'roomKind':
        that.data.roomKind = e.detail.value
        that.setData({
          roomKind: that.data.roomKind
        })
        break;

      case 'week':
        that.data.week = e.detail.value
        that.setData({
          week: that.data.week
        })
        break;

      case 'day':
        that.data.day = e.detail.value
        that.setData({
          day: that.data.day
        })
        break;

      case 'time':
        that.data.time = e.detail.value
        that.setData({
          time: that.data.time
        })
        break;
    }
  },

  SelectClass: function (e) {

    //查询空教室

    
    this.setData({
      select: 1
    })
  },

  GoBack: function (e) {
    this.setData({
      select: 0
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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