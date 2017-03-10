<template>
<div class="mian">
<div class="header-view">
<image class="back" @click="goBack" src="http://m.izhinengbao.com/static/public/images/left_arrow_icon.png"></image>
  <text class="title">评测页</text>
</div>
<div class="top-tab" >
  <div class="box-top" @click="tabClick">
    <text class="topText" v-bind:class="[selectClass]">基本信息</text>
  </div>
    <div class="box-top"  @click="tabTwoClick">
    <text class="topText" v-bind:class="[selectTwoClass]">投保案例</text>
  </div>
    <div class="box-top"  @click="tabThreeClick">
    <text class="topText" v-bind:class="[selectThreeClass]">产品特色</text>
  </div>
    <div class="box-top" @click="tabFourClick">
    <text class="topText" v-bind:class="[selectFourClass]">公司背景</text>
  </div>
</div>
<scroller class="scroller-view">
  <div class="box1">
  <div class="box1-left">
    <div class="product-box"><text class="product-title">御立方三号</text></div>
    <div class="star-box">
      <image v-for="item in starCount" class="star-image" src="http://m.izhinengbao.com/static/product/images/star_bg.png"></image>
    </div>
    <div class="label-box" >
      <div class="label-div" v-for="item in labelList">
        <text class="label-text">{{item.score}}</text>
        <text class="label-text">{{item.type}}</text>
      </div>
    </div>
  </div>
  <div class="right-box">
      <image class="logo-image" src="http://m.izhinengbao.com/static/product/images/robort_icon.png"></image>
  </div>
</div>

<!-- 基本信息 -->
<div class="basic-info">
<div class="info-box"><text class="info-text">基本信息</text></div>
<div class="info-detail">
  <div class="info-list"><text class="info-name">保险公司:</text><text class="info-content">工银安盛</text></div>
  <div class="info-list"><text class="info-name">保障内容:</text><text class="info-content">身故+理财+重疾</text></div>
  <div class="info-list"><text class="info-name">投保年龄:</text><text class="info-content">30天-60周岁</text></div>
  <div class="info-list"><text class="info-name">保障期限:</text><text class="info-content">至66/77/88周岁</text></div>
  <div class="info-list"><text class="info-name">交费方式:</text><text class="info-content">3/5/10/20/30周岁</text></div>
</div>
</div>

<!-- 投保案例 -->

<div class="case">
  <div class="case-box"><text class="case-title">—— 投保案例 ——</text></div>
  <div class="case-box-content">
    <div class="case-head">
      <text class="content">小保，30岁男，保额30万，选择20年缴费，每年9495 ，保障至88周岁</text>
      <text class="sub-content">*不同年龄性别及不同投保选择，保费会有差异</text>
    </div>
    <div class="type-box">
      <div class="box-H">
        <text class="type-name">保险情况</text>
      </div>
      <div class="box-H">
        <text class="type-name">特点</text>
      </div>
      
    </div>
    <div class="case-list" v-for="item in caseList">
      <div class="box-H">
        <text class="list-name">{{item.desc}}</text>
      </div>
      <div class="box-H">
        <text class="list-name">{{item.security}}</text>
      </div>
      </div>
  </div>
</div>
<div class="company case">
  <div class="case-box"><text class="case-title">—— 公司背景 ——</text></div>
  <div class="company-view">
    <div class="box-head">
      <image class="company-img" src="http://m.izhinengbao.com/static/product/images/h_icon.png"></image>
      <text class="company-text">银行系保险公司</text>
    </div>
    <text class="company-text">
      根据中国保监会公布的2015年末行业数据，工银安盛人寿的保费收入位列中国寿险行业第十四位，银行系保险公司和外资合资寿险公司第一名。公司总部位于上海。截至2016年4月末，公司下设15家省级分公司，分布在北京市、天津市、河北省、河南省、辽宁省、山东省、江苏省、浙江省、广东省、四川省、湖北省、陕西省、山西省、福建省和安徽省，在全国60多个城市设有分支机构，共有员工超过4000人。
    </text>
  </div>
</div>
</scroller>


<!-- foot view -->
<div class="footView">
  <div class="collection">
    <image class="collection-image" src="http://m.izhinengbao.com/static/product/images/footer_collect_icon.png"></image>
    <text class="left-text">收藏</text>
  </div>
  <div class="contrast">
    <image class="contrast-image" src="http://m.izhinengbao.com/static/product/images/footer_compare_icon.png"></image>
    <text class="left-text">对比</text>
  </div>
  <div class="insured">
    <text class="right-text">立即投保</text>
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
  /**top切换**/
.top-tab{
  flex-direction: row;
  width: 750;
  height: 80;
  align-items: center;
  justify-content: center;
}
.box-top{
  width: 187;
  height: 80;
  color: #333333;
  text-align: center;
  align-items: center;
  justify-content: center;

}
.topText{
  font-size:30;
  color:#888888;
  padding-bottom: 10;
}
.select{
  border-bottom-width: 4;
  border-bottom-color: #47c2ff;
  border-bottom-style: solid;
  color: #47c2ff;
}
.normalTab{
  border-bottom-color:#ffffff;
  border-bottom-width: 0;
}
/**footView**/
.footView{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ebf8ff;
  height: 100;
  flex-direction: row;
  width: 750;
}
.collection{
  width: 150;
  height: 100;
  align-items: center;
  justify-content: center;

}
.left-text{
  color: #4e9bc7;
  font-size: 24;
}
.collection-image{
  width: 40;
  height: 40;
}
.contrast{
  width: 150;
  height: 100;
  align-items: center;
  justify-content: center;
}
.contrast-image{
  width: 40;
  height: 40;
}
.insured{
  width: 450;
  background-color: #ffaa00;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.right-text{
  font-size: 36;
  color: white;
}
/**内容**/
.scroller-view{
  background-color: #cfefff;
  margin-bottom: 100;
}
.box1{
  
  flex-direction: row;
  width: 750;
  height: 350;

}
.box1-left{
  width: 375;
  height: 350;
  margin-left: 30;

}
.product-box{
  margin-top: 50;
}
.product-title{
  font-size: 40;
  color: #4e9bc7;
}
.star-box{
  height: 60;
  width: 350;
  flex-direction: row;
  margin-top: 40;
}
.star-image{
  width: 48;
  height: 56;
  margin-right: 10;
}
.label-box{
  flex-direction: row;
  width: 375;
  height: 150;
  margin-top: 20;
}
.label-text{
  font-size: 30;
  color: #5fa3c5;

}
.label-div{
  align-items: center;
  margin-right: 10;
}
/**Logo**/
.right-box{
  width: 350;
  height: 350;
  justify-content: center;
}
.logo-image{
  width: 252;
  height: 236;
}
/**基本信息**/
.basic-info{
  background-color: white;
  width: 700;
  padding: 20;
  margin-right: 25;
  margin-left: 25;
  border-radius: 8;
}
.info-box{
  align-items: center;/*子节点水平居中*/
}
.info-text{
  font-size: 32;
  color: #4e9bc7;
}
.info-list{
  flex-direction: row;
  margin-top: 10;
  margin-bottom: 10;
}
.info-detail{
  margin-top: 20;
}
.info-name{
  font-size: 30;
  color: #a3a3a3;
  margin-right: 10;
}
.info-content{
  font-size: 30;
  color: #333333;
}
/*投保案例*/
.case-box{
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 40;
  margin-bottom: 20;

}
.case-title{
  font-size: 32;
  color: #4e9bc7;
}
.case-box-content{
  background-color: white;
  width: 700;
  margin-left: 25;
  margin-right: 25;
  padding: 40;
  border-radius: 15;
}
.case-head{
  border-radius: 20;
  background-color: #eaf8ff;
  padding: 20;
}
.content{
  font-size: 30;
  color: #3888b0;
}
.sub-content{
  font-size: 18;
  color: #3888b0;
  margin-top: 8;
}
.type-box{
  flex-direction: row;

}
.box-H{
  width: 300;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 30;
}
.type-name{
  color: #47c2ff;
  font-size: 30;
  font-style: bold;
}
.case-list{
  height: 200;
  width: 620;
  flex-direction: row;
  border-bottom-width: 2;
  border-bottom-color: #eeeeee;
  border-bottom-style: solid;

}
.list-name{
  font-size: 26;
  color: #333333;
}
.company-view{
  width: 700;
  border-radius: 10;
  margin-left: 25;
  margin-right: 25;
  background-color: white;
}
/*公司背景*/
.box-head{
  margin: 20;
  background-color: #f5f5f5;
  border-radius: 20;
  flex-direction: row;
  text-align: center;
  align-items: center;

}
.company-img{
  width: 50;
  height: 50;
  margin-right: 30;
}
.company-text{
  font-size: 30;
  color: #545454;
}
.company-text{
  font-size: 26;
  color: #333333;
  margin-left:20;
  margin-right: 20;
  line-height: 40;
}
</style>
<script>
  var navigator = weex.requireModule('navigator');//获取内置模板
  var modal = weex.requireModule('modal');
  const animation = weex.requireModule('animation')
  export default{
   data(){
      return{
        selectClass:'select',
        selectTwoClass:'',
        selectThreeClass:'',
        selectFourClass:'',
        starCount:5,//星星数量
        labelList:[
          {
            score:8.7,
            type:"品牌"
          },
          {
            score:10.0,
            type:"保障"
          },
          {
            score:0.3,
            type:"理财"
          },
        ],
        caseList:[
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。',
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
          },
          {
            desc:'若小保不幸身故',
            security:'可获赔30万作为身故保险金。'
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
      tabClick:function(e){
          this.selectClass='select';
          this.selectTwoClass='normalTab';
          this.selectThreeClass='normalTab';
          this.selectFourClass='normalTab';
      },
      tabTwoClick:function(e){
          this.selectClass='normalTab';
          this.selectTwoClass='select';
          this.selectThreeClass='normalTab';
          this.selectFourClass='normalTab';
      },
      tabThreeClick:function(e){
          this.selectClass='normalTab';
          this.selectTwoClass='normalTab';
          this.selectThreeClass='select';
          this.selectFourClass='normalTab';
      },
      tabFourClick:function(e){
          this.selectClass='normalTab';
          this.selectTwoClass='normalTab';
          this.selectThreeClass='normalTab';
          this.selectFourClass='select';
      }
    }

  }
</script>
