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
	__vue_styles__.push(__webpack_require__(10)
	)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "/Users/mr.zhang/Documents/WEEX框架Demo/first-probject/vue-weex-project/src/trust.vue"
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
	  "content": {
	    "width": 750,
	    "height": 300,
	    "flexDirection": "column",
	    "justifyContent": "center"
	  },
	  "image": {
	    "width": 750,
	    "height": 300,
	    "resize": "cover",
	    "marginTop": 80
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

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

	var navigator = weex.requireModule('navigator'); //获取内置模板

	exports.default = {
	  data: {
	    imageList: ["http://m.izhinengbao.com/static/index/images/trust_bg01.png", "http://m.izhinengbao.com/static/index/images/trust_bg02.png", "http://m.izhinengbao.com/static/index/images/trust_bg03.png"]
	  },
	  methods: {
	    goBack: function goBack(e) {
	      // body...
	      navigator.pop({
	        animated: "true"
	      });
	    }
	  }
	};

/***/ },
/* 12 */
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
	  }, ["智能保"])]), _h('list', {
	    staticClass: ["list"]
	  }, [_vm._l((_vm.imageList), function(item) {
	    return _h('cell', {
	      staticClass: ["cell"]
	    }, [_h('div', {
	      staticClass: ["content"]
	    }, [_h('image', {
	      staticClass: ["image"],
	      attrs: {
	        "src": item
	      }
	    })])])
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);