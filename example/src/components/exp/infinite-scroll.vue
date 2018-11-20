<template>
  <section class="bricks-infinite-scroll-wrap fx fx-v">
    <bricks-nav-bar title="InfiniteScroll 滚动加载"
                 class="fx-n"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <ul class="fx-1 of-a"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40">
      <li v-for="item in list" class="bd-b">{{item}}</li>
      <li>加载中...</li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'InfiniteScrollExp',
    data() {
      return {
        loading: false,
        list: []
      }
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i)
      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2000);

      }
    }
  }
</script>


<style lang="scss" scoped>
  .bricks-infinite-scroll-wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  ul {
    padding-top: 16px;
  }

  li {
    line-height: 40px;
    background: #FFF;
    text-align: center;
  }
</style>