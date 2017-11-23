<template src="./template.html"></template>

<style src="./style.css" scoped></style>

<script>
    const modal = weex.requireModule('modal');
    import XInput from './../../components/x-input/index.vue'
    import XButton from './../../components/x-button/index.vue'
  export default {
      components: {
          XInput,
          XButton
      },
    data(){
      return {
          logoUrl: 'http://testwww.51fbpay.com/myProgramImages/logo_img.png',
          username: '', // 用户名
          password: '' // 密码

      }
    },
    methods: {

    }
  }
</script>