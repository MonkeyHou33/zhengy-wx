// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    array:[
      {img:'./img/pic.png',name:'功能1'},
      {img:'./img/pic1.png',name:'功能2'},
      {img:'./img/pic3.png',name:'功能3'},
      {img:'./img/pic5.png',name:'功能4'},
      {img:'./img/pic4.png',name:'功能5'},
    ],
    arrayList:[
      {img:'./img/one.png',name:'功能A',},
      {img:'./img/list1.png',name:'功能B'},
      {img:'./img/list2.png',name:'功能C'},
      {img:'./img/list3.png',name:'功能D'},
      {img:'./img/list4.png',name:'功能E'},
      {img:'./img/list5.png',name:'功能F'},
      {img:'./img/list6.png',name:'功能G'},
      {img:'./img/pic2.png',name:'功能H'},
      {img:'./img/pic6.png',name:'功能I'},
      {img:'./img/pic7.png',name:'功能J'},
    ],
    popoverList:[
      {img:'./img/one.png',name:'功能1'},
      {img:'./img/list1.png',name:'功能2'},
      {img:'./img/list2.png',name:'功能3'},
      {img:'./img/list3.png',name:'功能4'},
      {img:'./img/list5.png',name:'功能5'},
      {img:'./img/list6.png',name:'功能6'},
      {img:'./img/pic2.png',name:'功能7'},
      {img:'./img/pic6.png',name:'功能8'},
      {img:'./img/pic7.png',name:'功能9'},
      {img:'./img/list4.png',name:'功能10'},
    ],
    showIndex: false,
    height:'',
    arrayName:''
  },
  // 跳转分类页
  selectName(res){
    var name = res.currentTarget.dataset.name;
    this.setData({
      showIndex:true,
      arrayName:name
    })
  },
  //关闭弹窗
  closePopup(){
    this.setData({
      showIndex:false
    })
  },

  onReady() {
    var that = this;
    // 动态获取屏幕高度
    wx.getSystemInfo({
      success: (result) => {
        that.setData({
          height: result.windowHeight
        });
      },
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})
