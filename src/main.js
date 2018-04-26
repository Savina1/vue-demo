// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import echarts from 'echarts'
// 引入路由
import VueRouter from 'vue-router'

import routerConfig from './router/index'

// 引入请求交互文件
import axios from 'axios'

// 拖拽插件
import VueDND from 'awe-dnd'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueDND)

Vue.config.productionTip = false
//  Vue.use(Store);
//  配置根路径
axios.defaults.baseURL = '/vuesf/dist'// 配置请求根路径

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// 设置post头部信息
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 其他页面在使用axios的时候直接  this.$http就可以了
Vue.prototype.$http = axios

axios.defaults.withCredentials = true


Vue.prototype.$echarts = echarts 
// 将配置好的路由放入
const router = new VueRouter({
  mode:'history',//不显示路径  /# 
  base: '/vuesf/dist/', 
	scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
	routes:routerConfig//routes 必须写这个
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
