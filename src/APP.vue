<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
  </div>
</template>
<style>
  body{
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color:#333;
  }

  .app-wrapper{
    background-color: #f4f4f4;
  }
  .r-box{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<script>
    var modal = weex.requireModule('modal');
    export default {
        data () {
            return {
                aa:''
            }
        },
        components: {

        },
        created () {

        },
        methods: {

        }
    }
</script>