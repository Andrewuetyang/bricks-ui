//按需加载模块
import Home from '../components/home.vue'
import NavBar from '../components/exp/navbar.vue'
import Cell from '../components/exp/cell.vue'
import Button from '../components/exp/button.vue'
import Toast from '../components/exp/toast.vue'
import Loading from '../components/exp/loading.vue'
import MessageBox from '../components/exp/message-box.vue'
import Popup from '../components/exp/popup.vue'
import InfiniteScroll from '../components/exp/infinite-scroll.vue'

//前端路由
export default [
  {path: '/', component: Home},
  {path: '/navbar', component: NavBar},
  {path: '/cell', component: Cell},
  {path: '/button', component: Button},
  {path: '/toast', component: Toast},
  {path: '/loading', component: Loading},
  {path: '/message-box', component: MessageBox},
  {path: '/popup', component: Popup},
  {path: '/infinite-scroll', component: InfiniteScroll},

  {path: '*', component: Home}
]
