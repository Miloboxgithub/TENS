Page({
  data: {

  },
  onLoad() {

  },
  onShow(){

  },
  nav(){

  },
  logins(){
    wx.showToast({
      title: '登录成功',
    },1000)
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/index/index',
      })
    },1000)
  },
  getPhoneNumber (e) {
    wx.showToast({
      title: '登录成功',
    },1000)
    setTimeout(()=>{
      wx.switchTab({
        url: '/pages/index/index',
      })
    },1000)
   
    const { errMsg, encryptedData, iv } = e.detail;
console.log(errMsg)
    if (errMsg === 'getPhoneNumber:ok') {
      // 获取成功，处理 encryptedData 和 iv
      //this.handlePhoneNumber(encryptedData, iv);
      console.log(1111)
      
    } else {
      // 获取失败，处理错误
      // wx.showToast({
      //   title: '获取手机号码失败',
      //   icon: 'none'
      // });
    }


  },
  handlePhoneNumber(encryptedData, iv){
    console.log(encryptedData, iv)
    wx.request({
      url: `${apiUrl}/wx/login`, // 拼接完整的 URL
      method: 'POST',
      data:{
        js_code:wx.getStorageSync('code')
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode === 200) {
          console.log(res,'login')
        } else {
          console.error('请求失败:', res);
        }
      },
      fail: (err) => {
        console.error('请求失败:', err);
      },
    });
  },
})
