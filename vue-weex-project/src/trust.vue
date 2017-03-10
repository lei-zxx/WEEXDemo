<template>
<div class="mian">
  <div class="header-view">
  <image class="back" @click="goBack" src="http://m.izhinengbao.com/static/public/images/left_arrow_icon.png"></image>
  <text class="title">智能保</text>
  </div>
<list class="list">
  <cell class="cell" v-for="item in imageList">
  <div class="content">
    <image class="image" :src="item"></image>
  </div>
  </cell>
</list>
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
    /**内容**/
.content{
  width: 750;
  height: 300;

  flex-direction: column;
  justify-content: center;
}
  .image{
    width: 750;
    height: 300;
    resize: cover;
    margin-top: 80;
  }
</style>
<script>
var navigator = weex.requireModule('navigator');//获取内置模板

  export default{
    data:{
      imageList:[
        "http://m.izhinengbao.com/static/index/images/trust_bg01.png",
        "http://m.izhinengbao.com/static/index/images/trust_bg02.png",
        "http://m.izhinengbao.com/static/index/images/trust_bg03.png"
      ]
    },
    methods:{
      goBack:function(e) {
        // body...
        navigator.pop({
          animated:"true"
        })
      }
    }
  }
</script>
