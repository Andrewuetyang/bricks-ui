<template>
  <section class="bricks-toggle-wrap"
           :class="{on:value}"
           @click="$emit('input',!value)">
    <div class="bricks-toggle-circle"></div>
  </section>
</template>

<script>
  export default {
    name: 'bricksToggle',
    props: ['value'],
    data() {
      return {}
    }
  }
</script>


<style lang="scss" scoped>
  .bricks-toggle-wrap {
    position: relative;
    width: 36px;
    height: 22px;
    border-radius: 11px;
    background: #CCC;
    overflow: hidden;
    -webkit-transition: background-color .2s;
    -moz-transition: background-color .2s;
    -ms-transition: background-color .2s;
    -o-transition: background-color .2s;
    transition: background-color .2s;
    &.on {
      background: #F16622;
      .bricks-toggle-circle {
        left: 15px;
      }
    }
  }

  .bricks-toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFF;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, .4);
    -webkit-transition: left .2s;
    -moz-transition: left .2s;
    -ms-transition: left .2s;
    -o-transition: left .2s;
    transition: left .2s;
  }
  
  
</style>