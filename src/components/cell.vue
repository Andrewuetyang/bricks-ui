<!--
  cell 列表项
  props : title 左侧文字
          is-link 带箭头
          is-toggle 带开关
          value 开关的值，可用v-model绑定
          href 超链接
          to 改变前端路由，改变hash值
  slots : title 左侧的内容
          icon 图标
          content 右侧内容
  event : click 点击事件
-->
<template>
  <div class="bricks-cell fx fx-align-center"
       @click="cellClick">
    <div class="bricks-cell-icon fx-n" v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <div class="bricks-cell-right fx-1 fx fx-align-center"
         :class="{'bd-b':!isLast}">
      <div class="bricks-cell-title"
           :class="{'fx-1':!$slots.content,'fx-n':$slots.content}"
           :style="{width:$slots.content?'auto':'0px'}">
        <div :class="{'text-overflow':!$slots.content}" v-if="title">
          {{title}}
        </div>
        <slot name="title"></slot>
      </div>
      <div class="bricks-cell-cont fx-1 text-overflow" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
      <div class="bricks-cell-arrow fx-n" v-if="isLink !== undefined">
        <i class="icon-arrow"></i>
      </div>
      <bricks-toggle v-if="isToggle !== undefined"
                  class="fx-n mr-12"
                  :value="value"
                  @input="toggle"></bricks-toggle>
    </div>


  </div>
</template>

<script>
  import bricksToggle from './toggle.vue'

  export default {
    name: 'Cell',
    props: ['title', 'value', 'isLink', 'isToggle', 'href', 'to'],
    components: {
      bricksToggle
    },
    data() {
      return {
        isLast: false
      }
    },
    mounted() {
      //判断是否是第一个或者最后一个
      let vm = this
      setTimeout(function () {
        let tag = vm.$el
        let siblings = tag.parentNode.childNodes
        let last = siblings[siblings.length - 1]
        vm.isLast = last === tag
      })
    },
    methods: {
      toggle(val) {
        this.$emit('input', val)
      },
      cellClick(event) {
        if (this.to) {
          location.hash = this.to
        } else if (this.href) {
          location.href = this.href
        } else {
          this.$emit('click', event)
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .bricks-cell {
    height: 48px;
    padding: 0 0 0 8px;
    background: #FFF;
  }

  .bricks-cell-icon {
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 16px;
  }

  .bricks-cell-right {
    margin-left: 8px;
    height: 48px;
  }

  .bricks-cell-title {
    margin-right: 8px;
    font-size: 16px;
    color: #212121;
  }

  .bricks-cell-arrow {
    width: 24px;
    height: 24px;
    margin-right: 16px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #212121;
  }

  .bricks-cell-cont {
    width: 0;
    color: #F16622;
    font-size: 14px;
    text-align: right;
  }
</style>