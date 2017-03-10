<template>
<div class="mian">
<!-- <div class="header-view">
<image class="back" @click="goBack" src="http://m.izhinengbao.com/static/public/images/left_arrow_icon.png"></image>
  <text class="title">智能保</text>
  </div>

</div> -->
<div class="box1">
<web ref="webview" :src="listUrl[0]" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
</div>
</template>
<style>
  /**头部**/
  .header-view{
    background-color: #47c2ff;
    height: 128px;
    width: 750px;
    align-items: center;

  }
    .title { 

      font-size: 30px; 
      height: 128px;
      line-height: 88px;
      text-align: center;
      color: white;
      justify-content: center;
    }
.back{
  position: absolute;
  left: 40;
  width: 40;
  height: 40;
  margin-top: 60;
  resize: cover;
}
.webview{
  width: 750px;
  height: 1500px;
      border-width: 2px;
    border-style: solid;
    border-color: #41B883;
}
</style>
<script>
var navigator = weex.requireModule('navigator');//获取内置模板
var webview = weex.requireModule('webview');
  var modal = weex.requireModule('modal');

  export default{
    data:{
     listUrl:[
      "http://m.izhinengbao.com/productAnalysis/analysisPage.page?productId=276",
      "http://m.izhinengbao.com/product/list.page?albumId=7",
      "http://m.izhinengbao.com/product/activity/index.page",
      "http://m.izhinengbao.com/product/list.page?albumId=2",
      "http://m.izhinengbao.com/product/list.page?albumId=1"
     ],
     webWidth:750,
     webHeight:1500
    },
    methods:{ 
      reload (event) {
        console.log('will reload webview')
        modal.toast({ message: 'reload' })
        webview.reload(this.$refs.webview)
      },
      start (event) {
        console.log('pagestart', event)
        // modal.toast({ message: 'pagestart' })
      },
      finish (event) {
        console.log('pagefinish', event)
        // modal.toast({ message: 'pagefinish' })
      },
      error (event){

      }
    }

  }
</script>
