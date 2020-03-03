// pages/story/story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: 'https://img.bj520.com/201809/e498a35787.jpg' },
      { url: 'https://img.bj520.com/201901/b43a047d36.jpg' },
      { url: 'https://img.bj520.com/201901/72ce75cdd2.jpg' },
      { url: 'https://img.bj520.com/201901/a6727c4938.jpg' }, 
      { url: 'https://img.bj520.com/201901/71d0a658df.jpg' },
      { url: 'https://img.bj520.com/201901/2eeb44d6a1.jpg' }
    ],
    shuzu:[
      {
        wtext:"典雅",
        image:"http://imgtuku.heiguang.com//photogallery/2019/03/04/upload_1551703916_v1owj0su1o0nk1bj.jpg!cover"
      },
      {
        wtext: "极简",
        image: "http://imgtuku.heiguang.com/photogallery/2019/03/02/u_1551498769_oHpix5vt.jpg!cover"
      },
      {
        wtext: "浪漫",
        image: "http://imgtuku.heiguang.com/photogallery/2019/02/20/l_u_1550640335_W6nkXtTI.jpg!cover"
      },
      {
        wtext: "华丽",
        image: "http://imgtuku.heiguang.com/photogallery/2019/02/22/u_1550823815_mOChiLhp.jpg!cover"
      },
      {
        wtext: "秀禾",
        image: "http://imgtuku.heiguang.com/photogallery/2019/03/03/u_1551590297_gXfWLyle.jpg!cover"
      },
      {
        wtext: "个性",
        image: "http://imgtuku.heiguang.com/photogallery/2019/02/28/u_1551323440_rNoPTxOn.jpg!cover"
      }
    ]
    // heziarr:[
    //   {

    //   }
    // ]
    
    // getSearchValue:function(){

    // },

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // hzclick: function (event) {
  //   console.log(event)

  //   wx.navigateTo({
  //     url: "/pages/dressstore/dressstore?id=" + event.currentTarget.id
  //   })
  // },


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