//index.js
//获取应用实例
const app = getApp()

Page({
  inputText: '玩儿',
  onLoad: function() {
    this.setData({
      booktitle: '玩儿'
    });
  },
  onInput: function(event) {
    this.inputText = event.detail.value;
  },
  onSearch: function() {
    wx.request({
      url: 'https://douban.uieee.com/v2/book/search',
      data: {
        q: this.inputText
      },
      header: {
        "Content-Type": "json"
      },
      success: function(res) {
        if(res.data.books) {
          var book = res.data.books[0];
          wx.navigateTo({
            url: '../book/book?title=' + book.title + '&author=' + book.author[0] + '&cover=' + book.image
          });
        }
        else
          wx.showModal({
            title: '操作失败',
            content: '服务器返回数据异常。',
          });
      }
    })
  }
})
