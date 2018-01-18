//index.js
import $wuxCountUp from '../../components/countup/countup'
/*全局播放背景音乐*/
const backgroundAudioManager = wx.getBackgroundAudioManager()
backgroundAudioManager.title = '此时此刻'
backgroundAudioManager.epname = '此时此刻'
backgroundAudioManager.singer = '汪峰'
backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    c1:'',
    grids: [{
      id:1,
      name:'现居',
      icon: '../../images/2.png',
      onTap:'localhostTap'
    }, {
      id: 2,
      name: '资料',
      icon:'../../images/5.png',
      url:'../info/info'
      }, {
        id: 3,
        name: '技术',
        icon: '../../images/7.png',
        url:'../resume/resume'
    }, {
      id: 4,
      name: '作品',
      icon: '../../images/3.png'
      }, {
        id: 5,
        name: '分享',
        icon: '../../images/10.png',
        url:'https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=ACCESS_TOKEN'
    }, {
      id: 6,
      name: '关注',
      icon: '../../images/9.png',
      url: '../2048/2048'
      }, {
        id: 7,
        name: '2048',
        icon: '../../images/9.png',
        url: '../2048/2048'
    }, {
      id: 8,
      name: '代练',
      icon: '../../images/9.png',
      url: '../2048/2048'
    },{
        id: 9,
        name: '退出',
        icon: '../../images/9.png'
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (!this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.c1 = new $wuxCountUp(1, 1224, 0, 2, {
      printValue(value) {
        this.setData({
          c1: value,
        })
      }
    })
    this.c1.start()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /*现居地*/
  localhostTap:function(){
    console.log(9)
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: '湖北省武汉市江夏区金融港'
        })
      }
    })
  }
})
