//初始化echarts实例mapChart
var mapChart = echarts.init(document.getElementById('map-wrap'))
//数据
var data = [
    {name: '广州', value: '电动玩具'},
    {name: '广州 ', value: '塑料玩具'},
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
    for(var i = 0;i < data.length;i++) {
        var geoCoord = [geoCoordMap[data[i].name][0].toFixed(2), geoCoordMap[data[i].name][1].toFixed(2)];
        if(geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });   
        }
    }
    return res;
}
//mapChart的配置
var option = {
    geo:{
        map:'china',
        roam: true,                  //定义是否可缩放和拖拽
        itemStyle: {                 //定义样式
            normal: {                //普通状态下的样式
                areaColor: '#F8F8FF',
                borderColor: '#111'
            },
            emphasis: {              //高亮状态下的样式
                areaColor: '#F0E68C'
            }
            
        }
    },
    tooltip : {
        trigger: 'item'
    },
    series: [
    {
        name: '玩具类',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(0, 7),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#4169E1'
            }
        },
        zlevel: 1
    },
    {
        name: '电子产品类',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(7, 16),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#808000'
            }
        },
        zlevel: 1
    },
    {
        name: '家居用品',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(16, 22),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#DAA520'
            }
        },
        zlevel: 1
    },
    {
        name: '服饰箱包',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(22, 31),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#FF4500'
            }
        },
        zlevel: 1
    },
    {
        name: '户外用品',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(31, 33),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#2F4F4F'
            }
        },
        zlevel: 1
    },
    {
        name: '食品',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(data).slice(33, 39),
        symbolSize: function (val) {
            return 10;
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#800000'
            }
        },
        zlevel: 1
    }
    ],
    
    //视觉映射组件，是标识某一数据范围内数据及颜色对应关系的控件
    visualMap: {
        type: 'piecewise', //连续型
        pieces: [
            {value: "10", label: '玩具类', color: '#4169E1'},
            {value: "9", label: '电子产品类', color: '#808000'},
            {value: "8", label: '家居用品', color: '#DAA520'},
            {value: "7", label: '服饰箱包', color: '#FF4500'},
            {value: "6", label: '户外用品', color: '#2F4F4F'},
            {value: "5", label: '食品', color: '#800000'},
        ]
    }
};

mapChart.setOption(option);
