import VueRouter from 'vue-router'

//导入路由列表
import routes from './routes'

//创建路由实例
const router = new VueRouter({
  routes
})

//全局路由器钩子，跳转之前
router.beforeEach((to, from, next) => {
  //修改页面标题，通过
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else if (to.query && to.query.doc_title) {
    document.title = to.query.doc_title
  }
  next()//必须调用next
})

//初始化
function install(Vue) {
  //使用VueRouter插件
  Vue.use(VueRouter)
}

export default {
  install,
  router//把router实例传递出去，用于Vue实例化方法的参数
}
