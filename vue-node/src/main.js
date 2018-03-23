// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import VueResource from 'vue-resource'
import { getToken,removeToken } from '@/utils/auth' // getToken from
import './permission' // permission control
import './icons'
import '@/utils/dateutil.js' // getToken from
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = '/';

//配置路由权限
Vue.http.interceptors.push(function(request, next) {
  var token =getToken();
  if(token){
    request.headers.set('Authorization', 'Bearer '+token);
  }
  // continue to next interceptor
  next(function(response) {
    if(response.status ==401 ){
      removeToken();
      this.$router.push({ path: 'login' })
    }
  });
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

