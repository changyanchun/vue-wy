import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'

import 'lib-flexible/flexible'
import './Validate.js'
import { Button } from 'mint-ui'
import './mock/mockServer'

//注册全局组件

Vue.component(Button.name, Button)  // mt-button

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由器
  router,
  //配置Vuex
  store
})
