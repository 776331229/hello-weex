<template>
  <div class="wrapper">
    <x-navbar
            :dataRole="dataRole"
            :height="height"
            :backgroundColor="backgroundColor"
            :title="title"
            :titleColor="titleColor"
            :leftItemSrc="leftItemSrc"
            :leftItemTitle="leftItemTitle"
            :leftItemColor="leftItemColor"
            :rightItemSrc="rightItemSrc"
            :rightItemTitle="rightItemTitle"
            :rightItemColor="rightItemColor"
            @naviBarRightItemClick="naviBarRightItemClick"
            @naviBarLeftItemClick="naviBarLeftItemClick"
    ></x-navbar>
    <div class="wrapper" :style="{ marginTop: height }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 750px;
  }
</style>

<script>
    import XNavbar from './../x-navbar/index.vue'
    module.exports = {
        components: {
            XNavbar
        },
        props: {
            dataRole: { default: 'navbar' },
            backgroundColor: { default: 'black' },
            height: { default: '88px' },
            title: { default: "" },
            titleColor: { default: 'black' },
            rightItemSrc: { default: '' },
            rightItemTitle: { default: '' },
            rightItemColor: { default: 'black' },
            leftItemSrc: { default: '' },
            leftItemTitle: { default: '' },
            leftItemColor: { default: 'black' }
        },
        methods: {
            naviBarRightItemClick: function (e) {
                this.$emit('naviBarRightItemClick', e)
            },
            naviBarLeftItemClick: function (e) {
                this.$emit('naviBarLeftItemClick', e)
            }
        }
    }
</script>