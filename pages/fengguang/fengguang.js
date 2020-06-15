// pages/fengguang/fengguang.js
Page({
    data:{},
    onLoad:function(options){
      // 页面初始化 options为页面跳转所带来的参数
      var that = this;
      wx.request({
        url: 'https://www.easy-mock.com/mock/5ee63b57aa1d001289213b81/example/fengguang',
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function(res) {
          console.log(res.data.items);
          that.setData({
            items: res.data.items
          });
        }
      })
    },
    onReady:function(){
      // 页面渲染完成
    },
    onShow:function(){
      // 页面显示
    },
    onHide:function(){
      // 页面隐藏
    },
    onUnload:function(){
      // 页面关闭
    }
  })