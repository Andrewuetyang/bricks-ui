export default `
## Popup 弹出框

#### 例子
\`\`\`html
<bricks-button title="右侧弹出" @click="showPopup1=true"></bricks-button>
<bricks-button title="左侧弹出，带半透明背景" @click="showPopup2=true"></bricks-button>
<bricks-button title="底部弹出，带半透明背景" @click="showPopup3=true"></bricks-button>
<bricks-button title="中间弹出，带半透明背景" @click="showPopup4=true"></bricks-button>

<!--右侧弹出-->
<bricks-popup v-show="showPopup1" position="right">
  <bricks-button class="mt-12 ml-8 mr-8" title="关闭弹出框" @click="showPopup1=false"></bricks-button>
</bricks-popup>

<!--左侧弹出，带半透明背景-->
<bricks-popup v-show="showPopup2" class="popup-fixed" position="fixed" @click.native.self="showPopup2=false">
  <bricks-popup v-show="showPopup2" class="popup-left" position="left">
    <bricks-button class="mt-12 ml-8 mr-8" title="关闭弹出框" @click="showPopup2=false"></bricks-button>
  </bricks-popup>
</bricks-popup>

<!--底部弹出，带半透明背景-->
<bricks-popup v-show="showPopup3" class="popup-fixed" position="fixed" @click.native.self="showPopup3=false">
  <bricks-popup v-show="showPopup3" class="popup-bottom" position="bottom">
    <bricks-button class="mt-12 ml-8 mr-8" title="关闭弹出框" @click="showPopup3=false"></bricks-button>
  </bricks-popup>
</bricks-popup>

<!--中间弹出，带半透明背景-->
<bricks-popup v-show="showPopup4" class="popup-fixed" position="fixed" @click.native.self="showPopup4=false">
  <bricks-popup v-show="showPopup4" position="center">
    <div class="box-center">居中盒子</div>
  </bricks-popup>
</bricks-popup>
\`\`\`
##### css
\`\`\`css
.popup-fixed{
  background: rgba(0,0,0,0.5); //修改弹出框背景色，只有position="fixed"背景色是渐变效果。
}
.popup-left {
  width: 70%;
}
.popup-bottom {
  height: 300px;
}
\`\`\`

### slot
Name|描述
:----|:----|:---:
-|弹出框的DOM内容

### props
Name|描述
:----|:----
position|left,right,top,bottom；默认right
`