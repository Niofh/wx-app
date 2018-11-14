module.exports = [
  {
    path: "pages/index/index",
    config: { // page.json 的内容
      navigationBarTitleText: "首页",
      //引入UI组件
      usingComponents: {
        "i-button": "../../static/iview/button/index"
      }
    }
  },
  {
    path: "pages/logs/logs",
    config: {
      navigationBarTitleText: "历史记录",
      //引入UI组件，后面会讲到
      usingComponents: {

      }
    }
  }

  // {
  //   path: "packageA/logs",
  //   subPackage: true,
  //   config: { // 页面配置，即 page.json 的内容
  //     navigationBarTitleText: "查看启动日志"
  //   }
  // }
];
