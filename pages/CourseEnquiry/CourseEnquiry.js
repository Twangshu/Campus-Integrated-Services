// pages/CourseEnquiry/CourseEnquiry.js
var that
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    courseNature: "",
    courseNatureList: ["必修课", "通选课"],
    credit: "",
    creditList: ["1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0", "4.5", "5.0", "5.5", "6.0", "6.5", "7.0"],
    institute: "",
    instituteList: ["软件学院", "计算机学院", "电气学院", "环境学院", "新闻媒体学院"],
    classKind: "",
    classKindList: ["学科基础课", "全校性通选课程", "公共课基础课", "实践课", "专业领域课"],
    courseBelong:"",
    courseBelongList: ["人文科学核心", "人文科学", "社会科学核心", "社会科学", "科学技术核心", "科学技术"],
    teacher: "",
    teacherList: ["刘孜文", "金龙存", "林连南", "吴秋霞", "刘桂喜"],
    courseList: [
      {
        course_id: "110011",
        courseName: "计算机网络",
        courseNature: "必修课",
        credit: "3.0",
        institute: "软件学院",
        classKind: "专业领域课",
        courseBelong: "无",
        teacher: "刘孜文",
        brief: "这是计算机网络课"
      },
      {
        course_id: "110012",
        courseName: "C++高级程序设计语言",
        courseNature: "必修课",
        credit: "3.0",
        institute: "软件学院",
        classKind: "专业领域课",
        courseBelong: "无",
        teacher: "金龙存",
        brief: "这是C++高级程序设计语言"
      }, 
      {
        course_id: "110013",
        courseName: "UML和模式应用",
        courseNature: "必修课",
        credit: "3.0",
        institute: "软件学院",
        classKind: "专业领域课",
        courseBelong: "无",
        teacher: "林连南",
        brief: "这是UML和模式应用"
      }]
  },


  pickerChange: function (e) {
    switch (e.currentTarget.id) {
      case 'courseNature':
        that.data.courseNature = e.detail.value
        that.setData({
          courseNature: that.data.courseNature
        })
        break;

      case 'credit':
        that.data.credit = e.detail.value
        that.setData({
          credit: that.data.credit
        })
        break;

      case 'institute':
        that.data.institute = e.detail.value
        that.setData({
          institute: that.data.institute
        })
        break;

      case 'classKind':
        that.data.classKind = e.detail.value
        that.setData({
          classKind: that.data.classKind
        })
        break;

      case 'courseBelong':
        that.data.courseBelong = e.detail.value
        that.setData({
          courseBelong: that.data.courseBelong
        })
        break;

      case 'teacher':
        that.data.teacher = e.detail.value
        that.setData({
          teacher: that.data.teacher
        })
        break;
    }
  },


  SelectCourse: function (e) {
    //查询课程


    this.setData({
      select: 1
    })
  },

  GoBack: function (e) {
    this.setData({
      select: 0
    })
  },

  testnavi:function(e){
    wx.navigateTo({
      url: '../EmptyClassRoom/EmptyClassRoom',
    })
  },

  showCourse:function(e){
    console.log(e)
    var course_id = e.currentTarget.dataset.course_id
    console.log(e.currentTarget.dataset.course_id)
    wx.navigateTo({
      url: '../Course/Course?course_id=' + course_id,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
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