Page({
    data: {
        markers: [
            {
                // iconPath: "/image/close_sm.png",
                id: 0,
                title: "标注点名",
                width: 100,
                height: 100,
                longitude: "113.93041",
                latitude: "22.53332",

            }
        ]
    },
    onReady: function (e) {
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('myMap')

        this.getCenterLocation()
       
    },
    getCenterLocation: function () {
        const _this= this
        this.mapCtx.getCenterLocation({
            success: function (res) {
               
                const latitude = 'latitude';
                const longitude = 'longitude';
                _this.setData({
                    [latitude]: res.latitude,
                    [longitude]: res.longitude,
                })

                console.log(res.longitude)
                console.log(res.latitude)
                
                _this.moveToLocation()
            }
        })
    },
    moveToLocation: function () {
        this.mapCtx.moveToLocation()
    },
    translateMarker: function () {
        this.mapCtx.translateMarker({
            markerId: 0,
            autoRotate: true,
            duration: 1000,
            destination: {
                latitude: 23.10229,
                longitude: 113.3345211,
            },
            animationEnd() {
                console.log('animation end')
            }
        })
    },
    includePoints: function () {
        this.mapCtx.includePoints({
            padding: [10],
            points: [{
                latitude: 23.10229,
                longitude: 113.3345211,
            }, {
                latitude: 23.00229,
                longitude: 113.3345211,
            }]
        })
    }
})