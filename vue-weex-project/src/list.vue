<template>
<div class="mian">
<div class="header-view">
<image class="back" @click="goBack" src="http://m.izhinengbao.com/static/public/images/left_arrow_icon.png"></image>
  <text class="title">为你精选</text>
  </div>


<div class="box1">
  <div class="columnOne" @click="tabOne"><text v-bind:style="styleObject">综合排序</text></div>
  <div class="columnTwo" @click="tabTwo"><text v-bind:style="normalStyleObject">评分排序</text></div>
</div>
<div class="tips" @click="tipsClick">
<image class="tip-image" src="http://m.izhinengbao.com/static/index/images/tips_icon.png"></image>
<scroller class="tips-scroller">
  <text class="tip-text">买保险不能不注意的重要时期</text>
  <text class="tip-text">为什么“如实告知”这么重要？</text>
  <text class="tip-text">我有社保，不需要商业保险？</text>
</scroller>

</div>
<list class="list">
  <cell v-for="item in list">
    <div class="content" @click="productClick">
      <div class="box-img">
      <image class="content-image" :src="item.pic"></image>
      </div>
      <div class="list-content">
        <text class="list-title">{{item.title}}</text>
        <text class="label">{{item.label}}</text>
        <div class="box2"><text class="company">{{item.company}}</text><text class="type">{{item.type}}</text></div>
        <div class="star-view" >

          <image v-for="model in item.starCount" class="star-img" src="http://m.izhinengbao.com/static/index/images/full_star_icon.png"></image>
        </div>
      </div>
    </div>
  </cell>
</list>


<div class="tips-view" ref="tipAnimation" v-if="isClickTips" >
<div class="views">
<div class="head-tips">
   <div class="box-tip">
    <image class="box-tip-img" src="http://m.izhinengbao.com/static/index/images/tips_icon02.png"></image>
    <text class="tip-title">智能保小贴士</text>
    <div class="close-bg" @click="closeView"><image class="close-img" src="http://m.izhinengbao.com/static/index/images/close_icon.png"></image></div>
    
  </div>
  <div class="toast-title">买保险不能不注意的重要时期!</div>
  <scroller class="scroller">
  <div class="tips-box"><text class="tips-content-text">
    犹豫期：也叫冷静期，就是在此期间您觉得买的不对，可以向保险公司申请退保，在扣除工本费用后可以免息退还所交的保险费。 
    保险期间：就是保险公司承担责任的时期，根据不同险种可能是终身，或者是至多年/多少岁。其实计算方式都是按保单周年来算。
    观察期：也叫等待期，就是保险和同生效后，对于部分保险责任有一段时间的免赔期，在此期间保险公司承担或按约定承担相应的责任。
    宽限期：就是保险交费日到期后有60天的时间，在60天内交费的保险合同继续有效，如果超过60天-2年，则保险和同效力就会中止，在宽限期即合同效力中止期间保险公司承担保险责任，但在理赔时会扣减欠交的保险费，超过2年未正常交费的，保险公司有权解除保险合同。
  </text>
  </div>
  </scroller>
</div>
 
</div>
</div>
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
/**顶部切换栏布局**/
.box1{
  width: 750;
  height: 80;
  flex-direction: row;
  border-bottom-width: 2;
  border-bottom-style: solid;
  border-bottom-color: #eeeeee;


}
.columnOne{
  width: 375;
  height: 80;
  border-right-color: #eeeeee;
  border-right-width: 2;
  text-align: center;
  justify-content: center;
   align-items: center;

}
.columnTwo{
  width: 375;
  height: 80;
  text-align: center;
  justify-content: center;
   align-items: center;

}
.selectText{
  font-size: 24;
  color: #47c2ff;
}
.normalText{
  font-size: 24;
  color: #888888;
}
/**tips**/
.tips{
  flex-direction: row;
  width: 750;
  height: 100;
  align-items: center;
  background-color: #eefaff;
}
.tip-image{
  width: 150;
  height: 80;
  margin-left: 20;
}
.tip-text{
  font-size:26;
  color: #47c2ff;
  height: 80;
  line-height: 45;
}
.tips-scroller{

  height: 80;
  width: 600;

}

/**列表**/
.content{
  flex-direction: row;
  width: 750;
  height: 240;
  border-bottom-color: #eeeeee;
  border-bottom-width: 2;
  border-bottom-style: solid;
}
.box-img{
  margin-left: 20;
  margin-top: 20;
}
.content-image{
  width: 200;
  height: 200;

}
.box2{
  flex-direction: row;


}
.list-content{
  margin-left: 10;
  margin-top: 10;
}
.list-title{
  font-size: 30;
  padding-top: 8;
  padding-bottom: 8;
  width: 500;
  word-break: break-all;

}
.label{
  font-size: 22;
  color: #848484;
  padding-top: 8;
  padding-bottom: 8;
}
.company{
  font-size: 22;
  color: #47c2ff;
  border-width: 2;
  border-color: #47c2ff;
  border-radius:20;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 8;
  padding-right: 8;
  margin-right: 8;
}
.type{
  font-size: 22;
  color: #bfbfbf;
  padding-top: 8;
  padding-bottom: 8;
}
/**星星**/
.star-view{
  flex-direction: row;
  align-items: center;
  margin-top: 10;
}
.star-img{
  width: 40;
  height: 40;
  margin-right: 5;
}
/**弹框tips**/
.tips-view{
  
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}

.views{
  background-color: white;
  border-radius: 10;
  width: 680;
  height: 800;
}
.head-tips{
  background-color: #eefaff;
  height: 150;
}
.box-tip{
  flex-direction: row;
  align-items: center;
  

}
.box-tip-img{
  width: 100;
  height: 60;
  margin-top: 20;
}
.tip-title{
  margin-top: 20;
  margin-left: 10;
  color: #47c2ff;
}
.toast-title{
  margin-left: 20;
  margin-top: 10;
}
.scroller{
  width: 700;
  height: 650;
}
.tips-content-text{

  font-size: 32;
  color: #888888;
}
.close-bg{
  width: 80;
  height: 80;
  border-radius: 40;
  background-color: white;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: auto;
  right: -30;
  top:-20;
}
.close-img{
  width: 40;
  height: 40;
  /*background-color: red;*/
}
.tips-box{
  padding-left: 25;
  padding-right: 25;

}
</style>
<script>
  var navigator = weex.requireModule('navigator');//获取内置模板
  var modal = weex.requireModule('modal');
  const animation = weex.requireModule('animation')
  export default{
   data(){
      return{
        isClickTips:false,
        styleObject:{
        color:'#47c2ff',
        fontSize:'24'
      },
      normalStyleObject:{
        color:'#888888',
        fontSize:'24'
      },
      list:[
      {
        pic:'http://114.55.116.144/platform_web/static/product/images/product_logo/189.jpg',
        title:'御立方三号',
        label:'满期返还保额 |身故返还保额',
        company:'工银安盛',
        type:'在线投保',
        starCount:5
      },
      {
        pic:'http://114.55.116.144/platform_web/static/product/images/product_logo/313.jpg',
        title:'泰康人寿健康有约重大疾病终身保险升级款',
        label:'含重疾60种 |含轻症26种',
        company:'泰康人寿',
        type:'专家预约',
        starCount:4
      },
      {
        pic:'http://114.55.116.144/platform_web/static/product/images/product_logo/330.jpg',
        title:'天安健康源2号',
        label:'含重疾105种 |含轻症50种',
        company:'天安人寿',
        type:'专家预约',
        starCount:5
      }
      ]
      } 
    },
    methods:{ 
      goBack:function(e){//返回
         navigator.pop({
          animated:"true"
        })
      },
      tabOne:function(e){
        this.normalStyleObject={color:'#888888',fontSize:'24'};
        this.styleObject={color:'#47c2ff',fontSize:'24'};
         var result = this.list;
        this.list=[];
        for (var i = result.length - 1; i >= 0; i--) {
          this.list.push(result[i])
        }
      
      },
      tabTwo:function(e){
        this.normalStyleObject={color:'#47c2ff',fontSize:'24'};
        this.styleObject={color:'#888888',fontSize:'24'};
        var result = this.list;
        this.list=[];
        for (var i = result.length - 1; i >= 0; i--) {
          this.list.push(result[i])
        }
      },
      tipsClick:function(e){//tip显示栏点击
        this.isClickTips=true;
      },
      closeView:function(e){//关闭tips
        this.isClickTips=false;
      },
      productClick:function(e){//产品点击详情
        navigator.push({
          url:"http://192.168.10.68:8087/dist/productDetail.js",
          animated:"true"
        },event=>{

        })
      }
    }

  }
</script>
