export default `
## Loading 加载动画
Loading内部有一个计数器，每次调用showLoading，计数器+1，每次由timeout超时或者hideLoading，计数器-1。计数器为0时清除loading。

#### 例子
\`\`\`javascript
// 永久显示loading，有遮罩层，防止用户点击。
this.$bricks.showLoading()

// 隐藏loading
this.$bricks.hideLoading()

// 可选参数
this.$bricks.showLoading({
  cover: 0,        // 默认遮罩全屏 0=无遮罩 1=遮罩全屏 2=不遮住navbar
  timeout: 3000,   // 超时隐藏
  delay:1000       // 延迟出现
})
\`\`\`
### 参数
Name|描述|类型
:----|:----|:----
cover|默认遮罩全屏，0:无遮罩 1:遮罩全屏 2:不遮住navbar|number
timeout|超时隐藏(毫秒)|number
delay|延迟出现(毫秒)|number
`