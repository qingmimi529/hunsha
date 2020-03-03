// pages/m-hua-com/m-hua-com .js
Page({
  /**
   * 页面的初始数据
   */
  data: {

    shangpinarr:[
      {
        spimage:"http://5b0988e595225.cdn.sohucs.com/images/20180803/46bdf1d8c97141d7aaeca5a86c27b6ad.jpeg",
        spwenzi:"Viktor&Rolf",
        spjiage:"¥1200"

      },
      {
        spimage: "http://5b0988e595225.cdn.sohucs.com/images/20180803/f981bca5211c481a8a6a78b6f3a69da9.jpeg",
        spwenzi: "Marchesa",
        spjiage: "¥900"

      },
      {
        spimage: "http://5b0988e595225.cdn.sohucs.com/images/20180803/d7771fa4d3164d9a87613abea145ad32.jpeg",
        spwenzi: "Georgina",
        spjiage: "¥800"

      },
      {
        spimage: "http://5b0988e595225.cdn.sohucs.com/images/20180803/14020d2b1faa41aab33a313b88dcaab5.jpeg",
        spwenzi: "Elie Saab",
        spjiage: "¥200"

      }, 
      {
        spimage: "http://5b0988e595225.cdn.sohucs.com/images/20180803/5b02eb87eb5e4666abd1a8b4fcfe6fd0.jpeg",
        spwenzi: "Zuhair Murad",
        spjiage: "¥1000"

      },
      {
        spimage: "http://5b0988e595225.cdn.sohucs.com/images/20180803/79fef47c2337454aa59a1d659a305894.jpeg",
        spwenzi: "Temperley",
        spjiage: "¥700"

      }
    ]



  //    controls: [{
  //     id: 1,
  //     iconPath: '/images/location.png',
  //     position: {
  //       left: myApp.globalData.windowWidth / 2 - 20,
  //       top: (myApp.globalData.windowHeight - 40) / 2 - 40,
  //       width: 40,
  //       height: 40
  //     },
  //     clickable: false
  //   },
  

  // 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  spclick:function(event){
    console.log(event)
   
    wx.navigateTo({
      url: "/pages/xiangqing/xiangqing?id=" + event.currentTarget.id
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})