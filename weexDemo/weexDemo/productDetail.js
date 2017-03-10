// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(16)
	)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/mr.zhang/Documents/WEEX框架Demo/first-probject/vue-weex-project/src/productDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = {
	  "header-view": {
	    "backgroundColor": "#47c2ff",
	    "height": 128,
	    "width": 750,
	    "alignItems": "center"
	  },
	  "title": {
	    "fontSize": 30,
	    "height": 128,
	    "lineHeight": 88,
	    "textAlign": "center",
	    "color": "#FFFFFF",
	    "justifyContent": "center"
	  },
	  "back": {
	    "position": "absolute",
	    "left": 40,
	    "width": 40,
	    "height": 40,
	    "marginTop": 60,
	    "resize": "cover"
	  },
	  "top-tab": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 80,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "box-top": {
	    "width": 187,
	    "height": 80,
	    "color": "#333333",
	    "textAlign": "center",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "topText": {
	    "fontSize": 30,
	    "color": "#888888",
	    "paddingBottom": 10
	  },
	  "select": {
	    "borderBottomWidth": 4,
	    "borderBottomColor": "#47c2ff",
	    "borderBottomStyle": "solid",
	    "color": "#47c2ff"
	  },
	  "normalTab": {
	    "borderBottomColor": "#ffffff",
	    "borderBottomWidth": 0
	  },
	  "footView": {
	    "position": "absolute",
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "backgroundColor": "#ebf8ff",
	    "height": 100,
	    "flexDirection": "row",
	    "width": 750
	  },
	  "collection": {
	    "width": 150,
	    "height": 100,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "left-text": {
	    "color": "#4e9bc7",
	    "fontSize": 24
	  },
	  "collection-image": {
	    "width": 40,
	    "height": 40
	  },
	  "contrast": {
	    "width": 150,
	    "height": 100,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "contrast-image": {
	    "width": 40,
	    "height": 40
	  },
	  "insured": {
	    "width": 450,
	    "backgroundColor": "#ffaa00",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "textAlign": "center"
	  },
	  "right-text": {
	    "fontSize": 36,
	    "color": "#FFFFFF"
	  },
	  "scroller-view": {
	    "backgroundColor": "#cfefff",
	    "marginBottom": 100
	  },
	  "box1": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 350
	  },
	  "box1-left": {
	    "width": 375,
	    "height": 350,
	    "marginLeft": 30
	  },
	  "product-box": {
	    "marginTop": 50
	  },
	  "product-title": {
	    "fontSize": 40,
	    "color": "#4e9bc7"
	  },
	  "star-box": {
	    "height": 60,
	    "width": 350,
	    "flexDirection": "row",
	    "marginTop": 40
	  },
	  "star-image": {
	    "width": 48,
	    "height": 56,
	    "marginRight": 10
	  },
	  "label-box": {
	    "flexDirection": "row",
	    "width": 375,
	    "height": 150,
	    "marginTop": 20
	  },
	  "label-text": {
	    "fontSize": 30,
	    "color": "#5fa3c5"
	  },
	  "label-div": {
	    "alignItems": "center",
	    "marginRight": 10
	  },
	  "right-box": {
	    "width": 350,
	    "height": 350,
	    "justifyContent": "center"
	  },
	  "logo-image": {
	    "width": 252,
	    "height": 236
	  },
	  "basic-info": {
	    "backgroundColor": "#FFFFFF",
	    "width": 700,
	    "padding": 20,
	    "marginRight": 25,
	    "marginLeft": 25,
	    "borderRadius": 8
	  },
	  "info-box": {
	    "alignItems": "center"
	  },
	  "info-text": {
	    "fontSize": 32,
	    "color": "#4e9bc7"
	  },
	  "info-list": {
	    "flexDirection": "row",
	    "marginTop": 10,
	    "marginBottom": 10
	  },
	  "info-detail": {
	    "marginTop": 20
	  },
	  "info-name": {
	    "fontSize": 30,
	    "color": "#a3a3a3",
	    "marginRight": 10
	  },
	  "info-content": {
	    "fontSize": 30,
	    "color": "#333333"
	  },
	  "case-box": {
	    "justifyContent": "center",
	    "textAlign": "center",
	    "alignItems": "center",
	    "marginTop": 40,
	    "marginBottom": 20
	  },
	  "case-title": {
	    "fontSize": 32,
	    "color": "#4e9bc7"
	  },
	  "case-box-content": {
	    "backgroundColor": "#FFFFFF",
	    "width": 700,
	    "marginLeft": 25,
	    "marginRight": 25,
	    "padding": 40,
	    "borderRadius": 15
	  },
	  "case-head": {
	    "borderRadius": 20,
	    "backgroundColor": "#eaf8ff",
	    "padding": 20
	  },
	  "content": {
	    "fontSize": 30,
	    "color": "#3888b0"
	  },
	  "sub-content": {
	    "fontSize": 18,
	    "color": "#3888b0",
	    "marginTop": 8
	  },
	  "type-box": {
	    "flexDirection": "row"
	  },
	  "box-H": {
	    "width": 300,
	    "justifyContent": "center",
	    "textAlign": "center",
	    "alignItems": "center",
	    "marginTop": 30
	  },
	  "type-name": {
	    "color": "#47c2ff",
	    "fontSize": 30
	  },
	  "case-list": {
	    "height": 200,
	    "width": 620,
	    "flexDirection": "row",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#eeeeee",
	    "borderBottomStyle": "solid"
	  },
	  "list-name": {
	    "fontSize": 26,
	    "color": "#333333"
	  },
	  "company-view": {
	    "width": 700,
	    "borderRadius": 10,
	    "marginLeft": 25,
	    "marginRight": 25,
	    "backgroundColor": "#FFFFFF"
	  },
	  "box-head": {
	    "margin": 20,
	    "backgroundColor": "#f5f5f5",
	    "borderRadius": 20,
	    "flexDirection": "row",
	    "textAlign": "center",
	    "alignItems": "center"
	  },
	  "company-img": {
	    "width": 50,
	    "height": 50,
	    "marginRight": 30
	  },
	  "company-text": {
	    "fontSize": 26,
	    "color": "#333333",
	    "marginLeft": 20,
	    "marginRight": 20,
	    "lineHeight": 40
	  }
	}

/***/ },

/***/ 17:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator'); //获取内置模板
	var modal = weex.requireModule('modal');
	var animation = weex.requireModule('animation');
	exports.default = {
	  data: function data() {
	    return {
	      selectClass: 'select',
	      selectTwoClass: '',
	      selectThreeClass: '',
	      selectFourClass: '',
	      starCount: 5, //星星数量
	      labelList: [{
	        score: 8.7,
	        type: "品牌"
	      }, {
	        score: 10.0,
	        type: "保障"
	      }, {
	        score: 0.3,
	        type: "理财"
	      }],
	      caseList: [{
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }, {
	        desc: '若小保不幸身故',
	        security: '可获赔30万作为身故保险金。'
	      }]
	    };
	  },

	  methods: {
	    goBack: function goBack(e) {
	      //返回
	      navigator.pop({
	        animated: "true"
	      });
	    },
	    tabClick: function tabClick(e) {
	      this.selectClass = 'select';
	      this.selectTwoClass = 'normalTab';
	      this.selectThreeClass = 'normalTab';
	      this.selectFourClass = 'normalTab';
	    },
	    tabTwoClick: function tabTwoClick(e) {
	      this.selectClass = 'normalTab';
	      this.selectTwoClass = 'select';
	      this.selectThreeClass = 'normalTab';
	      this.selectFourClass = 'normalTab';
	    },
	    tabThreeClick: function tabThreeClick(e) {
	      this.selectClass = 'normalTab';
	      this.selectTwoClass = 'normalTab';
	      this.selectThreeClass = 'select';
	      this.selectFourClass = 'normalTab';
	    },
	    tabFourClick: function tabFourClick(e) {
	      this.selectClass = 'normalTab';
	      this.selectTwoClass = 'normalTab';
	      this.selectThreeClass = 'normalTab';
	      this.selectFourClass = 'select';
	    }
	  }

	};

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["mian"]
	  }, [_h('div', {
	    staticClass: ["header-view"]
	  }, [_h('image', {
	    staticClass: ["back"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/public/images/left_arrow_icon.png"
	    },
	    on: {
	      "click": _vm.goBack
	    }
	  }), _h('text', {
	    staticClass: ["title"]
	  }, ["评测页"])]), _h('div', {
	    staticClass: ["top-tab"]
	  }, [_h('div', {
	    staticClass: ["box-top"],
	    on: {
	      "click": _vm.tabClick
	    }
	  }, [_h('text', {
	    staticClass: ["topText"],
	    class: [_vm.selectClass]
	  }, ["基本信息"])]), _h('div', {
	    staticClass: ["box-top"],
	    on: {
	      "click": _vm.tabTwoClick
	    }
	  }, [_h('text', {
	    staticClass: ["topText"],
	    class: [_vm.selectTwoClass]
	  }, ["投保案例"])]), _h('div', {
	    staticClass: ["box-top"],
	    on: {
	      "click": _vm.tabThreeClick
	    }
	  }, [_h('text', {
	    staticClass: ["topText"],
	    class: [_vm.selectThreeClass]
	  }, ["产品特色"])]), _h('div', {
	    staticClass: ["box-top"],
	    on: {
	      "click": _vm.tabFourClick
	    }
	  }, [_h('text', {
	    staticClass: ["topText"],
	    class: [_vm.selectFourClass]
	  }, ["公司背景"])])]), _h('scroller', {
	    staticClass: ["scroller-view"]
	  }, [_h('div', {
	    staticClass: ["box1"]
	  }, [_h('div', {
	    staticClass: ["box1-left"]
	  }, [_vm._m(0), _h('div', {
	    staticClass: ["star-box"]
	  }, [_vm._l((_vm.starCount), function(item) {
	    return _h('image', {
	      staticClass: ["star-image"],
	      attrs: {
	        "src": "http://m.izhinengbao.com/static/product/images/star_bg.png"
	      }
	    })
	  })]), _h('div', {
	    staticClass: ["label-box"]
	  }, [_vm._l((_vm.labelList), function(item) {
	    return _h('div', {
	      staticClass: ["label-div"]
	    }, [_h('text', {
	      staticClass: ["label-text"]
	    }, [_vm._s(item.score)]), _h('text', {
	      staticClass: ["label-text"]
	    }, [_vm._s(item.type)])])
	  })])]), _vm._m(1)]), _vm._m(2), _h('div', {
	    staticClass: ["case"]
	  }, [_vm._m(3), _h('div', {
	    staticClass: ["case-box-content"]
	  }, [_vm._m(4), _vm._m(5), _vm._l((_vm.caseList), function(item) {
	    return _h('div', {
	      staticClass: ["case-list"]
	    }, [_h('div', {
	      staticClass: ["box-H"]
	    }, [_h('text', {
	      staticClass: ["list-name"]
	    }, [_vm._s(item.desc)])]), _h('div', {
	      staticClass: ["box-H"]
	    }, [_h('text', {
	      staticClass: ["list-name"]
	    }, [_vm._s(item.security)])])])
	  })])]), _vm._m(6)]), _vm._m(7)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["product-box"]
	  }, [_h('text', {
	    staticClass: ["product-title"]
	  }, ["御立方三号"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["right-box"]
	  }, [_h('image', {
	    staticClass: ["logo-image"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/product/images/robort_icon.png"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["basic-info"]
	  }, [_h('div', {
	    staticClass: ["info-box"]
	  }, [_h('text', {
	    staticClass: ["info-text"]
	  }, ["基本信息"])]), _h('div', {
	    staticClass: ["info-detail"]
	  }, [_h('div', {
	    staticClass: ["info-list"]
	  }, [_h('text', {
	    staticClass: ["info-name"]
	  }, ["保险公司:"]), _h('text', {
	    staticClass: ["info-content"]
	  }, ["工银安盛"])]), _h('div', {
	    staticClass: ["info-list"]
	  }, [_h('text', {
	    staticClass: ["info-name"]
	  }, ["保障内容:"]), _h('text', {
	    staticClass: ["info-content"]
	  }, ["身故+理财+重疾"])]), _h('div', {
	    staticClass: ["info-list"]
	  }, [_h('text', {
	    staticClass: ["info-name"]
	  }, ["投保年龄:"]), _h('text', {
	    staticClass: ["info-content"]
	  }, ["30天-60周岁"])]), _h('div', {
	    staticClass: ["info-list"]
	  }, [_h('text', {
	    staticClass: ["info-name"]
	  }, ["保障期限:"]), _h('text', {
	    staticClass: ["info-content"]
	  }, ["至66/77/88周岁"])]), _h('div', {
	    staticClass: ["info-list"]
	  }, [_h('text', {
	    staticClass: ["info-name"]
	  }, ["交费方式:"]), _h('text', {
	    staticClass: ["info-content"]
	  }, ["3/5/10/20/30周岁"])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["case-box"]
	  }, [_h('text', {
	    staticClass: ["case-title"]
	  }, ["—— 投保案例 ——"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["case-head"]
	  }, [_h('text', {
	    staticClass: ["content"]
	  }, ["小保，30岁男，保额30万，选择20年缴费，每年9495 ，保障至88周岁"]), _h('text', {
	    staticClass: ["sub-content"]
	  }, ["*不同年龄性别及不同投保选择，保费会有差异"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["type-box"]
	  }, [_h('div', {
	    staticClass: ["box-H"]
	  }, [_h('text', {
	    staticClass: ["type-name"]
	  }, ["保险情况"])]), _h('div', {
	    staticClass: ["box-H"]
	  }, [_h('text', {
	    staticClass: ["type-name"]
	  }, ["特点"])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["company", "case"]
	  }, [_h('div', {
	    staticClass: ["case-box"]
	  }, [_h('text', {
	    staticClass: ["case-title"]
	  }, ["—— 公司背景 ——"])]), _h('div', {
	    staticClass: ["company-view"]
	  }, [_h('div', {
	    staticClass: ["box-head"]
	  }, [_h('image', {
	    staticClass: ["company-img"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/product/images/h_icon.png"
	    }
	  }), _h('text', {
	    staticClass: ["company-text"]
	  }, ["银行系保险公司"])]), _h('text', {
	    staticClass: ["company-text"]
	  }, ["\n      根据中国保监会公布的2015年末行业数据，工银安盛人寿的保费收入位列中国寿险行业第十四位，银行系保险公司和外资合资寿险公司第一名。公司总部位于上海。截至2016年4月末，公司下设15家省级分公司，分布在北京市、天津市、河北省、河南省、辽宁省、山东省、江苏省、浙江省、广东省、四川省、湖北省、陕西省、山西省、福建省和安徽省，在全国60多个城市设有分支机构，共有员工超过4000人。\n    "])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["footView"]
	  }, [_h('div', {
	    staticClass: ["collection"]
	  }, [_h('image', {
	    staticClass: ["collection-image"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/product/images/footer_collect_icon.png"
	    }
	  }), _h('text', {
	    staticClass: ["left-text"]
	  }, ["收藏"])]), _h('div', {
	    staticClass: ["contrast"]
	  }, [_h('image', {
	    staticClass: ["contrast-image"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/product/images/footer_compare_icon.png"
	    }
	  }), _h('text', {
	    staticClass: ["left-text"]
	  }, ["对比"])]), _h('div', {
	    staticClass: ["insured"]
	  }, [_h('text', {
	    staticClass: ["right-text"]
	  }, ["立即投保"])])])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });