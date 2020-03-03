// pages/xiangqing/xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    xiangqin:[
       {
        images:"http://5b0988e595225.cdn.sohucs.com/images/20180803/46bdf1d8c97141d7aaeca5a86c27b6ad.jpeg",
        zi1:"Viktor&Rolf",
        zi2:"加入购物车"
       },
      {
        images: "http://5b0988e595225.cdn.sohucs.com/images/20180803/f981bca5211c481a8a6a78b6f3a69da9.jpeg",
        zi1: "Marchesa",
        zi2: "加入购物车"
      },
      {
        images: "http://5b0988e595225.cdn.sohucs.com/images/20180803/d7771fa4d3164d9a87613abea145ad32.jpeg",
        zi1: "Georgina ",
        zi2: "加入购物车"
      }, 
      {
        images: "http://5b0988e595225.cdn.sohucs.com/images/20180803/14020d2b1faa41aab33a313b88dcaab5.jpeg",
        zi1: "Elie Saab",
        zi2: "加入购物车"
      },
      {
        images: "http://5b0988e595225.cdn.sohucs.com/images/20180803/5b02eb87eb5e4666abd1a8b4fcfe6fd0.jpeg",
        zi1: "Zuhair Murad",
        zi2: "加入购物车"
      },
      {
        images: "http://5b0988e595225.cdn.sohucs.com/images/20180803/79fef47c2337454aa59a1d659a305894.jpeg",
        zi1: "Temperley",
        zi2: "加入购物车"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    //arr是需要提取的数组，数组里的每一项是一个对象，每一个对象对应的是每一个块对应的详情数据
    //options.id指的是从哪个块点进来的，就去arr 数组里边找哪个块对应的详情数据
    var test = this.data.xiangqin[options.id]
    this.setData({
      image: test.images,
      text2: test.zi1,
      text3: test.zi2    
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