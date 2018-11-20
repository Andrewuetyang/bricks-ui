<!--
  navbar 导航栏
  slot: left,right,center
  props: title,iconClass
  event: clickIcon //点击icon
-->
<template>
  <section class="bricks-navbar-wrap">
    <div class="bricks-navbar-title">
      <slot name="center"></slot>
      <div class="bricks-navbar-text" v-if="title">{{title}}</div>
    </div>
    <div class="bricks-navbar-labels fx fx-justify-between fx-align-center">
      <div>
        <div v-if="iconClass"
             class="bricks-navbar-icon"
             @click="$emit('clickIcon')">
          <i :class="iconClass?iconClass:''"></i>
        </div>
        <slot name="left"></slot>
      </div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NavBar',
    props: ['title', 'iconClass'],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .bricks-navbar-wrap {
    position: relative;
    height: 44px;
    background: #FFF;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .bricks-navbar-labels {
    height: 100%;
  }

  .bricks-navbar-title {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .bricks-navbar-text {
    font-size: 16px;
    color: #000;
  }

  .bricks-navbar-icon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 16px;
    color: #212121;
  }
</style>
