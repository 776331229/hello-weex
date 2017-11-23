<template>
    <div class="wrapper" @click="update">
        <x-navpage
            data-role="none"
            :height="navBarHeight"
            background-color="#ff5898"
            :title="title"
            title-color="white"
            left-item-title="More"
            left-item-color="white"
            right-item-src="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
        >

        </x-navpage>
        <text class="desc" @click="goNextPage()">我是首页</text>
    </div>
</template>

<style>
    .wrapper {
        align-items: center;
        margin-top: 120px;
    }

    .title {
        padding-top: 40px;
        padding-bottom: 40px;
        font-size: 48px;
    }

    .logo {
        width: 360px;
        height: 156px;
    }

    .desc {
        padding-top: 20px;
        color: #888;
        font-size: 24px;
    }
</style>

<script>
    import XNavpage from './../components/x-navpage/index.vue'

    export default {
        components: {
            XNavpage
        },
        data() {
            return {
                navBarHeight: 88,
                title: 'Navigator',
                dir: 'examples',
                baseURL: '',
            }
        },
        methods: {
            update: function (e) {
                this.target = 'Weex'
                console.log('target:', this.target)
            },
            goNextPage() {
                this.push('/me');
            }
        }
    }
</script>