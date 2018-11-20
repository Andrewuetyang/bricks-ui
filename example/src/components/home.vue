<template>
  <section>
    <bricks-nav-bar title="bricks移动端UI组件"></bricks-nav-bar>
    <section>
      <div class="type-name">标签组件</div>
      <bricks-cell title="Navbar 导航栏"
                is-link
                to="/navbar"></bricks-cell>
      <bricks-cell title="Cell 列表项"
                is-link
                to="/cell"></bricks-cell>
      <bricks-cell title="Button 按钮"
                is-link
                to="/button"></bricks-cell>
      <bricks-cell title="Popup 弹出框"
                is-link
                to="/popup"></bricks-cell>
      <div class="type-name">全局方法组件</div>
      <bricks-cell title="Toast 提示消息"
                is-link
                to="/toast"></bricks-cell>
      <bricks-cell title="Loading 加载动画"
                is-link
                to="/loading"></bricks-cell>
      <bricks-cell title="Message 信息框"
                is-link
                to="/message-box"></bricks-cell>
      <div class="type-name">指令组件</div>
      <bricks-cell title="InfiniteScroll 无限滚动"
                is-link
                to="/infinite-scroll"></bricks-cell>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .type-name {
    background: #F3F4F5;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    // color: #212121;
  }
</style>
