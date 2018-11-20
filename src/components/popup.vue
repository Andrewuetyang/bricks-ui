<!--
  Popup 弹出框
  slot: -
  props: position,backgroundColor
-->
<template>
  <transition :name="position">
    <aside class="bricks-popup-aside"
           :class="{'bricks-popup-wrap-l':position==='left' || position==='fixed',
                    'bricks-popup-wrap-r':position==='right',
                    'bricks-popup-wrap-t':position==='top',
                    'bricks-popup-wrap-b':position==='bottom',
                    'bricks-popup-wrap-c':position==='center'}">
      <slot></slot>
    </aside>
  </transition>

</template>

<script>
  export default {
    name: 'Popup',
    props: {
      position: {
        type: String,
        default: 'right'
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .bricks-popup-wrap-l {
    left: 0;
    top: 0;
  }

  .bricks-popup-wrap-r {
    right: 0;
    top: 0;
  }

  .bricks-popup-wrap-t {
    left: 0;
    top: 0;
  }

  .bricks-popup-wrap-b {
    left: 0;
    bottom: 0;
  }

  .bricks-popup-wrap-c{
    width: auto;
    height: auto;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }

  aside {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #FFFFFF;
  }

  .left-enter {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .left-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .left-leave {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .left-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .right-enter {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .right-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .right-leave {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .right-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }

  .bottom-enter {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }

  .bottom-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .bottom-leave {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .bottom-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }

  .top-enter {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  .top-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .top-leave {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .top-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  .fixed-enter {
    background: rgba(0,0,0,0);
  }

  .fixed-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
  }

  .fixed-leave {
  }

  .fixed-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    background: rgba(0,0,0,0);
  }

  .center-enter {
    opacity: 0;
  }

  .center-enter-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    opacity: 1;
  }

  .center-leave {
    opacity: 1;
  }

  .center-leave-to {
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;
    opacity: 0;
  }

</style>
