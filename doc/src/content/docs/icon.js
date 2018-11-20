export default `
#### CSS样式
\`\`\`css
@font-face {
  font-family: 'bricks-icon';  /* project id 510941 */
  src: url('//at.alicdn.com/t/font_510941_okc1scrma8knjyvi.eot');
  src: url('//at.alicdn.com/t/font_510941_okc1scrma8knjyvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_510941_okc1scrma8knjyvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_510941_okc1scrma8knjyvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_510941_okc1scrma8knjyvi.svg#bricks-icon') format('svg');
}

.bricks-icon{
  font-family: 'bricks-icon';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-return{
  &:after{
    content: '\\e642';
    font-family: 'bricks-icon';
  }
}

.icon-user{
  &:after{
    content: '\\e632';
    font-family: 'bricks-icon';
  }
}

.icon-arrow{
  &:after{
    content: '\\e644';
    font-family: 'bricks-icon';
  }
}

.icon-clear{
  &:after{
    content: '\\e646';
    font-family: 'bricks-icon';
  }
}

.icon-warning{
  &:after{
    content: '\\e647';
    font-family: 'bricks-icon';
  }
}

.icon-success{
  &:after{
    content: '\\e64a';
    font-family: 'bricks-icon';
  }
}

.icon-logo{
  &:after{
    content: '\\e613';
    font-family: 'bricks-icon';
  }
}

.icon-close{
  &:after{
    content: '\\e64b';
    font-family: 'bricks-icon';
  }
}
\`\`\`
`