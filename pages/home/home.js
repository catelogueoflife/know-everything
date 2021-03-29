const app = getApp()
Page({
    data: {
        clientHeight: 0,
        clientWidth: 0,
        notificationBarHeight: 0,
        titleBarHeight: 0,
        itemData: [
            {
                id: 1,
                class: 'card closed',
                animation: null,
                cardWidth: 0,
                cardHeight: 0,
                imgHeight: 0,
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.ssl.cdn.btime.com%2Ft01a5e9b61403342174.jpg%3Fsize%3D960x600&refer=http%3A%2F%2Fp1.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619426465&t=108b9577b49dd91195407f215ba73165',
                opened: false,
                tag: '哺乳纲的大型猫科动物',
                title: '虎',
                desc: '虎（学名：Panthera tigris ；英文名：Tiger）：是哺乳纲的大型猫科动物；毛色浅黄或棕黄色，满身黑色横纹；头圆、耳短，耳背面黑色，中央有一白斑甚显著；四肢健壮有力；尾粗长，具黑色环纹，尾端黑色。\n' +
                    '老虎是典型的山地林栖动物，由南方的热带雨林、常绿阔叶林，以至北方的落叶阔叶林和针阔叶混交林，都能很好的生活。在中国东北地区，也常出没于山脊、矮林灌丛和岩石较多或砾石塘等山地，以利于捕食。虎常单独活动，只有在繁殖季节雌雄才在一起生活。无固定巢穴，多在山林间游荡寻食。能游泳。由于林区开发、人口激增，过去偏远地区都已发展为村镇，虎亦常到林区居民点附近觅食。虎多黄昏活动，白天多潜伏休息，没有惊动则很少出来。虎的活动范围较大，在北方日寻食活动范围可达数十公里；在南方西双版纳因食物较多则活动距离较短。\n' +
                    '发情交配期一般在11月至翌年2月份，发情期间，虎的叫声特别响亮，能达2千米远。怀孕期105天左右，每产1-5仔，通常2仔，新生虎仔重约1千克，哺乳期5-6个月，雌虎和幼仔在一起生活2-3年，在此期间雌虎不发情交配，故在自然条件下雌虎要每隔2-3年才能繁殖一次。雌虎3年龄时性成熟，雄虎要更晚些。虎的寿命一般20-25年。\n' +
                    '由于人类的猎杀和野外栖息地碎片化，虎成为珍稀濒危物种，被列为《华盛顿公约》CITES 附录Ⅰ级保护动物，《世界自然保护联盟濒危物种红色名录》（IUCN）濒危动物。2016年调查显示，全球野生虎的数量为3890只。'
            },

            {
                id: 2,
                class: 'card closed',
                animation: null,
                cardWidth: 0,
                cardHeight: 0,
                imgHeight: 0,
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.ssl.cdn.btime.com%2Ft01a5e9b61403342174.jpg%3Fsize%3D960x600&refer=http%3A%2F%2Fp1.ssl.cdn.btime.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619426465&t=108b9577b49dd91195407f215ba73165',
                opened: false,
                tag: '哺乳纲的大型猫科动物',
                title: '虎',
                desc: '虎（学名：Panthera tigris ；英文名：Tiger）：是哺乳纲的大型猫科动物；毛色浅黄或棕黄色，满身黑色横纹；头圆、耳短，耳背面黑色，中央有一白斑甚显著；四肢健壮有力；尾粗长，具黑色环纹，尾端黑色。\n' +
                    '老虎是典型的山地林栖动物，由南方的热带雨林、常绿阔叶林，以至北方的落叶阔叶林和针阔叶混交林，都能很好的生活。在中国东北地区，也常出没于山脊、矮林灌丛和岩石较多或砾石塘等山地，以利于捕食。虎常单独活动，只有在繁殖季节雌雄才在一起生活。无固定巢穴，多在山林间游荡寻食。能游泳。由于林区开发、人口激增，过去偏远地区都已发展为村镇，虎亦常到林区居民点附近觅食。虎多黄昏活动，白天多潜伏休息，没有惊动则很少出来。虎的活动范围较大，在北方日寻食活动范围可达数十公里；在南方西双版纳因食物较多则活动距离较短。\n' +
                    '发情交配期一般在11月至翌年2月份，发情期间，虎的叫声特别响亮，能达2千米远。怀孕期105天左右，每产1-5仔，通常2仔，新生虎仔重约1千克，哺乳期5-6个月，雌虎和幼仔在一起生活2-3年，在此期间雌虎不发情交配，故在自然条件下雌虎要每隔2-3年才能繁殖一次。雌虎3年龄时性成熟，雄虎要更晚些。虎的寿命一般20-25年。\n' +
                    '由于人类的猎杀和野外栖息地碎片化，虎成为珍稀濒危物种，被列为《华盛顿公约》CITES 附录Ⅰ级保护动物，《世界自然保护联盟濒危物种红色名录》（IUCN）濒危动物。2016年调查显示，全球野生虎的数量为3890只。'
            }
        ]
    },
    onLoad: function (options) {
        var that = this
        app.wx.getSystemInfo().then(res => {
            var itemData = this.data.itemData
            itemData.forEach(item => {
                item.cardWidth = res.windowWidth - 30
                item.cardHeight = res.windowWidth
                item.imgHeight = res.windowWidth
            })
            that.setData({
                clientHeight: res.windowHeight,
                clientWidth: res.windowWidth,
                notificationBarHeight: res.statusBarHeight,
                titleBarHeight: res.screenWidth * 88 / 750,
                itemData: itemData
            })
        })
    },
    cardOpen(obj) {
        console.log(this.data);
        console.log(obj);
        var curId = obj.currentTarget.dataset.id
        var itemData = this.data.itemData
        var curItem = itemData.find(o => o.id === curId);
        if (curItem.opened) {
            var animation = wx.createAnimation({
                duration: 200,
                timingFunction: "ease",
                delay: 0
            });
            animation.width(this.clientWidth - 30).height(this.clientWidth).step()
            curItem.animation = animation.export()
            curItem.class = 'card closed'
            curItem.cardWidth = this.data.clientWidth - 30
            curItem.cardHeight = this.data.clientWidth
            curItem.opened = false
        } else {
            var query = wx.createSelectorQuery();
            query.select('.main-list').boundingClientRect((rect) => {
                let top = rect.top;
                console.log('当前top：', top);
                var animation = wx.createAnimation({
                    duration: 400,
                    timingFunction: "ease",
                    delay: 0
                });
                console.log('top:',top);
                var transY=(obj.currentTarget.offsetTop ) * -1
                console.log('transY:',transY);
                animation.translateY(top)
                    .scale(this.data.clientWidth*1.0 / curItem.cardWidth)
                    .step()
                curItem.animation = animation.export()
                curItem.class = 'card opened'
                curItem.cardWidth = this.data.clientWidth
                curItem.cardHeight = this.data.clientHeight
                curItem.opened = true
                this.setData({
                    itemData: itemData
                })
            }).exec()
        }
        this.setData({
            itemData: itemData
        })
    },
    onPageScroll(e) {

    }
});
