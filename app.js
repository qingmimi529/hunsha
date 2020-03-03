//app.js
App({
    globalData: {
      shopcarData: [{//购物车   
        id: '1',
        name: '折后i啊手动阀就是点击发送的金佛啊是是假的佛山折后i啊手动阀就是点击发送的金佛啊是是假的佛山',
        price: '230',
        num: 1,
        types: '白色/39码',
        check:true    
         }, {
          id: '2',
          name: '啊哈额和福特好热惊讶所以就如同撒打发士大夫',
          price: '332',
          num: 1,
          types: '粉色/38码'    
         }, {
          id: '3',
          name: '啊如何呀还是大范围推广哇额饿啊日hers的说法的事发生的',
          price: '120',
          num: 1,
          types: '白色/41码',
          check: true    
         }, {
          id: '4',
          name: '阿桑的歌也会更好的反对犯得上的事发生的',
          price: '320',
          num: 1,
          types: '黑色/37码',
          check: true    ,
         }, {
          id: '5',
          name: '阿桑的歌微软噶士大夫啊士大夫但是飞洒地方士大夫撒',
          price: '630',
          num: 1,
          types: '白色/39码',
          check: true    
         }]
    },





  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})