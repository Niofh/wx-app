Page({
    data: {
        latitude: 0,
        longitude: 0,
        markers:
        [
            {
                iconPath: "/image/close_sm.png",
                id: 0,
                title: "标注点名",
                width: 20,
                height: 20,
                longitude: "113.93041",
                latitude: "22.53332",

            }
        ],
        // 路线
        // polyline: [{
        //     points: [{
        //         longitude: 113.3245211,
        //         latitude: 23.10229
        //     }, {
        //         longitude: 113.324520,
        //         latitude: 23.21229
        //     }],
        //     color: "#000",
        //     width: 2,
        //     dottedLine: true
        // }],
        // controls: [{
        //     id: 1,
        //     iconPath: '/image/close_sm.png',
        //     position: {
        //         left: 50,
        //         top: 300 - 50,
        //         width: 50,
        //         height: 50
        //     },
        //     clickable: true
        // }]
    },
    onLoad() {

        const _this = this
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) {
                console.log(res)
                var latitude = res.latitude
                var longitude = res.longitude
                _this.setData({
                    latitude,
                    longitude
                })
            }
        })

    },
    canvasIdErrorCallback: function (e) {
        console.error(e.detail.errMsg)
    },
    onReady() {
        // 使用 wx.createContext 获取绘图上下文 context
        var context = wx.createCanvasContext('firstCanvas')

        context.setStrokeStyle("#00ff00")
        context.setLineWidth(5)
        context.rect(0, 0, 200, 200)
        context.stroke()
        context.setStrokeStyle("#ff0000")
        context.setLineWidth(2)
        context.moveTo(160, 100)
        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
        context.moveTo(140, 100)
        context.arc(100, 100, 40, 0, Math.PI, false)
        context.moveTo(85, 80)
        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
        context.moveTo(125, 80)
        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
        context.stroke()
        context.draw()
    },

    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {

        const _this = this;

        wx.chooseLocation({
            success(res) {
                console.log(res)
                const latitude = 'markers[0].latitude';
                const longitude = 'markers[0].longitude';
                _this.setData({
                    [latitude]: res.latitude,
                    [longitude]: res.longitude,
                })
            }
        })
    }
})