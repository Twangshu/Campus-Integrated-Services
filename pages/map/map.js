// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        iconPath: "../../images/wpj/library.png",
        id: 0,
        latitude: 23.046376,
        longitude: 113.405455,
        width:80,
        height:80,
        label: {
          content: '图书馆',
          textAlign: 'center',
          fontSize:14,
          bgColor:'#FFFFFF',
          padding:2
        },
        anchor:{
          x:.5,
          y:.8,
        },
      },
      {
        iconPath: "../../images/wpj/classroom.png",
        id: 1,
        latitude: 23.048154,
        longitude: 113.405621,
        width: 100,
        height: 100,
        label: {
          content: '教学楼',
          textAlign: 'center',
          fontSize: 14,
          bgColor: '#FFFFFF',
          padding: 2
        },
        anchor: {
          x: .5,
          y: .8,
        },
      }
    ]
  },

  handlerGohomeClick:function(e) {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  },

  handlerGobackClick: function (e){
    wx.navigateBack({
      delta: 1
    });
  },

  onTapMarkers:function(e){
    wx.navigateTo({
      url:'../LocationInfo/LocationInfo'
    })
  }
})