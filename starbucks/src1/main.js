
import Vue from 'vue'
import App from './App'
import router from './router'
import {DatePicker,TimePicker} from 'element-ui'
Vue.config.productionTip = false
Vue.use(DatePicker)
Vue.use(TimePicker)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
