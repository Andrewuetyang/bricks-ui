<template>
  <section>
    <bricks-nav-bar title="Popup 弹出框"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section class="ml-8 mr-8">
      <bricks-button title="右侧弹出"
                  @click="showPopup1=true"></bricks-button>
      <bricks-button class="mt-16"
                  title="左侧弹出，带半透明背景"
                  @click="showPopup2=true"></bricks-button>
      <bricks-button class="mt-16"
                  title="底部弹出，带半透明背景"
                  @click="showPopup3=true"></bricks-button>
      <bricks-button class="mt-16"
                  title="中间弹出，带半透明背景"
                  @click="showPopup4=true"></bricks-button>
    </section>
    <!--弹出框1-->
    <bricks-popup v-show="showPopup1" position="right">
      <bricks-button class="mt-12 ml-8 mr-8"
                  title="关闭弹出框"
                  @click="showPopup1=false"></bricks-button>
    </bricks-popup>
    <!--弹出框2-->
    <bricks-popup v-show="showPopup2" class="popup-fixed" position="fixed" @click.native.self="showPopup2=false">
      <bricks-popup v-show="showPopup2" class="popup-left" position="left">
        <bricks-button class="mt-12 ml-8 mr-8"
                    title="关闭弹出框"
                    @click="showPopup2=false"></bricks-button>
      </bricks-popup>
    </bricks-popup>
    <!--弹出框3-->
    <bricks-popup v-show="showPopup3" class="popup-fixed" position="fixed" @click.native.self="showPopup3=false">
      <bricks-popup v-show="showPopup3" class="popup-bottom" position="bottom">
        <bricks-button class="mt-12 ml-8 mr-8"
                    title="关闭弹出框"
                    @click="showPopup3=false"></bricks-button>
      </bricks-popup>
    </bricks-popup>
    <!--弹出框4-->
    <bricks-popup v-show="showPopup4" class="popup-fixed" position="fixed" @click.native.self="showPopup4=false">
      <bricks-popup v-show="showPopup4" position="center">
        <div class="box-center">
          居中盒子
        </div>
      </bricks-popup>
    </bricks-popup>
  </section>
</template>

<script>
  export default {
    name: 'PopupExp',
    data() {
      return {
        showPopup1: false,
        showPopup2: false,
        showPopup3: false,
        showPopup4: false
      }
    }
  }
</script>


<style lang="scss" scoped>
  .popup-fixed{
    background: rgba(0,0,0,0.5);
  }
  .popup-left {
    width: 70%;
  }
  .popup-bottom {
    height: 300px;
  }
  .box-center{
    width: 200px;
    height: 100px;
  }
</style>