var bmapChart = echarts.init(document.getElementById('map-wrap'));
var data = [
    {name: '广州', value: 50},
    {name: '广州 ', value: 100},
    {name: '汕头', value: '塑料玩具'},
    {name: '义乌', value: '木制玩具'},
    {name: '临沂', value: '毛绒玩具'},
    {name: '扬州', value: '毛绒玩具'},
    {name: '永州', value: '童车玩具'},
    {name: '东莞', value: '手机电脑'},
    {name: '广州  ', value: '手机电脑'},
    {name: '深圳', value: '电子配件'},
    {name: '深圳 ', value: '电子元器件'},
    {name: '深圳  ', value: '磁盘类'},
    {name: '广州   ', value: '3C数码'},
    {name: '深圳   ', value: '3C数码'},
    {name: '重庆', value: '3C数码'},
    {name: '芜湖', value: '3C数码'},
    {name: '佛山', value: '小家电'},
    {name: '中山', value: '小家电'},
    {name: '义乌 ', value: '小家电'},
    {name: '深圳    ', value: 'LED灯具'},
    {name: '惠州', value: 'LED灯具'},
    {name: '上海', value: '建材'},
    {name: '海宁', value: '经编'},
    {name: '余杭', value: '服装'},
    {name: '广州    ', value: '服装'},
    {name: '东莞', value: '服装'},
    {name: '义乌  ', value: '箱包'},
    {name: '广州     ', value: '箱包'},
    {name: '温州', value: '鞋靴'},
    {name: '南通', value: '床品'},
    {name: '诸暨', value: '珍珠'},
    {name: '泉州', value: '冲锋衣'},
    {name: '威海', value: '渔具'},
    {name: '烟台', value: '水果'},
    {name: '威海', value: '水产'},
    {name: '遵义', value: '酒水'},
    {name: '贵阳', value: '酒水'},
    {name: '青岛', value: '功能糖'},
    {name: '郑州', value: '特色食品'},
];
var geoCoordMap = {
    '广州':[113.36314806804212, 23.158504719959048],
    '广州 ':[113.22867274115504, 23.107841778532144],
    '汕头':[116.77327348029851, 23.438745853651056],
    '义乌':[120.14559182293516, 29.32978249294669],
    '临沂':[118.37628823938363, 35.14366348846573],
    '扬州':[119.48648595725811, 32.422702769115354],
    '永州':[111.67797053659469, 26.41037688784179],
    '东莞':[113.71169506109054, 23.017233606434807],
    '广州  ':[113.23227645358969, 23.03424470024689],
    '深圳':[114.1200618326692, 22.56892678337491],
    '深圳 ':[114.09718945060378, 22.628752014834543],
    '深圳  ':[114.12487940519676, 22.618516083393086],
    '广州   ':[113.21635861188818, 23.101406893854776],
    '深圳   ':[114.01905182964141, 22.508708411207255],
    '重庆':[106.6378333660835, 29.49000731915636],
    '芜湖':[118.43274694929102, 31.30293844947577],
    '佛山':[113.02310072851247, 22.976734710069415],
    '中山':[113.29221774093806, 22.581301211158888],
    '义乌 ':[120.01534895348031, 29.3429515174084],
    '深圳    ':[113.96504569508376, 22.612110608622704],
    '惠州':[114.4207887538376, 23.028818941285593],
    '上海':[121.51747857688196, 31.214112988750063],
    '海宁':[120.67574490577765, 30.507498392651467],
    '余杭':[120.25772659969101, 30.470407157642573],
    '广州    ':[113.23339517824778, 23.064847640511882],
    '东莞':[113.76615095911694, 22.98996902750791],
    '义乌  ':[120.12710044018112, 29.390230749455302],
    '广州     ':[113.18404038429051, 23.090728273427704],
    '温州':[120.76669606506061, 28.085994146991396],
    '南通':[120.86011823801866, 32.02859138033214],
    '诸暨':[120.16304637272795, 29.620925343415276],
    '泉州':[118.63687447919487, 24.81700561226635],
    '威海':[122.11492639252656, 37.44486843402183],
    '烟台':[121.46765019077093, 37.522860378539036],
    '威海':[122.11679216922899, 37.53280964479585],
    '遵义':[106.98237876878817, 27.736357926295607],
    '贵阳':[106.54815667402258, 26.697468546976502],
    '青岛':[120.41536213777299, 36.056621032761555],
    '郑州':[113.63254047739399, 34.7441858798915],
};
var convertData = function(data) {
    var res = [];
    for(var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if(geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
}
var option = {
    bmap: {
        center: [116.307698, 40.056975], //中心位置坐标
        zoom: 5, //地图缩放比例
        roam: true, //开启用户缩放和拖拽
        mapStyle: { // 百度地图自定义样式
            styleJson: [
                // 陆地
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#073763"
                    }
                },
                // 水系
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#073763",
                        "lightness": -54
                    }
                },
                // 国道与高速
                {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                        "color": "#45818e"
                    }
                },
                // 边界线
                {
                    "featureType": "boundary",
                    "elementType": "all",
                    "stylers": {
                        "color": "#ffffff",
                        "lightness": -62,
                        "visibility": "on"
                    }
                },
                // 行政标注
                {
                    "featureType": "label",
                    "elementType": "labels.text.fill",
                    "stylers": {
                        "color": "#ffffff",
                        "visibility": "on"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "labels.text.stroke",
                    "stylers": {
                        "color": "#444444",
                        "visibility": "on"
                    }
                }
            ]
        }
    },
    tooltip : {
        trigger: 'item'
    },
    series: [{
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'bmap', // 坐标系使用bmap
        data: convertData(data),
        symbolSize: function (val) {
                return val[2] / 10;
            },
            encode: {
                value: 2
            },
            label: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            }
    }],
    visualMap: { // 视觉映射组件
        type: 'continuous',
        min: 0,
        max: 200,
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    }
}

bmapChart.setOption(option);

var bmap = bmapChart.getModel().getComponent('bmap').getBMap(); //百度地图实例

bmap.addControl(new BMap.NavigationControl());//缩放控件
bmap.addControl(new BMap.ScaleControl());//比例尺
