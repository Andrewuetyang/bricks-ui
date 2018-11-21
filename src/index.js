import './assets/scss/index.scss' //全局样式
// 组件
import Button from './components/button.vue'
// 指令
import InfiniteScroll from './directives/infinite-scroll'
// 全局api
import {
  showLoading,
  hideLoading,
  toast,
  messageBox,
} from './methods'

const components = {
  Button,
}

const directives = {
  InfiniteScroll
}

const install = function (Vue, options) {
  Vue.mixin({
    components,
    directives
  })
  Vue.prototype.$methods = {
    showLoading,
    hideLoading,
    toast,
    messageBox,
  }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
  // 组件
  Button,
  // 指令
  InfiniteScroll,
  // 全局方法
  showLoading,
  hideLoading,
  toast,
  messageBox,
}

export default install