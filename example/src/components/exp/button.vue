<template>
  <section>
    <bricks-nav-bar title="button 按钮"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section class="ml-8 mr-8">
      <bricks-button title="普通按钮"
                  @click="btnClick"></bricks-button>

      <!-- 圆角的类名参考public.scss -->
      <bricks-button class="mt-12 brs-2"
                  title="圆角按钮"
                  @click="btnClick"></bricks-button>

      <bricks-button class="mt-12"
                  title="禁用的按钮"
                  @click="btnClick"
                  disabled></bricks-button>

      <bricks-button class="mt-12"
                  @click="btnClick">
        <span slot="content">
          <i class="icon-user"></i>
          自定义DOM内容
        </span>
      </bricks-button>
    </section>
    <section class="mt-12 fx">
      <bricks-button class="btn1"
                  title="立即叫车"
                  @click="btnClick"></bricks-button>
      <bricks-button class="btn2"
                  @click="btnClick">
        <span slot="content">
          <i class="icon-user"></i>
          预约
        </span>
      </bricks-button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'buttonExp',
    data() {
      return {}
    },
    methods: {
      btnClick(e) {
        console.log(e)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .btn1 {
    width: 63%;
  }

  .btn2 {
    width: 37%;
    background: #FEA000;
    &:active {
      background: #E48F00;
    }
  }
</style>