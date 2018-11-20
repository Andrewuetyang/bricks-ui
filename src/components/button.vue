<!--
  button 按钮

  props : title 按钮标题
          disabled 禁用
  slots : content
  event : click 点击
-->
<template>
  <section class="bricks-button-wrap fx fx-justify-center fx-align-center"
       :class="{disabled:disabled || disabled===''}"
       @click.stop="btnClick">
    <slot name="content"></slot>
    <div v-if="!$slots.content">{{title}}</div>
  </section>
</template>

<script>
  export default {
    name: 'bricksButton',
    props: ['title', 'disabled'],
    data() {
      return {}
    },
    methods: {
      btnClick(event) {
        if (!(this.disabled || this.disabled==='')) {
          this.$emit('click', event)
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  section {
    height: 56px;
    background: #F16622;
    color: #FFF;
    font-size: 18px;
    -webkit-user-select: none;
    user-select: none;
    &:active {
      background: #D85B1E;
    }
    &.disabled {
      background: #FCE0D2;
      &:active {
        background: #FCE0D2;
      }
    }
  }
</style>