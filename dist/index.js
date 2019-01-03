(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gatsby-image"), require("react"), require("react-image-lightbox"), require("react-image-lightbox/style.css"));
	else if(typeof define === 'function' && define.amd)
		define(["gatsby-image", "react", "react-image-lightbox", "react-image-lightbox/style.css"], factory);
	else if(typeof exports === 'object')
		exports["Gallery"] = factory(require("gatsby-image"), require("react"), require("react-image-lightbox"), require("react-image-lightbox/style.css"));
	else
		root["Gallery"] = factory(root["gatsby-image"], root["react"], root["react-image-lightbox"], root["react-image-lightbox/style.css"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_gatsby_image__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_image_lightbox__, __WEBPACK_EXTERNAL_MODULE_react_image_lightbox_style_css__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Gallery/index.jsx":
/*!*******************************!*\
  !*** ./src/Gallery/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-image */ \"gatsby-image\");\n/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-image-lightbox */ \"react-image-lightbox\");\n/* harmony import */ var react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\nvar prevIndex = function prevIndex(state) {\n  return (state.index - 1) % state.images.length;\n};\n\nvar nextIndex = function nextIndex(state) {\n  return (state.index + state.images.length + 1) % state.images.length;\n};\n\nvar Gallery =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Gallery, _Component);\n\n  function Gallery(props) {\n    var _this;\n\n    _classCallCheck(this, Gallery);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));\n    _this.state = {\n      index: 0,\n      isOpen: false,\n      images: props.images,\n      thumbs: props.thumbs\n    };\n    _this.renderLightBox = _this.renderLightBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.openLightBox = _this.openLightBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.closeLightbox = _this.closeLightbox.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.movePrev = _this.movePrev.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    _this.moveNext = _this.moveNext.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(Gallery, [{\n    key: \"openLightBox\",\n    value: function openLightBox(index) {\n      this.setState({\n        index: index,\n        isOpen: true\n      });\n    }\n  }, {\n    key: \"renderLightBox\",\n    value: function renderLightBox() {\n      var _this$state = this.state,\n          images = _this$state.images,\n          thumbs = _this$state.thumbs;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_lightbox__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        mainSrc: images[this.state.index],\n        nextSrc: images[nextIndex(this.state)],\n        prevSrc: images[prevIndex(this.state)],\n        mainSrcThumbnail: thumbs[this.state.index],\n        nextSrcThumbnail: thumbs[nextIndex(this.state)],\n        prevSrcThumbnail: thumbs[prevIndex(this.state)],\n        onCloseRequest: this.closeLightbox,\n        onMovePrevRequest: this.movePrev,\n        onMoveNextRequest: this.moveNext\n      });\n    }\n  }, {\n    key: \"closeLightbox\",\n    value: function closeLightbox() {\n      this.setState({\n        isOpen: false\n      });\n    }\n  }, {\n    key: \"movePrev\",\n    value: function movePrev() {\n      this.setState(function (prevState) {\n        return {\n          index: prevIndex(prevState)\n        };\n      });\n    }\n  }, {\n    key: \"moveNext\",\n    value: function moveNext() {\n      this.setState(function (prevState) {\n        return {\n          index: nextIndex(prevState)\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"row\"\n      }, this.state.thumbs.map(function (thumbnail, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"col-md-3 col-sm-6 px-0\",\n          key: index,\n          onClick: function onClick() {\n            return _this2.openLightBox(index);\n          }\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"m-1\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n          fluid: thumbnail,\n          className: \"rounded\"\n        })));\n      })), this.state.isOpen && this.renderLightBox());\n    }\n  }]);\n\n  return Gallery;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\n//# sourceURL=webpack://Gallery/./src/Gallery/index.jsx?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gallery_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery/index.jsx */ \"./src/Gallery/index.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Gallery_index_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://Gallery/./src/index.jsx?");

/***/ }),

/***/ "gatsby-image":
/*!*******************************!*\
  !*** external "gatsby-image" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_gatsby_image__;\n\n//# sourceURL=webpack://Gallery/external_%22gatsby-image%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://Gallery/external_%22react%22?");

/***/ }),

/***/ "react-image-lightbox":
/*!***************************************!*\
  !*** external "react-image-lightbox" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_image_lightbox__;\n\n//# sourceURL=webpack://Gallery/external_%22react-image-lightbox%22?");

/***/ }),

/***/ "react-image-lightbox/style.css":
/*!*************************************************!*\
  !*** external "react-image-lightbox/style.css" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_image_lightbox_style_css__;\n\n//# sourceURL=webpack://Gallery/external_%22react-image-lightbox/style.css%22?");

/***/ })

/******/ });
});