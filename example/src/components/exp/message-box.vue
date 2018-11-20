<template>
  <section>
    <bricks-nav-bar title="MessageBox 信息框"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section class="ml-8 mr-8">
      <bricks-button title="1个按钮"
                  @click="clickBtn1"></bricks-button>
      <bricks-button class="mt-16"
                  title="2个按钮"
                  @click="clickBtn2"></bricks-button>
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
      clickBtn1() {
        this.$bricks.messageBox({
          title: '内容内容内容内内容内容，内容内容容内容内容内容内容',
          button1: {
            name: '确定',
            click(e) {
              console.log('click btn1', e)
            }
          }
        })
      },
      clickBtn2() {
        this.$bricks.messageBox({
          title: '内容内容内容内内容内容，内容内容容内容内容内容内容',
          button1: {
            name: '确定',
            click(e) {
              console.log('click btn1', e)
            }
          },
          button2: {
            name: '取消',
            click(e) {
              console.log('click btn2', e)
            }
          }
        })
      }
    }
  }
</script>


<style lang="scss" scoped>

</style>