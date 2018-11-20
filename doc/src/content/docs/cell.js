export default`
## Cell 列表项

#### 例子
\`\`\`html
<!-- 带icon的列表 -->
<bricks-cell title="带icon的列表">
  <i slot="icon" class="icon-user"></i>
</bricks-cell>

<!-- 内容溢出隐藏 带箭头 -->
<bricks-cell title="带icon和箭头的列表带icon和箭头的列表" is-link>
  <i slot="icon" class="icon-user"></i>
</bricks-cell>

<!-- 监听click事件 自定义右侧内容 -->
<bricks-cell title="带icon和箭头的列表"
          @click="cellClick"
          is-link>
  <i slot="icon" class="icon-user"></i>
  <span slot="content">提示信息</span>
</bricks-cell>

<!-- 带开关 v-model绑定开关的值 -->
<bricks-cell title="带开关的列表"
          v-model="toggle1"
          is-toggle>
  <i slot="icon" class="icon-user"></i>
</bricks-cell>

<!-- 不带icon的列表 溢出隐藏 -->
<bricks-cell title="带箭头的列表带箭头的列表带箭头的列表" is-link></bricks-cell>

<!-- 自定义右侧内容 -->
<bricks-cell title="带箭头的列表" is-link>
  <span slot="content">提示信息</span>
</bricks-cell>

<!-- 带开关的列表 -->
<bricks-cell title="带开关的列表"
          v-model="toggle2"
          is-toggle></bricks-cell>

<!-- 自定义DOM内容 -->
<bricks-cell>
  <i slot="icon" class="icon-user"></i>
  <div slot="title" class="input-wrap fx">
    <input class="fx-1" type="text" placeholder="用户名">
    <i class="icon-clear mr-16"></i>
  </div>
</bricks-cell>
\`\`\`

### slot
Name|描述
:----|:----|:---:
icon|图标
title|左侧的DOM内容
content|右侧的DOM内容

### props
Name|描述
:----|:----
title|左侧文字
is-link|带箭头
is-toggle|带开关
value|开关的值，可用v-model绑定
to|改变前端路由，改变hash值
href|超链接


### event
Name|描述
:----|:----
click|点击事件
`