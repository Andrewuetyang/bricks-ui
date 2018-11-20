export default`
## Button 按钮

#### 例子
\`\`\`html
<!-- 普通按钮 -->
<bricks-button title="普通按钮"
            @click="btnClick"></bricks-button>

<!-- 圆角的类名参考 CSS样式 -->
<bricks-button class="brs-2"
            title="圆角按钮"></bricks-button>

<!-- 禁用的按钮 -->
<bricks-button title="禁用的按钮" disabled></bricks-button>

<!-- 自定义DOM按钮 -->
<bricks-button>
  <span slot="content">
    <i class="icon-user"></i>
    自定义DOM内容
  </span>
</bricks-button>

<section class="fx">
  <!-- 可以为按钮设置class和样式 -->
  <bricks-button class="btn1"
              title="立即叫车"
              @click="btnClick"></bricks-button>
              
  <bricks-button class="btn2"
              @click="btnClick">
    <span slot="content"><i class="icon-user"></i>预约</span>
  </bricks-button>
</section>
\`\`\`
##### css
\`\`\`css
.btn1 {
  width: 63%;
}

.btn2 {
  width: 37%;
  background: #FEA000;
  &:active {
    background: #E48F00;
  }
}
\`\`\`


### slot
Name|描述
:----|:----|:---:
content|自定义DOM内容

### props
Name|描述
:----|:----
title|按钮文字
disabled|禁用按钮


### event
Name|描述
:----|:----
click|点击事件
`