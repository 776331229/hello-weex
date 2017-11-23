<template>
  <scroller class="scroller">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <a href="home.js">
      <text>去首页</text>
    </a>
    <text class="desc" @click="jump('home')">到首页1</text>
    <text class="desc" @click="jump('home')">到首页</text>

    <div class="example">
      <text class="label">onchange</text>
      <switch></switch>
      <text class="info"></text>
    </div>

    <textarea class="textarea" ></textarea>


    <video class="video" :src="src" autoplay controls
           ></video>
    <text class="info">state: {{state}}</text>

    <image ref="testImage" style="width: 350px;height: 560px;" src="https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg"></image>
    <text class="button" @click="downloadImages">下载图片</text>


    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>

      <!--<indicator class="indicator"></indicator>-->
    </slider>


    <div class="group">
      <input class="input" v-model="value" ref="input" type="url" autofocus="false"></input>
    </div>
    <div class="group">
      <text class="button" @click="loadURL">LoadURL</text>
      <text class="button" @click="reload">reload</text>
    </div>
    <web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>



    <list class="list" @loadmore="fetch" loadmoreoffset="10">
      <cell class="cell" v-for="num in lists">
        <div class="panel">
          <text class="text">{{num}}</text>
        </div>
      </cell>
    </list>

    <loading class="loading" display="show">
      <text class="indicator">Loading ...</text>
    </loading>
  </scroller>
</template>

<style>
  .scroller {
    width: 700px;
    height: 700px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
  }
  .wrapper { align-items: center; margin-top: 120px;background-color: #f1f1f1; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
  .image {
    width: 350px;
    height: 350px;
  }
  .slider {
    margin-top: 25px;
    margin-left: 25px;
    width: 350px;
    height: 350px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 350px;
    height: 350px;
    position: relative;
  }
  .indicator {
    width: 350px;
    height: 350px;
    item-color: green;
    item-selected-color: red;
    item-size: 50px;
    position: absolute;
    top: 200px;
    left: 200px;
  }

  .example {
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 60px;
  }
  .label {
    font-size: 14px;
    line-height: 60px;
    width: 150px;
    color: #666;
    text-align: right;
    margin-right: 20px;
  }
  .info {
    font-size: 30px;
    line-height: 60px;
    color: #BBB;
    margin-left: 10px;
  }
  .video {
    width: 350px;
    height: 350px;
    margin-top: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }

  .webview {
    width: 350px;
    height: 750px;
    border-width: 2px;
    border-style: solid;
    border-color: #41B883;
  }

  .button {
    width: 225px;
    text-align: center;
    background-color: #D3D3D3;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 30px;
    font-size: 30px;
  }
  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .loading {
    wudth: 350px;
    height: 350px;
    justify-content: center;
  }
</style>

<script>
    const webview = weex.requireModule('webview')
    const modal = weex.requireModule('modal')
    const LOADMORE_COUNT = 4
  export default {
    data(){
      return {
          logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
          target: 'World',
          imageList: [
              { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
              { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
              { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
          ],
          state: '----',
          src:'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
          url : 'https://m.alibaba.com',
          value: 'https://m.alibaba.com',
          lists: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      },
      jump(name){
        this.push(name);
      },
      loadURL (event) {
          this.url = this.value
          modal.toast({ message: 'load url:' + this.url })
          setTimeout(() => {
              console.log('will go back.')
              modal.toast({ message: 'will go back' })
              webview.goBack(this.$refs.webview)
          }, 10000)
      },
      reload (event) {
          console.log('will reload webview')
          modal.toast({ message: 'reload' })
          webview.reload(this.$refs.webview)
      },
      start (event) {
          console.log('pagestart', event)
          modal.toast({ message: 'pagestart' })
      },
      finish (event) {
          console.log('pagefinish', event)
          modal.toast({ message: 'pagefinish' })
      },
      error (event) {
          console.log('error', event)
          modal.toast({ message: 'error' })
      },
      downloadImages(){
          var image = this.$refs.testImage;
          image.save((result)=>{
              if(result.success){
                  modal.toast({ message: '保存成功' })
              } else {
                  modal.toast({ message: '保存失败'+result.errorDesc })
              }

          });
      },
      fetch (event) {
          modal.toast({ message: 'loadmore', duration: 1 })
          setTimeout(() => {
              const length = this.lists.length
              for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                  this.lists.push(i + 1)
              }
          }, 800)
      }
    }
  }
</script>