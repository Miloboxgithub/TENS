
Page({
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://picsum.photos/700/402'
    }, {
      id: 1,
      type: 'image',
      url: 'https://picsum.photos/700/301',
    }, {
      id: 2,
      type: 'image',
      url: 'https://picsum.photos/700/300'
    }, {
      id: 3,
      type: 'image',
      url: 'https://picsum.photos/700/302'
    }, {
      id: 4,
      type: 'image',
      url: 'https://picsum.photos/700/303'
    }, {
      id: 5,
      type: 'image',
      url: 'https://picsum.photos/700/304'
    }, {
      id: 6,
      type: 'image',
      url: 'https://picsum.photos/700/305'
    }],
    },

  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {

  },
  onShow(){

  }
})
