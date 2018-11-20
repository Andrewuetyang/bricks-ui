import Vue from 'vue'
import App from './App.vue'
import Router from './router'//使用vue-router

Vue.use(Router)

// import bricksUI from '../../dist/lib/bricks-m-ui'
import bricksUI from '../../src'

Vue.use(bricksUI)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router.router
})
