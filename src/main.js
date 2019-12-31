import Vue from 'vue'
import App from './App.vue'
import './assets/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import echarts from 'echarts' //引入echarts
import axios from "axios";
import Print from 'vue-print-nb'
Vue.use(ElementUI);
Vue.use(Print);
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts //引入组件
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
