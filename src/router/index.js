import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login.vue'
import Home from '@/view/home/home.vue'
import Table from '@/components/Table.vue'
import Index from '@/components/index.vue'
import Echarts from '@/components/Echarts.vue'
import Upload from '@/components/Upload.vue'
import DragDrop from '@/components/DragDrop.vue'
import From from '@/components/From.vue'

// Vue.use(Router)

// export default new Router({
//   mode:'history',
//   routes: [
//     {path: '/login', component: Login},
//     {
//       path: '/home',
//       component: Home,
//       children: [
//         {path: '/', component: Home},
//         {path: '/index', component: Index},
//         {path: '/table', component: Table},
//         {path: '/echarts', component: Echarts},
//         {path: '/upload', component: Upload},
//         {path: '/dragdrop', component: DragDrop},
//         {path: '/from', component: From}

//       ]
//     },
//     {path: '/', redirect: 'login'},
//     {path: '*', redirect: 'login'}
//   ]
// })
const routes = [
    {path: '/login', component: Login},
    {
      path: '/home',
      component: Home,
      children: [
        { path: '*', component: Index },
        {path: '/', component: Home},
        {path: '/index', component: Index},
        {path: '/table', component: Table},
        {path: '/echarts', component: Echarts},
        {path: '/upload', component: Upload},
        {path: '/dragdrop', component: DragDrop},
        {path: '/from', component: From}

      ]
    },
    {path: '/', redirect: 'login'},
    {path: '*', redirect: 'login'}
  ]
export default routes;