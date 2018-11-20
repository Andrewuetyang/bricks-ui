export default`
## CSS 样式
#### 屏幕适配
\`\`\`css
/*适用于宽：375px设计稿，1px = 0.01rem*/
@media screen and (max-width: 320px) {html{font-size:85.33px;}}
@media screen and (min-width: 320px) {html{font-size:85.33px;}}
@media screen and (min-width: 360px) {html{font-size:96px;}}
@media screen and (min-width: 375px) {html{font-size:100px;}}
@media screen and (min-width: 400px) {html{font-size:106.67px;}}
@media screen and (min-width: 414px) {html{font-size:110.4px;}}
@media screen and (min-width: 440px) {html{font-size:117.33px;}}
@media screen and (min-width: 480px) {html{font-size:128px;}}
@media screen and (min-width: 520px) {html{font-size:138.67px;}}
@media screen and (min-width: 560px) {html{font-size:149.33px;}}
@media screen and (min-width: 600px) {html{font-size:160px;}}
@media screen and (min-width: 640px) {html{font-size:170.67px;}}
@media screen and (min-width: 680px) {html{font-size:181.33px;}}
@media screen and (min-width: 720px) {html{font-size:192px;}}
@media screen and (min-width: 760px) {html{font-size:202.67px;}}
@media screen and (min-width: 800px) {html{font-size:213.33px;}}
@media screen and (min-width: 960px) {html{font-size:256px;}}
\`\`\`

#### 重置默认样式
\`\`\`css
html, body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6,
 pre, form, fieldset, input, textarea, p, th, td, img, area, param {
  margin: 0;
  padding: 0;
}

ul, ol {
  list-style: none;
}

/* 用于icon或者小图 */
i, b {
  font-style: normal;
}

img {
  border: none;
}

input, button, select, option, textarea {
  border: none;
  outline: none;
}

input, button {
  font-size: 14px;
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #9E9E9E;
}

a {
  text-decoration: none;
  color: #757575;
}

/* 去掉iPhone、iPad的默认按钮样式 */
input[type="button"], input[type="submit"], input[type="reset"] {
  -webkit-appearance: none;
}

textarea {
  -webkit-appearance: none;
}

.button {
  border-radius: 0;
}

html {
  min-height: 100%;
  background: #FFFFFF;
}

body {
  font-family: "Tahoma", "Hiragino Sans GB", "Source Han Sans CN", arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #757575;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent; //关闭ios链接半透明背景色
}
\`\`\`


#### 常用样式
\`\`\`css
.dp-b {display: block;}
.dp-i {display: inline;}

.pos-r {position: relative;}
.pos-a {position: absolute;}
.pos-f {position: fixed;}

.f-l {float: left;}
.f-r {float: right;}

.of-h{overflow: hidden;}
.of-a{overflow: auto;}

/*文字单行溢出省略号*/
.text-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mt-4 {margin-top: 4px;}
.mt-8 {margin-top: 8px;}
.mt-12 {margin-top: 12px;}
.mt-16 {margin-top: 16px;}
.mt-24 {margin-top: 24px;}

.mb-4 {margin-bottom: 4px;}
.mb-8 {margin-bottom: 8px;}
.mb-12 {margin-bottom: 12px;}
.mb-16 {margin-bottom: 16px;}
.mb-24 {margin-bottom: 24px;}

.ml-4 {margin-left: 4px;}
.ml-8 {margin-left: 8px;}
.ml-12 {margin-left: 12px;}
.ml-16 {margin-left: 16px;}
.ml-24 {margin-left: 24px;}

.mr-4 {margin-right: 4px;}
.mr-8 {margin-right: 8px;}
.mr-12 {margin-right: 12px;}
.mr-16 {margin-right: 16px;}
.mr-24 {margin-right: 24px;}

.pt-4 {padding-top: 4px;}
.pt-8 {padding-top: 8px;}
.pt-12 {padding-top: 12px;}
.pt-16 {padding-top: 16px;}
.pt-24 {padding-top: 24px;}

.pb-4 {padding-bottom: 4px;}
.pb-8 {padding-bottom: 8px;}
.pb-12 {padding-bottom: 12px;}
.pb-16 {padding-bottom: 16px;}
.pb-24 {padding-bottom: 24px;}

.pl-4 {padding-left: 4px;}
.pl-8 {padding-left: 8px;}
.pl-12 {padding-left: 12px;}
.pl-16 {padding-left: 16px;}
.pl-24 {padding-left: 24px;}

.pr-4 {padding-right: 4px;}
.pr-8 {padding-right: 8px;}
.pr-12 {padding-right: 12px;}
.pr-16 {padding-right: 16px;}
.pr-24 {padding-right: 24px;}

/* 圆角 */
.brs-2{border-radius: 2px;}
.brs-3{border-radius: 3px;}
.brs-4{border-radius: 4px;}
.brs-5{border-radius: 5px;}

/* 文字尺寸 */
.f-12 {font-size: 12px !important;}
.f-13 {font-size: 13px !important;}
.f-14 {font-size: 14px !important;}
.f-15 {font-size: 15px !important;}
.f-16 {font-size: 16px !important;}
.f-18 {font-size: 18px !important;}
.f-20 {font-size: 20px !important;}
.f-24 {font-size: 24px !important;}
.f-26 {font-size: 26px !important;}
.f-28 {font-size: 28px !important;}
.f-30 {font-size: 30px !important;}
.f-32 {font-size: 32px !important;}

/* 对齐 */
.ta-l {text-align: left !important;}
.ta-r {text-align: right !important;}
.ta-c {text-align: center !important;}
.va-t {vertical-align: top !important;}
.va-m {vertical-align: middle !important;}
.va-b {vertical-align: bottom !important;}

/* 文字颜色 */
.c-2 {color: #212121 !important;}
.c-7 {color: #757575 !important;}
.c-9 {color: #9E9E9E !important;}
.c-a {color: #ABABAB !important;}
.c-b {color: #BBB !important;}
.c-f {color: #FFF !important;}
.c-orange {color: #F16622 !important;}

/* flex布局 */
.fx {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.fx-v {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column;
}

.fx-1 {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
}

.fx-1-0 {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 auto;
  flex: 1 0 auto;
}

.fx-n {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  flex: 0 0 auto;
}

.fx-align-start {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}

.fx-align-center {
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.fx-align-end {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}

.fx-justify-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.fx-justify-end {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
}

.fx-justify-between {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

/* 细线边框 */
.bd-t {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: -webkit-linear-gradient(top, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-image: linear-gradient(180deg, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
  }
}

.bd-b {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-image: -webkit-linear-gradient(bottom, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-image: linear-gradient(0deg, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: bottom left;
  }
}

.bd-l {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-image: -webkit-linear-gradient(left, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-image: linear-gradient(90deg, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-size: 1px 100%;
    background-repeat: no-repeat;
    background-position: top left;
  }
}

.bd-r {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-image: -webkit-linear-gradient(left, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-image: linear-gradient(270deg, #E0E0E0, #E0E0E0 50%, transparent 50%);
    background-size: 1px 100%;
    background-repeat: no-repeat;
    background-position: top right;
  }
}
\`\`\`
`