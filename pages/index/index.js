// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_images:[
      '../../images/wpj/index_img1.jpg',
      '../../images/wpj/index_img2.jpg',
      '../../images/wpj/index_img3.jpg'
    ],
    btnList:[
      {
        id:'1',
        img:'../../images/wpj/region.png',
        text:'校园导览'
      },
      {
        id: '2',
        img: '../../images/wpj/talk.png',
        text: '畅所欲言'
      },
      {
        id: '3',
        img: '../../images/wpj/table.png',
        text: '课表查询'
      },
      {
        id: '4',
        img: '../../images/wpj/search.png',
        text: '课程查询'
      },
      {
        id: '5',
        img: '../../images/wpj/empty_classroom.png',
        text: '空教室查询'
      }
    ]
  },

  onTapbtn:function(e){
    var id = e.currentTarget.dataset.id;
    switch(id){
      case '1':
        wx.navigateTo({
          url: '../map/map',
        });
        break;
      case '2':
        wx.navigateTo({
          url: '../talk/talk',
        });
        break;
      case '3':
        wx.navigateTo({
          url: '../table/table',
        });
        break;
      case '4':
        wx.navigateTo({
          url: '../CourseEnquiry/CourseEnquiry',
        });
        break;
      case '5':
        wx.navigateTo({
          url: '../EmptyClassRoom/EmptyClassRoom',
        });
        break;
    }
  }
})