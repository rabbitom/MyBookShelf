// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cover: 'https://img3.doubanio.com/view/subject/l/public/s29707951.jpg',
    // title: '玩儿',
    // author: '于谦'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(options);
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
    return {
      title: this.data.title + ' - ' + this.data.author,
      path: '/pages/book/book?title=' + this.data.title + '&author=' + this.data.author + '&cover=' + this.data.image
    }
  }
})