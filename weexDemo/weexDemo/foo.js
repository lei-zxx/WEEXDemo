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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(2)
	)

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
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
	__vue_options__.__file = "/Users/mr.zhang/Documents/WEEX框架Demo/first-probject/vue-weex-project/src/foo.vue"
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
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "alignItems": "center"
	  },
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
	  "top-view": {
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 300
	  },
	  "trust-image": {
	    "width": 750,
	    "height": 200,
	    "margin": 10
	  },
	  "ad-button": {
	    "height": 80,
	    "width": 710,
	    "fontSize": 32,
	    "backgroundColor": "#47c2ff",
	    "borderRadius": 10,
	    "textAlign": "center",
	    "marginLeft": 20,
	    "marginRight": 20,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "button-text": {
	    "color": "#FFFFFF"
	  },
	  "gap": {
	    "height": 20,
	    "backgroundColor": "#f5f5f5"
	  },
	  "section-view": {
	    "width": 750,
	    "height": 80,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "bgLabel": {
	    "backgroundColor": "#47c2ff",
	    "width": 4,
	    "height": 30,
	    "left": 30,
	    "top": 0
	  },
	  "section-label": {
	    "fontSize": 24,
	    "width": 150,
	    "left": 40
	  },
	  "left-div": {
	    "float": "left",
	    "flexDirection": "row"
	  },
	  "right-menu": {
	    "flexDirection": "row",
	    "position": "absolute",
	    "right": 10,
	    "alignItems": "center",
	    "height": 80
	  },
	  "menu-image": {
	    "width": 35,
	    "height": 35
	  },
	  "menu": {
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "menu-label": {
	    "fontSize": 24,
	    "color": "#47c2ff",
	    "width": 100,
	    "left": 5
	  },
	  "list": {
	    "backgroundColor": "#ffffff"
	  },
	  "cell": {
	    "padding": 20,
	    "borderBottomColor": "#eeeeee",
	    "borderBottomWidth": 2,
	    "borderBottomStyle": "solid"
	  },
	  "panel": {
	    "width": 750,
	    "height": 300,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "image": {
	    "width": 710,
	    "height": 250,
	    "resize": "cover"
	  },
	  "text": {
	    "fontSize": 24,
	    "height": 40,
	    "color": "#000000"
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var navigator = weex.requireModule('navigator');
	var modal = weex.requireModule('modal');

	exports.default = {
	  data: {
	    trustImageUrl: "http://m.izhinengbao.com/static/index/images/credentials_block_bg.png",
	    productList: [{
	      name: "宝宝的压岁钱这样花，未来健康又有钱！",
	      pic: "http://114.55.116.144/platform_web/static/index/images/8.jpg"
	    }, {
	      name: "保障系数满分的满期返还型重大疾病保险集合",
	      pic: "http://114.55.116.144/platform_web/static/index/images/5.jpg"
	    }, {
	      name: "时间短收益高，理财系数满分的保本保收益产品！",
	      pic: "http://114.55.116.144/platform_web/static/index/images/3.jpg"
	    }, {
	      name: "宝宝的压岁钱这样花，未来健康又有钱！",
	      pic: "http://114.55.116.144/platform_web/static/index/images/2.jpg"
	    }, {
	      name: "行业内部人员都在抢的百万医疗险集合",
	      pic: "http://114.55.116.144/platform_web/static/index/images/1.jpg"
	    }]
	  },
	  methods: {
	    chooseProduct: function chooseProduct(e) {
	      modal.toast({
	        message: '工程师正在努力开发中....',
	        duration: 0.3
	      });
	    },
           loadBaseUrl : function(){
           var bundleUrl = this.$getConfig().bundleUrl;
           bundleUrl = new String(bundleUrl);
           
           var nativeBase;
           var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
           
           var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('weexDemo.app') > 0;
           if (isAndroidAssets) {
           nativeBase = 'file://assets/';
           }
           else if (isiOSAssets) {
           nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
           }
           else {
           var host = 'localhost:12500';
           var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
           if (matches && matches.length >= 2) {
           host = matches[1];
           }
           nativeBase = 'http://' + host + '/' + this.dir + '/dist/';
           }
           var h5Base = './foo.html?page=./' + this.dir + '/dist/';
           //Native端
           var base = nativeBase;
           //H5端
           if (typeof window === 'object') {
           base = h5Base;
           }
           this.baseURL = base;
           },
           
	    trustAction: function trustAction(e) {

	      if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {
	        console.log('H5端');
	        var h5Base = 'http://192.168.10.68:8087/weex.html?page=./dist/trust.js';
	        window.location.href = h5Base;
	      } else {
	        modal.toast({
	          message: 'native端',
	          duration: 0.3
	        });
           var bundleUrl = this.$getConfig().bundleUrl;
           bundleUrl = new String(bundleUrl);
          var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        navigator.push({
	          url: nativeBase+'trust.js',
	          animated: "true"
	        }, function (event) {});
	      }
	    },
	    more: function more(e) {
	      if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object') {
	        console.log('H5端');
	        var h5Base = 'http://192.168.10.68:8087/weex.html?page=./dist/trust.js';
	        window.location.href = h5Base;
	      } else {
           var bundleUrl = this.$getConfig().bundleUrl;
           bundleUrl = new String(bundleUrl);
           var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        navigator.push({
	          url: nativeBase+'trust.js',
	          animated: "true"
	        }, function (event) {});
	      }
	    },
	    cellMore: function cellMore(e) {
           var bundleUrl = this.$getConfig().bundleUrl;
           bundleUrl = new String(bundleUrl);
           var nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	      navigator.push({
	        url:nativeBase+'list.js',
	        animated: "true"
	      }, function (event) {});
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["mian"]
	  }, [_vm._m(0), _h('list', {
	    staticClass: ["list"]
	  }, [_h('cell', [_h('div', {
	    staticClass: ["top-view"]
	  }, [_h('image', {
	    staticClass: ["trust-image"],
	    attrs: {
	      "src": _vm.trustImageUrl
	    },
	    on: {
	      "click": _vm.trustAction
	    }
	  }), _h('div', {
	    staticClass: ["ad-button"],
	    on: {
	      "click": _vm.chooseProduct
	    }
	  }, [_h('text', {
	    staticClass: ["button-text"]
	  }, ["一分钟选对保险"])])]), _h('div', {
	    staticClass: ["gap"]
	  }), _h('div', {
	    staticClass: ["section-view"]
	  }, [_vm._m(1), _h('div', {
	    staticClass: ["right-menu"]
	  }, [_h('image', {
	    staticClass: ["menu-image"],
	    attrs: {
	      "src": "http://m.izhinengbao.com/static/index/images/classify_icon.png"
	    }
	  }), _h('div', {
	    staticClass: ["menu"],
	    on: {
	      "click": _vm.more
	    }
	  }, [_h('text', {
	    staticClass: ["menu-label"]
	  }, ["筛选专题"])])])])]), _vm._l((_vm.productList), function(item) {
	    return _h('cell', {
	      staticClass: ["cell"]
	    }, [_h('div', {
	      staticClass: ["panel"],
	      on: {
	        "click": _vm.cellMore
	      }
	    }, [_h('image', {
	      staticClass: ["image"],
	      attrs: {
	        "src": item.pic
	      }
	    }), _h('text', {
	      staticClass: ["text"]
	    }, [_vm._s(item.name)])])])
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["header-view"]
	  }, [_h('text', {
	    staticClass: ["title"]
	  }, ["智能保"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["left-div"]
	  }, [_h('text', {
	    staticClass: ["bgLabel"]
	  }), _h('text', {
	    staticClass: ["section-label"]
	  }, ["为你精选"])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);
