// pages/form/form.js

const app = getApp();


Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [

            { name: 'CHN', value: '中国', checked: true },
            { name: 'CHN1', value: '中国1', checked: false },
            { name: 'CHN2', value: '中国2', checked: false },
            { name: 'CHN3', value: '中国3', checked: false },
            { name: 'CHN4', value: '中国4', checked: false },

        ],
        array: ['美国', '中国', '巴西', '日本'],
        objectArray: [
            {
                id: 0,
                name: '美国'
            },
            {
                id: 1,
                name: '中国'
            },
            {
                id: 2,
                name: '巴西'
            },
            {
                id: 13,
                name: '日本'
            }
        ],
        index: 0,
        multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
        objectMultiArray: [
            [
                {
                    id: 0,
                    name: '无脊柱动物'
                },
                {
                    id: 1,
                    name: '脊柱动物'
                }
            ], [
                {
                    id: 0,
                    name: '扁性动物'
                },
                {
                    id: 1,
                    name: '线形动物'
                },
                {
                    id: 2,
                    name: '环节动物'
                },
                {
                    id: 3,
                    name: '软体动物'
                },
                {
                    id: 3,
                    name: '节肢动物'
                }
            ], [
                {
                    id: 0,
                    name: '猪肉绦虫'
                },
                {
                    id: 1,
                    name: '吸血虫'
                }
            ]
        ],
        multiIndex: [0, 0, 0],
        date: '2016-09-01',
        time: '12:01',
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部',
        src:""
    },


    takePhoto() {
        const ctx = wx.createCameraContext()
        ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    },
    bindchange(e) {
        console.log(e)
    },
    checkboxChange(e) {
        const checkeds = e.detail.value;
        const items = this.data.items;
        for (let i = 0; i < items.length; i++) {
            const checked = "items[" + i + "].checked"
            if (checkeds.indexOf(items[i].name) > -1) {
                this.setData({
                    [checked]: true
                })
            } else {
                this.setData({
                    [checked]: false
                })
            }
        }
    },
    bindsubmit(e) {
        console.log(e)
    },
    bindreset(e) {
        const items = this.data.items;
        const aaaa = items.map(item => {
            item.checked = false
            return item;
        });
        this.setData({
            items: aaaa
        })

    },

    bindgetuserinfo(e) {
        console.log(app)
        console.log(e)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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

    }
})