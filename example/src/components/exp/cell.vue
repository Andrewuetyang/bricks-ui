<template>
  <section>
    <bricks-nav-bar title="cell 列表项"
                 class="mb-16"
                 iconClass="icon-return"
                 @clickIcon="$router.replace('/')"></bricks-nav-bar>
    <section>
      <bricks-cell title="带icon的列表">
        <i slot="icon" class="icon-user"></i>
      </bricks-cell>

      <bricks-cell title="带icon和箭头的列表带icon和箭头的列表带icon和箭头的列表带icon和箭头的列表" is-link>
        <i slot="icon" class="icon-user"></i>
      </bricks-cell>

      <bricks-cell title="带icon和箭头的列表"
                @click="cellClick"
                is-link>
        <i slot="icon" class="icon-user"></i>
        <span slot="content">提示信息</span>
      </bricks-cell>

      <bricks-cell title="带icon和箭头的列表"
                is-link>
        <i slot="icon" class="icon-user"></i>
        <span slot="content">超出长度超出长度超出长度超出长度超出长度</span>
      </bricks-cell>

      <bricks-cell title="带开关的列表"
                v-model="toggle1"
                is-toggle>
        <i slot="icon" class="icon-user"></i>
      </bricks-cell>
    </section>

    <section class="mt-16">
      <bricks-cell title="带箭头的列表带箭头的列表带箭头的列表带箭头的列表" is-link></bricks-cell>

      <bricks-cell title="带箭头的列表" is-link>
        <span slot="content">提示信息</span>
      </bricks-cell>

      <bricks-cell title="带开关的列表"
                v-model="toggle2"
                is-toggle></bricks-cell>
    </section>

    <section class="mt-16">
      <bricks-cell>
        <i slot="icon" class="icon-user"></i>
        <div slot="title" class="input-wrap fx">
          <input class="fx-1" type="text" placeholder="用户名">
          <i class="icon-clear mr-16"></i>
        </div>

      </bricks-cell>
      <bricks-cell>
        <i slot="icon" class="icon-user"></i>
        <div slot="title" class="input-wrap fx">
          <input class="fx-1" type="text" placeholder="密码">
          <i class="icon-clear mr-16"></i>
        </div>
      </bricks-cell>
    </section>

  </section>
</template>

<script>
  export default {
    name: 'cell',
    data() {
      return {
        toggle1: false,
        toggle2: false
      }
    },
    methods: {
      cellClick(e) {
        console.log('click', e)
      }
    }
  }
</script>


<style lang="scss" scoped>
  .input-wrap {
    width: 100%;
    input {
      display: block; //解决安卓4.X显示bug
    }
  }

  .icon-clear {
    color: #9e9e9e;
    font-size: 12px;
  }
</style>