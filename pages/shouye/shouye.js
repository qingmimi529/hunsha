// pages/shouye/shouye.js
var app = getApp()
Page({
  data: {
    zhuanjiNavArr: [],
    movies: [{
        url: 'https://i.loli.net/2019/03/06/5c7f69b8cfd57.jpg'
      },
      {
        url: 'https://i.loli.net/2019/03/06/5c7f69b8ce707.jpg'
      },
      {
        url: 'https://i.loli.net/2019/03/06/5c7f69b8cc808.jpg'
      },
      {
        url: 'https://i.loli.net/2019/03/06/5c7f69b8c2f24.jpg'
      }
    ],
    arr: [{
        text: "专辑",
        image: 'https://i.loli.net/2019/03/06/5c7f8158475db.png',
      },
      {
        text: "旅拍地",
        image: "https://i.loli.net/2019/03/06/5c7f815849032.png"
      },
      {
        text: "明星婚纱",
        image: "https://i.loli.net/2019/03/06/5c7f8120060a1.png"
      },
      {
        text: "手捧花",
        image: "https://i.loli.net/2019/03/06/5c7f815825b93.png"
      },
      {
        text: "蛋糕",
        image: "https://i.loli.net/2019/03/06/5c7f8158241c5.png"
      }
    ],
    arr1: [{
        text: "",
        image: "https://i.loli.net/2019/03/06/5c7f65890181a.jpg"
      },
      {
        text: "",
        image: "https://i.loli.net/2019/03/06/5c7f65890181a.jpg"
      },
      {
        text: "",
        image: "https://i.loli.net/2019/03/06/5c7f65890181a.jpg"
      },
      {
        text: "",
        image: "https://i.loli.net/2019/03/06/5c7f65890181a.jpg"
      }
    ],
  },

  click: function(event) {
    console.log("发生点击了")
    console.log(event.target.id)
    this.setData({
      condition: event.target.id
    })

    var page3CurrentKey = "";
    console.log(event)
    switch (event.target.id) {
      case "1":
        page3CurrentKey = "story";
        break;
      case "2":
        page3CurrentKey = "story";
        break;
      case "3":
        page3CurrentKey = "yongshenghua";
        break;
      default:
        page3CurrentKey = "remen";
        break;
    }
    this.setData({
      page3Key: page3CurrentKey
    })

  },

  tuClick: function(event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/zhuanji/zhuanji?id=" + event.currentTarget.id
    })
  },

  audioMaoPlay: function() {
    var audio = wx.createAudioContext("audioMao")
    audio.play();
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})