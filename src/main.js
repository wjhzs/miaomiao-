import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/style/reset.css'
Vue.config.productionTip = false

//使用mint-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//使用axios
import axios from '../src/utils/axios'
Vue.prototype.axios = axios;

//将better-scroll注册成全局组件
import Scroll from './components/Scroller';
Vue.component('Scroll',Scroll)

//将loading效果注册成全局组件
import loading from './components/Loading'
Vue.component('Loading',loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
