// component/nav.js
const App = getApp()
Component({
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        pageName: String,
        showNav: {
            type: Boolean,
            value: true
        },
        showHome: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentTab: 0
    },
    lifetimes: {
        attached: function () {
            this.setData({
                navH: App.globalData.statusBarHeight,
                naH: App.globalData.navHeight,
                sysHeight: App.globalData.Height
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        navBack: function () {
            wx.navigateBack({
                delta: 1
            })
        },
        switchNav: function (e) {

            let that = this

            if (that.data.currentTab === e.target.dataset.current) {

                return false

            } else {

                that.setData({

                    currentTab: e.target.dataset.current

                })

            }
            console.log(this.data.currentTab)

        },
        bindChange: function (e) {
            let that = this
            that.setData({
                currentTab: e.detail.current
            })
        }
    }
})
