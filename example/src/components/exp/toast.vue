<template>
  <section>
    <bricks-nav-bar title="Toast 吐司消息"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section class="ml-8 mr-8">
      <bricks-button title="成功消息"
                  @click="toast1"></bricks-button>
      <bricks-button class="mt-12"
                  title="警告消息"
                  @click="toast2"></bricks-button>
      <bricks-button class="mt-12"
                  title="文本消息"
                  @click="toast3"></bricks-button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'ToastExp',
    data() {
      return {}
    },
    methods: {
      toast1() {
        this.$bricks.toast({
          message: '成功消息',
          iconClass: 'icon-success',
        })
      },
      toast2() {
        this.$bricks.toast({
          message: '吐司内文,\n吐司内文内文',
          iconClass: 'icon-warning',
          timeout: 1000,
          callback: function () {
            console.log('callback')
          }
        })
      },
      toast3() {
        this.$bricks.toast('吐司内文')
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>