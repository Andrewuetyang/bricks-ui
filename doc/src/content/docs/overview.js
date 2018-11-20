export default`
## 概览

基于vue组件开发模式的UI框架，适用于移动端项目。

包括一下内容：
* **重置默认样式CSS**
* **常用CSS**
* **icon图标**
* **常用vue组件**

使用npm管理，以后的迭代尽可能保持组件向前兼容。保证项目能安全高效升级。

#### 安装
\`\`\`javascript
npm install --save bricks-m-ui
\`\`\`

#### 使用
\`\`\`javascript
import bricksMUI from 'bricks-m-ui'
Vue.use(bricksMUI)
\`\`\`

#### 例子
组件分为 vue组件 和 js组件
\`\`\`html
<!-- vue组件例子 -->
<!-- navbar 导航栏 -->
<bricks-nav-bar title="navbar 导航栏"
             iconClass="icon-return"></bricks-nav-bar>
\`\`\`

\`\`\`javascript
// js组件：全局为vue对象注入了$bricks属性，任意组件内都可以使用this.$bricks.xxx调用
// 例子：toast吐司 
this.$bricks.toast({
  message: '吐司内文,\\n吐司内文内文',
  iconClass: 'icon-success',
})
\`\`\`
---
#### 关于事件绑定

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 .native 修饰符：

\`\`\`html
<my-component @click.native="btnClick">Click Me</my-component>
\`\`\`
从易用性的角度出发，我们对部分组件进行了处理，使它可以监听 **click** 事件：
\`\`\`html
<bricks-button title="按钮" @click="btnClick"></bricks-button>
\`\`\`
  `