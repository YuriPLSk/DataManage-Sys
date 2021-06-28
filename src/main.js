import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/reset.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '../api/axiosConfig';
import '../mock/index';
import './assets/utils/dateFormat';
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.use(ElementUI, Axios);
Vue.prototype.$http = http;
router.beforeEach((to,from,next)=>{
    // console.log(to,from)
    // if (condition) {
        
    // }
    // console.log(to.path);
    // 在进行路由跳转之前 通过该方法进行某些操作  最终一定要调用next方法  否则会导致无法跳转
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
