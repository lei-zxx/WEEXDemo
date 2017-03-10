<template>
<div class="mian">
  <div class="header-view">
  <text class="title">智能保</text>
  </div>
  

  <list class="list">
  <cell>
    <div class="top-view" >
    <image class="trust-image" @click="trustAction" :src="trustImageUrl"></image>
    <div class="ad-button" @click="chooseProduct"><text class="button-text">一分钟选对保险</text></div>
  </div>
  <div class="gap"></div>
        <div class="section-view">
        <div class="left-div">
          <text class="bgLabel"></text>
          <text class="section-label">为你精选</text>
        </div>
          <div class="right-menu">
            <image class="menu-image" src="http://m.izhinengbao.com/static/index/images/classify_icon.png"></image>
            <div class="menu" @click="more"><text class="menu-label">筛选专题</text></div>
          </div>
        </div>
  </cell>
    <cell class="cell" v-for="item in productList" >
      <div class="panel" @click="cellMore">
        <image class="image" :src="item.pic"></image>
        <text class="text">{{item.name}}</text>
      </div>
    </cell>
  </list>
  </div>
</template>

<style>
  .wrapper { align-items: center;}


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
    /**信任状**/
    .top-view{
      align-items: center;
      justify-content: center;
      height: 300px;

    }
    .trust-image{
      width: 750px;
      height: 200px;
      margin: 10px;
    }
    .ad-button{
      height: 80px;
      width: 710px;
      font-size: 32px;
      background-color: #47c2ff;
      border-radius: 10px;
      text-align: center;
      margin-left: 20;
      margin-right: 20;
      align-items: center;
      justify-content: center;

    }
    .button-text{
      color: white;
    }
    /**空隙**/
    .gap{
      height: 20px;
      background-color: #f5f5f5;
      width: auto;

    }
    /**头部 **/

    .section-view {
    width: 750px;
    height: 80;
    flex-direction: row;
    align-items: center;/**垂直居中**/
}

.bgLabel {
  background-color: #47c2ff;
  width: 4px;
  height: 30px;
  left: 30px;
  top:0px;
}

.section-label {
  font-size: 24px;
  width: 150;
  left: 40;
}
.left-div{
  float: left;
 flex-direction: row;
}
.right-menu {
  flex-direction: row;
  position: absolute;
  right: 10;
  align-items: center;
  height: 80;
}

.menu-image {
  width: 35px;
  height: 35px;



}
.menu{
  justify-content: center;
  align-items: center;
}
.menu-label {
  font-size: 24px;
  color: #47c2ff;
  width: 100;
  left: 5;
}
/**产品列表**/
.list{background-color: #ffffff}
.cell{
  padding: 20px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 2;
  border-bottom-style: solid;
}
.panel{
  width: 750;
  height: 300;
  padding-top: 10;
  padding-bottom: 10;
  flex-direction: column;
  justify-content: center;
}
.image{
  width: 710px;
  height: 250px;
  resize: cover;
}
.text{
  font-size: 24px;
  height: 40;

  color: #000000;
}
</style>

<script>
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');

  export default {
    data: {
      trustImageUrl:"http://m.izhinengbao.com/static/index/images/credentials_block_bg.png",
      productList:[
      {
        name:"宝宝的压岁钱这样花，未来健康又有钱！",
        pic:"http://114.55.116.144/platform_web/static/index/images/8.jpg"
      },
      {
        name:"保障系数满分的满期返还型重大疾病保险集合",
        pic:"http://114.55.116.144/platform_web/static/index/images/5.jpg"
      },
       {
        name:"时间短收益高，理财系数满分的保本保收益产品！",
        pic:"http://114.55.116.144/platform_web/static/index/images/3.jpg"
      },
      {
        name:"宝宝的压岁钱这样花，未来健康又有钱！",
        pic:"http://114.55.116.144/platform_web/static/index/images/2.jpg"
      },
      {
        name:"行业内部人员都在抢的百万医疗险集合",
        pic:"http://114.55.116.144/platform_web/static/index/images/1.jpg"
      }
      ]
    },
    methods: {
      chooseProduct:function(e){
        modal.toast({
          message:'工程师正在努力开发中....',
          duration:0.3
        })
      },
      trustAction:function(e){
    
    if (typeof window == 'object') {
        console.log('H5端');
        var h5Base = 'http://192.168.10.68:8087/weex.html?page=./dist/trust.js';
        window.location.href=h5Base;
    }else{
      modal.toast({
        message:'native端',
        duration:0.3
      })
       navigator.push({
          url:'http://192.168.10.68:8087/dist/trust.js',
          animated:"true"
        },event=>{

        })
    }
       
      },
      more:function(e){
        if (typeof window == 'object') {
        console.log('H5端');
        var h5Base = 'http://192.168.10.68:8087/weex.html?page=./dist/trust.js';
        window.location.href=h5Base;
    }else{
        navigator.push({
          url:"http://192.168.10.68:8087/dist/trust.js",
          animated:"true"
        },event=>{

        })
      }
      },
      cellMore:function(e){
        navigator.push({
          url:"http://192.168.10.68:8087/dist/list.js",
          animated:"true"
        },event=>{

        })
      }
    }
  }
</script>
