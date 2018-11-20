<template>
  <section>
    <bricks-nav-bar title="navbar 导航栏"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <bricks-nav-bar title="文字标题">
      <div slot="left" class="c-9" @click="$router.go(-1)">返回</div>
      <div slot="right" class="c-9">编辑</div>
    </bricks-nav-bar>
    <bricks-nav-bar class="mt-16" iconClass="icon-close">
      <img slot="center" class="dp-b" src="../../assets/img/ic-navbar-logo.png" width="63px">
      <img slot="right" class="dp-b" src="../../assets/img/ic-navbar-event.png" width="24px">
    </bricks-nav-bar>
  </section>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>

</style>
