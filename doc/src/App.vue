<template>
  <section class="doc-wrap fx">
    <section class="doc-list-wrap fx-n of-a">
      <div class="list-title">bricks 移动端UI组件库</div>
      <ul class="doc-list">
        <router-link to="/"
                     class="overview"
                     :class="{on:path === '/'}"
                     tag="li">概览
        </router-link>
        <li class="type-name">CSS</li>
        <router-link to="/css"
                     :class="{on:path === '/css'}"
                     tag="li">CSS 样式
        </router-link>
        <router-link to="/icon"
                     :class="{on:path === '/icon'}"
                     tag="li">ICON 图标
        </router-link>
        <li class="type-name">标签组件</li>
        <router-link to="/navbar"
                     :class="{on:path === '/navbar'}"
                     tag="li">Navbar 导航栏
        </router-link>
        <router-link to="/cell"
                     :class="{on:path === '/cell'}"
                     tag="li">Cell 列表项
        </router-link>
        <router-link to="/button"
                     :class="{on:path === '/button'}"
                     tag="li">Button 按钮
        </router-link>
        <router-link to="/popup"
                     :class="{on:path === '/popup'}"
                     tag="li">Popup 弹出框
        </router-link>
        <li class="type-name">全局方法组件</li>
        <router-link to="/toast"
                     :class="{on:path === '/toast'}"
                     tag="li">Toast 吐司
        </router-link>
        <router-link to="/loading"
                     :class="{on:path === '/loading'}"
                     tag="li">Loading 加载动画
        </router-link>
        <router-link to="/message-box"
                     :class="{on:path === '/message-box'}"
                     tag="li">MessageBox 消息框
        </router-link>
        <li class="type-name">指令组件</li>
        <router-link to="/infinite-scroll"
                     :class="{on:path === '/infinite-scroll'}"
                     tag="li">InfiniteScroll 无限滚动
        </router-link>
      </ul>
    </section>
    <section class="doc-content fx-1 of-a" ref="content">
      <router-view></router-view>
    </section>
    <section class="doc-exp-wrap fx-n of-h">
      <div class="phone-wrap fx fx-align-center fx-justify-center">
        <div class="phone-screen">
          <iframe ref="iframe" :src="iframeSrc" frameborder="0"></iframe>
        </div>
      </div>
      <p class="exp-url">手机浏览：{{expUrl}}</p>
    </section>
  </section>
</template>

<script>

  export default {
    name: 'app',
    data() {
      return {
        docCont: '',
        expUrl: location.href.replace(/index\.html.*|#.*/, 'example.html')
      }
    },
    watch: {
      $route() {
        this.$refs.content.scrollTop = 0
      }
    },
    computed: {
      path() {
        return this.$route.path
      },
      iframeSrc() {
        return 'example.html?t=' + new Date().getTime() + '/#' + this.path
      }
    }
  }
</script>

<style lang="scss">
  .doc-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .doc-list-wrap {
    width: 300px;
    height: 100%;
    background: #F3F4F5;
  }

  .list-title {
    color: #212121;
    margin: 20px 0 0 20px;
    font-size: 18px;

  }

  .doc-list {
    margin: 20px 0 0 20px;
    font-size: 16px;
    color: #212121;
    line-height: 38px;
    li {
      margin: 0 0 0 8px;
      cursor: pointer;
      user-select: none;
    }
    .on {
      color: #F16622;
      border-right: 3px solid #F16622;
    }
    .overview {
      margin: 0;
    }
    .type-name {
      margin: 10px 0 0 0;
      line-height: 22px;
      font-size: 12px;
      color: #757575;
      cursor: default;
    }
  }

  .doc-exp-wrap {
    width: 430px;
    height: 100%;
    background: #F3F4F5;
  }

  .phone-wrap {
    width: 371px;
    height: 750px;
    margin: 30px 0 0 30px;
    background: #555;
    border-radius: 35px;
  }

  .phone-screen {
    width: 351px;
    height: 667px;
    background: #FFF;
    border-radius: 5px;
    overflow: hidden;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .exp-url {
    margin: 20px 0 0;
    text-align: center;
    color: #212121;
  }

  .content-wrap {
    width: 100%;
    height: 100%;
  }

  .doc-content {
    background: #FFF;
  }
</style>
