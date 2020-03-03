// pages/zhuanji/zhuanji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhuanjiarr:[
       {
         zjwenzi:"专辑",
        image1:"https://i.loli.net/2019/03/07/5c80e8d0a4c0c.png",
        imaage2:"https://i.loli.net/2019/03/07/5c80e8d0f3736.png"
       },
      {
        zjwenzi: "旅拍地",
        image1: "https://i.loli.net/2019/03/07/5c80e8d14087c.png",
        imaage2: "https://i.loli.net/2019/03/07/5c80e8d197115.png"
      },
      {
        zjwenzi: "明星婚纱",
        image1: "https://i.loli.net/2019/03/07/5c80e8d1c16c6.png",
        imaage2: "https://i.loli.net/2019/03/07/5c80e8d1c255e.png"
      },
      {
        zjwenzi: "手捧花",
        image1: "https://i.loli.net/2019/03/07/5c80e8d3aebc9.png",
        imaage2: "https://i.loli.net/2019/03/07/5c80e8d3b43c0.png"
      },
      {
        zjwenzi: "蛋糕",
        image1: "https://i.loli.net/2019/03/07/5c80e8d3dd13e.png",
        imaage2: "https://i.loli.net/2019/03/07/5c80e8d43f6e2.png"
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
    var shig = this.data.zhuanjiarr[options.id]
    console.log(this.data.zhuanjiarr[options.id])
    this.setData({
      zhji: shig.zjwenzi,
      images: shig.image1,
      images1: shig.imaage2
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
  onUnload: function (options) {



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