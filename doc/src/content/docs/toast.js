export default `
## Toast 吐司消息

#### 例子
\`\`\`javascript
// 成功消息
this.$bricks.toast({
  message: '成功消息',          // 消息文本
  iconClass: 'icon-success',  // 成功icon
})

// 错误的消息
this.$bricks.toast({
  message: '吐司内文,\\n吐司内文内文', // 多行用\\n间隔
  iconClass: 'icon-warning',      // 失败icon
  timeout: 1000,                  // 显示时间
  callback: function () {         // 消失后的回调
    console.log('callback')
  }
})

// 纯文本消息（仅供调试使用，并不符合设计规范）
this.$bricks.toast('吐司消息')
\`\`\`
### 参数
Name|描述|类型
:----|:----|:----
message|文本内容，多行用\\n间隔|string
iconClass|失败icon|string
timeout|显示时间|number
callback|消失后的回调|function
`