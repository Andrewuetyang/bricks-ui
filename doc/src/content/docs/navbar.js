export default`
## Navbar 导航栏

#### 例子
\`\`\`html
<!-- 带返回按钮 -->
 <bricks-nav-bar title="navbar 导航栏"
              class="mb-16"
              iconClass="icon-return"
              @clickIcon="$router.go(-1)"></bricks-nav-bar>


<bricks-nav-bar title="文字标题">
  <!-- 自定义左右两侧DOM -->
  <div slot="left" class="c-9" @click="$router.go(-1)">返回</div>
  <div slot="right" class="c-9">编辑</div>
</bricks-nav-bar>

<bricks-nav-bar iconClass="icon-close">
  <!-- 自定义标题DOM -->
  <img slot="center" 
       class="dp-b" 
       src="../../assets/img/ic-navbar-logo.png" 
       width="63px">
  <img slot="right" 
       class="dp-b" 
       src="../../assets/img/ic-navbar-event.png" 
       width="24px">
</bricks-nav-bar>
\`\`\`

### slot
Name|描述
:----|:----|:---:
left|自定义左侧DOM
right|自定义右侧DOM
center|自定义中间DOM

### props
Name|描述
:----|:----
title|标题文本
iconClass|设置左侧icon的CSS类名


### event
Name|描述
:----|:----
clickIcon|左侧icon点击事件回调函数
`