// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局样式和动画样式,及其他样式
import './assets/css/reset.css'
import './lib/animate/animate.css'

//jquery
import $ from 'jquery'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

//bootstrap-table
import 'bootstrap-table/dist/bootstrap-table.css'
import 'bootstrap-table/dist/bootstrap-table.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.js'

//echarts图表
import echarts from 'echarts'

//完美滚动条插件
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

//接口地址全局配置
import ajaxConfig from './lib/ajax_config'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//ztree
import './lib/ztree/css/zTreeStyle/zTreeStyle.css'
import './lib/ztree/css/metroStyle/metroStyle.css'
import './lib/ztree/js/jquery.ztree.all.min'

//utils
import Utils from './lib/utils/utils'

//md5
import md5 from 'js-md5'

//vuex
import store from './store'

//金钱格式全局过滤器
//currency，￥/$
//decimals，保留几位小数 例：{{ num | money('￥',2)}}
Vue.filter('money', function(value, currency, decimals) {
    var regNum = /\d/;      //判断是否为非数字类型字符串，如：？
    if(regNum.test(value)){
        const digitsRE = /(\d{3})(?=\d)/g;
        value = parseFloat(value);
        if (!isFinite(value) || (!value && value !== 0)) return '';
        currency = currency != null ? currency : '$';
        decimals = decimals != null ? decimals : 2;
        var stringified = Math.abs(value).toFixed(decimals);
        var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
        var i = _int.length % 3;
        var head = i > 0 ? (_int.slice(0, i) + (_int.length > 3 ? ',' : '')) : '';
        var _float = decimals ? stringified.slice(-1 - decimals) : '';
        var sign = value < 0 ? '-' : '';
        return sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
    }else{
        return currency+value;    //非数字类型字符串返回：如，￥？
    }
});



Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$ajaxConfig = ajaxConfig;
Vue.prototype.$PerfectScrollbar = PerfectScrollbar;
Vue.prototype.$md5 = md5;
Vue.use(ElementUI);
Vue.use(Utils);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
