import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import "./static/js/flexble"
import './static/css/common.scss'
import './static/icon/iconfont.css'
import baseui from './utils/baseui'
Vue.use(baseui)

import {DatePicker,TimePicker} from 'element-ui'
Vue.use(DatePicker)
Vue.use(TimePicker)
// Vue.component('Header', Header)
Vue.component('Item', () => import('./views/home/item.vue'))
new Vue({
  el:'#app',
  router,
  store,
  render(createElement){
    return createElement(App)
  }
})
