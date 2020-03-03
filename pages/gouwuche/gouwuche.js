const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ name: 'Viktor&Rolf', id: 1, select: false, price: 1200, InputValue: 1, totle: 1200 }, ],
    selectall: false,
    InputValue: 1,
    total: 0,
    minusStatus: 'disabled'
  },

  BindAdd(e) {
    var that = this
    that.item_total(e, 1)
  },

  BindReaduce(e) {
    var that = this
    that.item_total(e, -1)
  },

  //加减计算价格

  item_total(e, nums) {
    var that = this
    var list = that.data.list
    var n = e.currentTarget.dataset.id - 1
    var num = that.data.list[n].InputValue;
    if (nums < 0) {
      num--
    } else {
      num++
    }
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    if (num > 0) {
      list[n].InputValue = num;
    } else {
      list[n].InputValue == 1;
    }
    list[n].totle = parseInt(list[n].InputValue) * parseInt(list[n].price)


    that.sum();
    that.setData({
      list: list,
      minusStatus: minusStatus
    })
  },

  // 计算总金额
  sum() {
    var that = this
    var list = that.data.list;
    var total = 0;
    for (var i = 0; i < list.length; i++) {
      if (list[i].select) {
        total += list[i].InputValue * list[i].price;
      }
    }
    var newValue = parseInt(total * 100);
    total = newValue / 100.0;
    that.setData({
      list: list,
      total: total
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // console.log(app.globalData.userInfo)
  },

  BindInput(e) {
    var that = this
    var list = that.data.list
    var n = e.currentTarget.dataset.id - 1
    list[n].totle = parseInt(e.detail.value) * parseInt(list[n].price)
    var t = "list[" + n + "].totle"
    var v = "list[" + n + "].InputValue"
    if (e.detail.value == '') {
      that.setData({
        [v]: 1,
        [t]: list[n].price
      })
    }
    that.setData({
      [t]: list[n].totle,
    })
  },

  //全部选择
  BindListall(e) {
    var that = this
    var list = that.data.list
    var total = that.data.total
    let selectAllStatus = that.data.selectall;
    selectAllStatus = !selectAllStatus;
    var totals = 0
    for (var i = 0; i < list.length; i++) {
      list[i].select = selectAllStatus;
    }
    that.setData({
      selectall: selectAllStatus,
      list: list,
      total: totals.toFixed(2)
    })
    that.sum();
  },

  // 选择商品
  BindList(e) {
    console.log(e)
    var that = this
    const index = e.currentTarget.dataset.id - 1;
    let list = that.data.list;
    const select = list[index].select;
    list[index].select = !select;
    that.setData({
      list: list
    });
    that.sum();
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