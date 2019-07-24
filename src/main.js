import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'

/* 懒加载 */
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'


import 'lib-flexible/flexible'
import './Validate.js'
import { Button, InfiniteScroll } from 'mint-ui'
import './mock/mockServer'



//注册全局组件

Vue.component(Button.name, Button)  // mt-button

Vue.use(VueLazyload, { // 内部自定义了一个全局指令: lazy
  loading
})
 
Vue.use(InfiniteScroll); //注册全局组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由器
  router,
  //配置Vuex
  store
})
