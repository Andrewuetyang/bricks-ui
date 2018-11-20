//按需加载模块
import Icon from '../content/icon.vue'
import Content from '../content/content.vue'

//前端路由
export default [
  {path: '/icon', component: Icon},
  {path: '*', component: Content}
]
