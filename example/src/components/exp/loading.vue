<template>
  <section>
    <bricks-nav-bar title="loading 加载动画"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section class="ml-8 mr-8">
      <bricks-button title="显示loading"
                  @click="loading"></bricks-button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'LoadingExp',
    data() {
      return {}
    },
    methods: {
      loading() {
        this.$bricks.showLoading({
          cover:0,
          timeout: 3000,
          delay:1000
        })
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>