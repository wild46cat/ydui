// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/www-form-urlencoded';
axios.defaults.baseURL = BASE_URL;
Vue.prototype.$ajax = axios;

Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
  //这里能够跟踪路径的变化
  // console.log(from);
  // console.log(to);
  //如果是登录界面，不进行拦截
  if (to.name == 'Login') {
    next();
  }
  let currentUsername = window.localStorage.getItem("username");
  //判断是否已经登录，如果没有登录，则进行登录
  if (currentUsername == null || currentUsername == '') {
    next({name: 'Login'});
  } else {
    //最后通过钩子继续页面的跳转
    next();
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
