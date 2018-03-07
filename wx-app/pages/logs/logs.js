//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    product:[]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    this.setData( { 
      product:[
        {name:"oufuhua",price:100000},
        { name: "oufuhua", price: 110000 },
        { name: "oufuhua", price: 120000 },
        { name: "oufuhua", price: 130000 },
        ]
    } )
  }
  
})
