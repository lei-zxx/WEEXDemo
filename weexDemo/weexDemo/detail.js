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
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
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
	__vue_options__.__file = "/Users/mr.zhang/Documents/WEEX框架Demo/first-probject/vue-weex-project/src/detail.vue"
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
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
	  "webview": {
	    "width": 750,
	    "height": 1500,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#41B883"
	  }
	}

/***/ },
/* 7 */
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

	var navigator = weex.requireModule('navigator'); //获取内置模板
	var webview = weex.requireModule('webview');
	var modal = weex.requireModule('modal');

	exports.default = {
	  data: {
	    listUrl: ["http://m.izhinengbao.com/productAnalysis/analysisPage.page?productId=276", "http://m.izhinengbao.com/product/list.page?albumId=7", "http://m.izhinengbao.com/product/activity/index.page", "http://m.izhinengbao.com/product/list.page?albumId=2", "http://m.izhinengbao.com/product/list.page?albumId=1"],
	    webWidth: 750,
	    webHeight: 1500
	  },
	  methods: {
	    reload: function reload(event) {
	      console.log('will reload webview');
	      modal.toast({ message: 'reload' });
	      webview.reload(this.$refs.webview);
	    },
	    start: function start(event) {
	      console.log('pagestart', event);
	      // modal.toast({ message: 'pagestart' })
	    },
	    finish: function finish(event) {
	      console.log('pagefinish', event);
	      // modal.toast({ message: 'pagefinish' })
	    },
	    error: function error(event) {}
	  }

	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["mian"]
	  }, [_h('div', {
	    staticClass: ["box1"]
	  }, [_h('web', {
	    ref: "webview",
	    staticClass: ["webview"],
	    attrs: {
	      "src": _vm.listUrl[0]
	    },
	    on: {
	      "pagestart": _vm.start,
	      "pagefinish": _vm.finish,
	      "error": _vm.error
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);