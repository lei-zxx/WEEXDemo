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
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
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
	__vue_options__.__file = "/Users/mr.zhang/Documents/WEEX框架Demo/first-probject/vue-weex-project/src/list.vue"
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

/***/ 13:
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
	  "box1": {
	    "width": 750,
	    "height": 80,
	    "flexDirection": "row",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid",
	    "borderBottomColor": "#eeeeee"
	  },
	  "columnOne": {
	    "width": 375,
	    "height": 80,
	    "borderRightColor": "#eeeeee",
	    "borderRightWidth": 2,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "columnTwo": {
	    "width": 375,
	    "height": 80,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "selectText": {
	    "fontSize": 24,
	    "color": "#47c2ff"
	  },
	  "normalText": {
	    "fontSize": 24,
	    "color": "#888888"
	  },
	  "tips": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 100,
	    "alignItems": "center",
	    "backgroundColor": "#eefaff"
	  },
	  "tip-image": {
	    "width": 150,
	    "height": 80,
	    "marginLeft": 20
	  },
	  "tip-text": {
	    "fontSize": 26,
	    "color": "#47c2ff",
	    "height": 80,
	    "lineHeight": 45
	  },
	  "tips-scroller": {
	    "height": 80,
	    "width": 600
	  },
	  "content": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 240,
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid"
	  },
	  "box-img": {
	    "marginLeft": 20,
	    "marginTop": 20
	  },
	  "content-image": {
	    "width": 200,
	    "height": 200
	  },
	  "box2": {
	    "flexDirection": "row"
	  },
	  "list-content": {
	    "marginLeft": 10,
	    "marginTop": 10
	  },
	  "list-title": {
	    "fontSize": 30,
	    "paddingTop": 8,
	    "paddingBottom": 8,
	    "width": 500,
	    "wordBreak": "break-all"
	  },
	  "label": {
	    "fontSize": 22,
	    "color": "#848484",
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "company": {
	    "fontSize": 22,
	    "color": "#47c2ff",
	    "borderWidth": 2,
	    "borderColor": "#47c2ff",
	    "borderRadius": 20,
	    "paddingTop": 8,
	    "paddingBottom": 8,
	    "paddingLeft": 8,
	    "paddingRight": 8,
	    "marginRight": 8
	  },
	  "type": {
	    "fontSize": 22,
	    "color": "#bfbfbf",
	    "paddingTop": 8,
	    "paddingBottom": 8
	  },
	  "star-view": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginTop": 10
	  },
	  "star-img": {
	    "width": 40,
	    "height": 40,
	    "marginRight": 5
	  },
	  "tips-view": {
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "views": {
	    "backgroundColor": "#FFFFFF",
	    "borderRadius": 10,
	    "width": 680,
	    "height": 800
	  },
	  "head-tips": {
	    "backgroundColor": "#eefaff",
	    "height": 150
	  },
	  "box-tip": {
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "box-tip-img": {
	    "width": 100,
	    "height": 60,
	    "marginTop": 20
	  },
	  "tip-title": {
	    "marginTop": 20,
	    "marginLeft": 10,
	    "color": "#47c2ff"
	  },
	  "toast-title": {
	    "marginLeft": 20,
	    "marginTop": 10
	  },
	  "scroller": {
	    "width": 700,
	    "height": 650
	  },
	  "tips-content-text": {
	    "fontSize": 32,
	    "color": "#888888"
	  },
	  "close-bg": {
	    "width": 80,
	    "height": 80,
	    "borderRadius": 40,
	    "backgroundColor": "#FFFFFF",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "position": "absolute",
	    "right": -30,
	    "top": -20
	  },
	  "close-img": {
	    "width": 40,
	    "height": 40
	  },
	  "tips-box": {
	    "paddingLeft": 25,
	    "paddingRight": 25
	  }
	}

/***/ },

/***/ 14:
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

	var navigator = weex.requireModule('navigator'); //获取内置模板
	var modal = weex.requireModule('modal');
	var animation = weex.requireModule('animation');
	exports.default = {
	  data: function data() {
	    return {
	      isClickTips: false,
	      styleObject: {
	        color: '#47c2ff',
	        fontSize: '24'
	      },
	      normalStyleObject: {
	        color: '#888888',
	        fontSize: '24'
	      },
	      list: [{
	        pic: 'http://114.55.116.144/platform_web/static/product/images/product_logo/189.jpg',
	        title: '御立方三号',
	        label: '满期返还保额 |身故返还保额',
	        company: '工银安盛',
	        type: '在线投保',
	        starCount: 5
	      }, {
	        pic: 'http://114.55.116.144/platform_web/static/product/images/product_logo/313.jpg',
	        title: '泰康人寿健康有约重大疾病终身保险升级款',
	        label: '含重疾60种 |含轻症26种',
	        company: '泰康人寿',
	        type: '专家预约',
	        starCount: 4
	      }, {
	        pic: 'http://114.55.116.144/platform_web/static/product/images/product_logo/330.jpg',
	        title: '天安健康源2号',
	        label: '含重疾105种 |含轻症50种',
	        company: '天安人寿',
	        type: '专家预约',
	        starCount: 5
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
	    tabOne: function tabOne(e) {
	      this.normalStyleObject = { color: '#888888', fontSize: '24' };
	      this.styleObject = { color: '#47c2ff', fontSize: '24' };
	      var result = this.list;
	      this.list = [];
	      for (var i = result.length - 1; i >= 0; i--) {
	        this.list.push(result[i]);
	      }
	    },
	    tabTwo: function tabTwo(e) {
	      this.normalStyleObject = { color: '#47c2ff', fontSize: '24' };
	      this.styleObject = { color: '#888888', fontSize: '24' };
	      var result = this.list;
	      this.list = [];
	      for (var i = result.length - 1; i >= 0; i--) {
	        this.list.push(result[i]);
	      }
	    },
	    tipsClick: function tipsClick(e) {
	      //tip显示栏点击
	      this.isClickTips = true;
	    },
	    closeView: function closeView(e) {
	      //关闭tips
	      this.isClickTips = false;
	    },
	    productClick: function productClick(e) {
	      //产品点击详情
          var bundleUrl = this.$getConfig().bundleUrl;
          bundleUrl = new String(bundleUrl);
          var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	      navigator.push({
	        url: nativeBase+'productDetail.js',
	        animated: "true"
	      }, function (event) {});
	    }
	  }

	};

/***/ },

/***/ 15:
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
	  }, ["为你精选"])]), _h('div', {
	    staticClass: ["box1"]
	  }, [_h('div', {
	    staticClass: ["columnOne"],
	    on: {
	      "click": _vm.tabOne
	    }
	  }, [_h('text', {
	    style: _vm.styleObject
	  }, ["综合排序"])]), _h('div', {
	    staticClass: ["columnTwo"],
	    on: {
	      "click": _vm.tabTwo
	    }
	  }, [_h('text', {
	    style: _vm.normalStyleObject
	  }, ["评分排序"])])]), _h('div', {
	    staticClass: ["tips"],
	    on: {
	      "click": _vm.tipsClick
	    }
	  }, [_h('image', {
	    staticClass: ["tip-image"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/index/images/tips_icon.png"
	    }
	  }), _vm._m(0)]), _h('list', {
	    staticClass: ["list"]
	  }, [_vm._l((_vm.list), function(item) {
	    return _h('cell', [_h('div', {
	      staticClass: ["content"],
	      on: {
	        "click": _vm.productClick
	      }
	    }, [_h('div', {
	      staticClass: ["box-img"]
	    }, [_h('image', {
	      staticClass: ["content-image"],
	      attrs: {
	        "src": item.pic
	      }
	    })]), _h('div', {
	      staticClass: ["list-content"]
	    }, [_h('text', {
	      staticClass: ["list-title"]
	    }, [_vm._s(item.title)]), _h('text', {
	      staticClass: ["label"]
	    }, [_vm._s(item.label)]), _h('div', {
	      staticClass: ["box2"]
	    }, [_h('text', {
	      staticClass: ["company"]
	    }, [_vm._s(item.company)]), _h('text', {
	      staticClass: ["type"]
	    }, [_vm._s(item.type)])]), _h('div', {
	      staticClass: ["star-view"]
	    }, [_vm._l((item.starCount), function(model) {
	      return _h('image', {
	        staticClass: ["star-img"],
	        attrs: {
	          "src": "http://m.izhinengbao.com/static/index/images/full_star_icon.png"
	        }
	      })
	    })])])])])
	  })]), (_vm.isClickTips) ? _h('div', {
	    ref: "tipAnimation",
	    staticClass: ["tips-view"]
	  }, [_h('div', {
	    staticClass: ["views"]
	  }, [_h('div', {
	    staticClass: ["head-tips"]
	  }, [_h('div', {
	    staticClass: ["box-tip"]
	  }, [_h('image', {
	    staticClass: ["box-tip-img"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/index/images/tips_icon02.png"
	    }
	  }), _h('text', {
	    staticClass: ["tip-title"]
	  }, ["智能保小贴士"]), _h('div', {
	    staticClass: ["close-bg"],
	    on: {
	      "click": _vm.closeView
	    }
	  }, [_h('image', {
	    staticClass: ["close-img"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/index/images/close_icon.png"
	    }
	  })])]), _h('div', {
	    staticClass: ["toast-title"]
	  }, ["买保险不能不注意的重要时期!"]), _vm._m(1)])])]) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('scroller', {
	    staticClass: ["tips-scroller"]
	  }, [_h('text', {
	    staticClass: ["tip-text"]
	  }, ["买保险不能不注意的重要时期"]), _h('text', {
	    staticClass: ["tip-text"]
	  }, ["为什么“如实告知”这么重要？"]), _h('text', {
	    staticClass: ["tip-text"]
	  }, ["我有社保，不需要商业保险？"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('scroller', {
	    staticClass: ["scroller"]
	  }, [_h('div', {
	    staticClass: ["tips-box"]
	  }, [_h('text', {
	    staticClass: ["tips-content-text"]
	  }, ["\n    犹豫期：也叫冷静期，就是在此期间您觉得买的不对，可以向保险公司申请退保，在扣除工本费用后可以免息退还所交的保险费。 \n    保险期间：就是保险公司承担责任的时期，根据不同险种可能是终身，或者是至多年/多少岁。其实计算方式都是按保单周年来算。\n    观察期：也叫等待期，就是保险和同生效后，对于部分保险责任有一段时间的免赔期，在此期间保险公司承担或按约定承担相应的责任。\n    宽限期：就是保险交费日到期后有60天的时间，在60天内交费的保险合同继续有效，如果超过60天-2年，则保险和同效力就会中止，在宽限期即合同效力中止期间保险公司承担保险责任，但在理赔时会扣减欠交的保险费，超过2年未正常交费的，保险公司有权解除保险合同。\n  "])])])
	}]}
	module.exports.render._withStripped = true

/***/ }

/******/ });
