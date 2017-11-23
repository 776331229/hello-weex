<template>
    <div class="x-button-box" @click="clickMe" :style="{marginTop,borderRadius,backgroundColor}">
        <image class="x-icon x-login"
               :src="iconUrl"
               v-if="iconUrl"
        ></image>
        <text>{{text}}</text>
    </div>

</template>

<style scoped>
    .x-button-box{
        position: relative;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 650px;
        padding-top:25px;
        padding-bottom:25px;
    }

    .x-button-box > .x-icon{
        width: 40px;
        height: 40px;
    }
</style>

<script>
    module.exports = {
        props: {
            iconUrl:{
                type: String,
                default: ''
            },
            text:{ // 输入框icon的url地址
                type: String,
                default: '确定'
            },
            width:{ // 输入框icon的url地址
                type: String,
                default: ''
            },
            backgroundColor:{ // 按钮背景颜色
                type: String,
                default: '#7fd2c5'
            },
            marginTop:{ // 上外边距
                type: String,
                default: '50px'
            },
            borderRadius:{ // 圆角度数
                type: String,
                default: '3px'
            },
        },
        data(){
            return {

            }
        },
        computed: {
            styles(){

            }
        },
        methods: {
            /**
             * 操作输入框时
             * */
            clickMe() {
                this.$emit('onClick');
            },
        },

    }
</script>