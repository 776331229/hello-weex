<template>
    <div class="x-input-box" :style="{marginTop : marginTop}">
        <input class="x-input"
               :type="types"
               :placeholder="placeholder"
               :value="currentValue"
               :readonly="readonly"
               :disabled="disabled"
               @input="handleInput"
               :style="{borderRadius : borderRadius}">
        <image class="x-icon x-login"
               :src="iconUrl"></image>
    </div>
</template>

<style scoped>
    .x-input-box{
        position: relative;
        flex-direction: row;
        justify-content: center;
        width: 650px;
    }

    .x-input-box > .x-icon{
        position: absolute;
        top: 15px;
        left: 15px;
        width: 40px;
        height: 40px;
    }

    .x-input-box > .x-input{
        width: 650px;
        height: 70px;
        border-radius: 6px;
        text-indent: 80px;
    }
</style>

<script>
    module.exports = {
        props: {
            iconUrl:{ // 输入框icon的url地址
                type: String,
                default: ''
            },
            value: {},// 输入框的值
            placeholder: { // 提示标题
                type: String,
                default: '请输入'
            },

            radius : { // 按钮边角弧度
                type: String,
                default: '4px'
            },
            types:{ // 输入框类型
                type:String,
                default:'text'
            },
            readonly: { // 是否是只读
                type: Boolean,
                default: false
            },
            disabled: { // 是否不可用
                type: Boolean,
                default: false
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
                currentValue: this.value
            }
        },
        methods: {
            /**
             * 操作输入框时
             * */
            handleInput(evt) {
                this.currentValue = evt.target.value;
            },
        },
        watch:{
            /**
             * 当传入的默认值时，让当前的值统一
             * */
            value(val) {
                this.currentValue = val;
            },
            /**
             * 监听currentValue值的变化，再把改变的值传递到伏组件中
             * @param val 最新的值
             * */
            currentValue(val) {
                this.$emit('input', val);
            },
        }
    }
</script>