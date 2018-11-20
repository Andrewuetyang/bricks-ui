export default `
## Loading 加载动画

#### 例子
\`\`\`html
<ul v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="40">
  <li v-for="item in list">{{item}}</li>
  <li>加载中...</li>
</ul>
\`\`\`

\`\`\`javascript
data() {
  return {
    list: [], // 列表数据
    loading: false // 是否正在加载数据，用于防止重复请求数据
  }
},
created() {
  // 初始数据
  for (let i = 1; i <= 20; i++) {
    this.list.push(i)
  }
},
methods: {
  // 滚动到列表底部时，调用的方法
  loadMore() {
    this.loading = true
    setTimeout(() => {
      let last = this.list[this.list.length - 1]
      for (let i = 1; i <= 10; i++) {
        this.list.push(last + i)
      }
      this.loading = false
    }, 2000)
  }
}
\`\`\`

### 指令
Name|描述|类型
:----|:----|:----
v-infinite-scroll|滚动到底部时触发的方法|function

### 参数
Name|描述|类型
:----|:----|:----
infinite-scroll-disabled|若为真，则无限滚动不会被触发|bool
infinite-scroll-distance|距离底部一定距离时触发指令方法（像素）|number
`