
Component({
  data: {
    color: "#515151",
    selectedColor: "#DAA520",
    backgroundColor: "#ffffff ",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "工作",
        iconPath: "/img/income.png",
        selectedIconPath: "/img/income-select.png"
      },
      {
        pagePath: "/pages/assistant/assistant",
        text: "助手",
        iconPath: "/img/chart.png",
        selectedIconPath: "/img/chart-select.png"
      },
      {
        pagePath: "/pages/always/always",
        text: "常用",
        bulge:true,
        iconPath: "/img/post.png",
        selectedIconPath: "/img/post-select.png"
      },
      {
        pagePath: "/pages/analysis/analysis",
        text: "分析",
        iconPath: "/img/message.png",
        selectedIconPath: "/img/message-select.png"
      },
      {
        pagePath: "/pages/me/me",
        text: "我",
        iconPath: "/img/home.png",
        selectedIconPath: "/img/home-select.png"
      }
    ],
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})
