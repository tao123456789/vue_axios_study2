import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios  //全局注册，使用方法：this.$axios
Vue.use(VueAxios,axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
