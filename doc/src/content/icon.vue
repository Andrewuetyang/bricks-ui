<template>
  <section class="icon-wrap">
    <h2>ICON 图标</h2>
    <p class="icon-intro">可用于带icon的组件，或者直接用于项目开发。</p>
    <ul class="icon-list">
      <li class="fx fx-v fx-align-center">
        <div class="icon-return"></div>
        <p>icon-return</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-user"></div>
        <p>icon-user</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-arrow"></div>
        <p>icon-arrow</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-clear"></div>
        <p>icon-clear</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-warning"></div>
        <p>icon-warning</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-success"></div>
        <p>icon-success</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-logo"></div>
        <p>icon-logo</p>
        <p>&amp;#xe642;</p>
      </li>
      <li class="fx fx-v fx-align-center">
        <div class="icon-close"></div>
        <p>icon-close</p>
        <p>&amp;#xe64b;</p>
      </li>
    </ul>
    <div class="mark-down" v-html="docCont"></div>
  </section>
</template>

<script>
  import marked from 'marked'
  import docs from './docs.js'
  export default {
    name: 'Icon',
    data() {
      return {}
    },
    computed:{
      docCont(){
        return marked(docs['icon'])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon-wrap {
    font-family: "Microsoft Yahei", Helvetica, arial, sans-serif;
    font-size: 15px;
    line-height: 1.6;
    background-color: white;
    padding: 30px;
    color: #516272;
  }

  .icon-intro {
  line-height: 50px;
  }

  h2 {
    font-size: 26px;
    border-bottom: 1px solid #DDE4E9;
    color: #2B3F52;
  }

  .icon-list {
    margin-top: 20px;
    overflow: hidden;
    li {
      float: left;
      width: 130px;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      line-height:21px;
      color: #9e9e9e;
    }
    div {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
      border: 1px solid #EEE;
      line-height: 80px;
      font-size: 36px;
    }
  }
</style>
