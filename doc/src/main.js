import './assets/public.scss'
import './assets/markdown.scss'
import './assets/github.css'
import '../../src/assets/css/iconfont.scss'
import Vue from 'vue'
import App from './App.vue'
import Router from './router'//使用vue-router

Vue.use(Router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router.router
})