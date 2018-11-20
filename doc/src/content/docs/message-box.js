export default `
## MessageBox 信息框

#### 例子
\`\`\`javascript
// 1个按钮的信息框
this.$bricks.messageBox({
  title: '内容内容内容内内容内容，内容内容容内容内容内容内容',
  button1: {
    name: '确定',
    click(e) {
      console.log('click btn1', e)
    }
  }
})

// 两个按钮的信息框
this.$bricks.messageBox({
  title: '内容内容内容内内容内容，内容内容容内容内容内容内容',
  button1: {
    name: '确定',
    click(e) {
      console.log('click btn1', e)
    }
  },
  button2: {
    name: '取消',
    click(e) {
      console.log('click btn2', e)
    }
  }
})
\`\`\`
### 参数
Name|描述|类型
:----|:----|:----
title|弹窗文本内容|string
button1|按钮名称和回调函数|object
button2|按钮名称和回调函数|object
`