import Vue from 'vue';
//高德地图
//高德离线地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
 
VueAMap.initAMapApiLoader({
  // 高德key
  key: 'e227b9bafad5010b5ac024f58f529454', // 自己到官网申请，我随便写的
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer','AMap.Geolocation'],
  v: '1.4.15', // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: '1.0.11' // ui版本号，也是需要写
})

