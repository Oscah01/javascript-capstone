"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascript_capstone_1"] = self["webpackChunkjavascript_capstone_1"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #22254b;\\n  --secondary-color: #373b69;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  background-color: var(--primary-color);\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  margin: 0;\\n}\\n\\nheader {\\n  position: relative;\\n  padding: 0.5rem;\\n  display: flex;\\n  justify-content: center;\\n  background-color: var(--secondary-color);\\n  gap: 20rem;\\n}\\n\\n.list {\\n  display: flex;\\n  gap: 40rem;\\n  font-size: 20px;\\n  list-style: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  font-weight: bold;\\n}\\n\\n.lists {\\n  display: flex;\\n  gap: 1rem;\\n  list-style: none;\\n  font-size: 30px;\\n  cursor: pointer;\\n  font-weight: bold;\\n}\\n\\n.tv:hover {\\n  color: rgb(227, 33, 124);\\n}\\n\\n.new:hover {\\n  color: rgb(250, 253, 250);\\n}\\n\\n.trending:hover {\\n  color: rgb(24, 206, 24);\\n}\\n\\n.logo {\\n  list-style: none;\\n  cursor: pointer;\\n}\\n\\n.logo :hover {\\n  color: pink;\\n}\\n\\n.search {\\n  background-color: transparent;\\n  border: 2px solid var(--primary-color);\\n  border-radius: 50px;\\n  font-family: inherit;\\n  font-size: 1rem;\\n  padding: 0.5rem 1rem;\\n  color: #fff;\\n}\\n\\n.search::placeholder {\\n  color: #7378c5;\\n}\\n\\n.search:focus {\\n  outline: none;\\n  background-color: var(--primary-color);\\n}\\n\\nmain {\\n  position: relative;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.movie {\\n  width: 300px;\\n  margin: 1rem;\\n  background-color: var(--secondary-color);\\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);\\n  position: relative;\\n  overflow: hidden;\\n  border-radius: 3px;\\n}\\n\\n.movie img {\\n  width: 100%;\\n}\\n\\n.movie-info {\\n  color: #eee;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 0.2rem;\\n  padding: 0.5rem 1rem 1rem;\\n  letter-spacing: 0.5px;\\n}\\n\\n.movie-info h3 {\\n  margin-top: 0;\\n}\\n\\n.movie-info span {\\n  background-color: var(--primary-color);\\n  padding: 0.25rem 0.5rem;\\n  border-radius: 3px;\\n  font-weight: bold;\\n}\\n\\n.movie-info span.green {\\n  color: lightgreen;\\n}\\n\\n.movie-info span.orange {\\n  color: orange;\\n}\\n\\n.movie-info span.red {\\n  color: red;\\n}\\n\\n.overview {\\n  background-color: #fff;\\n  padding: 2rem;\\n  position: absolute;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n  max-height: 100%;\\n  transform: translateY(101%);\\n  overflow-y: auto;\\n  transition: transform 0.3s ease-in;\\n}\\n\\n.movie:hover .overview {\\n  transform: translateY(0);\\n}\\n\\n.wrapper {\\n  gap: 70px;\\n  margin: 100px 15px;\\n  width: 30%;\\n  height: 60px;\\n  display: grid;\\n  grid-template-columns: 1.5fr 1.5fr 2fr;\\n  background: #3accfd;\\n  border-radius: 8px;\\n}\\n\\n#search {\\n  margin-top: -30px;\\n  margin-left: 6px;\\n  width: 100%;\\n  border: none;\\n  outline: none;\\n  text-align: center;\\n  background: none;\\n  font-size: 20px;\\n  font-weight: 500;\\n  pointer-events: none;\\n  color: #0086b3;\\n  text-shadow: 2px 2px 3px #2a93b6;\\n}\\n\\nbutton:hover {\\n  background: #ba0015;\\n  transform: scale(1.05);\\n}\\n\\n.heart {\\n  padding: 6px;\\n  margin-top: 20px;\\n  position: relative;\\n  height: 30px;\\n  width: 30px;\\n  background: #c9c9c9;\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  border-radius: 0 0 0 10px;\\n  transform: rotate(-45deg);\\n  cursor: pointer;\\n}\\n\\n.heart.fill-color {\\n  background-color: #ff2727;\\n}\\n\\n.heart::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  top: -50%;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.heart::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  right: -50%;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.animationHeart {\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 100px;\\n  background: #ff2727;\\n  transform: rotate(-45deg);\\n  border-radius: 0 0 0 10px;\\n  cursor: pointer;\\n  visibility: hidden;\\n}\\n\\n.animationHeart.animation {\\n  animation: popup 0.8s linear;\\n  visibility: visible;\\n}\\n\\n.animationHeart::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 100%;\\n  width: 100%;\\n  top: -50%;\\n  right: 0;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.animationHeart::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 100%;\\n  width: 100%;\\n  top: 0;\\n  right: -50%;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.like,\\n.dislike {\\n  display: grid;\\n  place-items: center;\\n}\\n\\n.icon {\\n  margin: 0 1px 15px 8px;\\n  font-size: 20px;\\n  color: #0086b3;\\n  cursor: pointer;\\n  text-shadow: 5px 8px 15px #2a93b6;\\n  transition: 0.5s;\\n}\\n\\n.icon:hover {\\n  color: rgb(246, 1, 42);\\n  transform: scale(1.2);\\n}\\n\\n.animation-heart {\\n  position: absolute;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 100px;\\n  background: #ff2727;\\n  transform: rotate(-45deg);\\n  border-radius: 0 0 0 10px;\\n  cursor: pointer;\\n  visibility: hidden;\\n}\\n\\n.animation-heart.animation {\\n  animation: popup 0.8s linear;\\n  visibility: visible;\\n}\\n\\n.animation-heart::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 100%;\\n  width: 100%;\\n  top: -50%;\\n  right: 0;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.animation-heart::before {\\n  position: absolute;\\n  content: \\\"\\\";\\n  height: 100%;\\n  width: 100%;\\n  top: 0;\\n  right: -50%;\\n  background: inherit;\\n  border-radius: 50%;\\n}\\n\\n.button button {\\n  margin-top: 20px;\\n  justify-content: center;\\n  padding: 6px;\\n  width: 150px;\\n  font-size: 18px;\\n}\\n\\n.likes-number {\\n  margin-top: 20px;\\n}\\n\\n@keyframes popup {\\n  100% {\\n    transform: scale(1.5) rotate(-45deg);\\n    opacity: 0;\\n  }\\n}\\n\\n/* Popup */\\n\\n.burger {\\n  cursor: pointer;\\n  position: relative;\\n  left: 95%;\\n  color: #000;\\n  font-size: 25px;\\n}\\n\\n.popup {\\n  display: flex;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  margin: 0;\\n  z-index: 40;\\n  width: 900px;\\n  max-height: 90vh;\\n  padding: 10px;\\n  color: #000;\\n  text-align: center;\\n  border: 1px solid rgb(90, 89, 89);\\n  border-radius: 27px;\\n  background-color: #585d8c;\\n  transform: translate(-50%, -50%) scale(0);\\n  transition: 0.5s ease;\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n}\\n\\n.popup.active {\\n  transform: translate(-50%, -50%) scale(1);\\n  margin: 0;\\n}\\n\\n.popup-card {\\n  width: 100%;\\n  margin: 0 auto;\\n  list-style: none;\\n  color: rgb(216, 216, 216);\\n  display: flex;\\n}\\n\\n.pop--img {\\n  margin: auto;\\n}\\n\\n.popup-card img {\\n  height: 500px;\\n  margin-left: 0;\\n  margin-top: auto;\\n}\\n\\n.movie-summary {\\n  margin-left: 20px;\\n}\\n\\n/* Comment */\\n\\n.comment {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.comment input {\\n  width: 60%;\\n  margin: auto;\\n  padding: 4px;\\n  border-radius: 10px;\\n  font-size: 15px;\\n  color: #000;\\n  margin-bottom: 10px;\\n}\\n\\n.comment button {\\n  width: 25%;\\n  margin: auto;\\n  color: #000;\\n  border-radius: 15px;\\n  padding: 3px;\\n  font-size: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-1/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-1/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/comment-api.js":
/*!****************************!*\
  !*** ./src/comment-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst commentsUrl = '/apps/UHGxdjdJQHx0gaXtgTL4/comments/';\n\nconst addComment = async (id, user, comment) => {\n  await fetch(`${URL}${commentsUrl}`,\n    {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({\n        item_id: id,\n        username: user,\n        comment,\n      }),\n    });\n};\n\nconst getComments = async (incomingItemId) => {\n  const request = await fetch(`${URL}${commentsUrl}?item_id=${incomingItemId}`);\n  const moviee = await request.json();\n  return moviee;\n};\n\n//# sourceURL=webpack://javascript-capstone-1/./src/comment-api.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IMG_PATH\": () => (/* binding */ IMG_PATH),\n/* harmony export */   \"getMovies\": () => (/* binding */ getMovies)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* eslint-disable camelcase */\n\n\n\nconst API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c4663d1ba381b00aac6874230f49f551&page=3';\nconst APP_ID = 'r5rxF20VmKmZGxe859n1';\nconst LIKES_URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${APP_ID}/likes/`;\nconst IMG_PATH = 'https://image.tmdb.org/t/p/w1280';\nconst SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=c4663d1ba381b00aac6874230f49f551&query=\"';\n\nconst main = document.getElementById('main');\nconst form = document.getElementById('form');\nconst search = document.getElementById('search');\n\nconst postLikes = async (movieID) => {\n  const likeTarget = document.getElementById(`${movieID}`);\n  const likesNumber = likeTarget.nextSibling.nextSibling;\n  likesNumber.textContent = +likesNumber.textContent + 1;\n  await fetch(LIKES_URL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: `${movieID}`,\n    }),\n  });\n};\n\nasync function fetchLikes() {\n  const res = await fetch(LIKES_URL);\n  const data = await res.json();\n  return data;\n}\nfunction getClassByRate(vote) {\n  if (vote >= 8) {\n    return 'green';\n  }\n  if (vote >= 5) {\n    return 'orange';\n  }\n  return 'red';\n}\n\nasync function showMovies(movies) {\n  const likes = await fetchLikes();\n  main.innerHTML = '';\n\n  movies.forEach((movie) => {\n    const like = likes.find((l) => l.item_id === movie.id);\n    const {\n      title, poster_path, vote_average, overview,\n    } = movie;\n\n    const movieEl = document.createElement('div');\n    movieEl.classList.add('movie');\n\n    movieEl.innerHTML = `\n            <img src=\"${IMG_PATH + poster_path}\" alt=\"${title}\">\n            <div class=\"movie-info\">\n          <h3>${title}</h3>\n          <span class=\"${getClassByRate(vote_average)}\">${vote_average}</span>\n            </div>\n            <div class=\"overview\">\n          <h3>Overview</h3>\n          ${overview}\n          <div class=\"likes\">\n          <div id=${movie.id} class=\"heart\"></div>\n          <p class=\"likes-number\"> ${like ? like.likes : 0}</p>\n          <div class=\"animationHeart\"></div>\n          </div>\n          <div class=\"button\">\n          <button class=\"movie-btn\">comments</button>\n          </div>\n        `;\n    const heart = movieEl.querySelector('.heart');\n    const animationHeart = movieEl.querySelector('.animationHeart');\n\n    heart.addEventListener('click', (e) => {\n      postLikes(e.target.id);\n      animationHeart.classList.add('animation');\n      heart.classList.add('fill-color');\n\n      animationHeart.addEventListener('animationend', () => {\n        animationHeart.classList.remove('animation');\n        heart.classList.remove('fill-color');\n      });\n    });\n\n    //   animationHeart.addEventListener('click',() => {\n    //     animationHeart.classList.remove\n    //     ('animation')\n    //     heart.classList.remove('fill-color');\n    //   })\n\n    main.appendChild(movieEl);\n  });\n\n  document.querySelectorAll('.movie-btn').forEach((cardBtn, i) => {\n    cardBtn.addEventListener('click', async () => {\n      const popupContainer = document.querySelector('.popup');\n      popupContainer.classList.add('active');\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movies[i]);\n    });\n  });\n}\nasync function getMovies(url) {\n  const res = await fetch(url);\n  const data = await res.json();\n\n  showMovies(data.results);\n}\ngetMovies(API_URL);\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n\n  const searchTerm = search.value;\n\n  if (searchTerm && searchTerm !== '') {\n    getMovies(SEARCH_API + searchTerm);\n\n    search.value = '';\n  } else {\n    window.location.reload();\n  }\n});\n\n\n\n\n//# sourceURL=webpack://javascript-capstone-1/./src/index.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment-api.js */ \"./src/comment-api.js\");\n\n\nconst IMG_PATH = 'https://image.tmdb.org/t/p/w1280';\nconst showComment = async (id) => {\n  const result = await (0,_comment_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  const commentSection = document.getElementById('show-comm');\n\n  if (result.length > 0) {\n    commentSection.innerHTML = `<h3>comments : (${result.length})</h3> <hr>`;\n    result.forEach((element) => {\n      commentSection.innerHTML += `\n      <p>* Date : ${element.creation_date} | ${element.username} Commented : ${element.comment}</p>\n    `;\n    });\n  } else {\n    commentSection.innerHTML = '<h3>comments : (0)</h3>';\n  }\n};\n\nconst popupShow = (object) => {\n  const popupCard = document.createElement('li');\n  const container = document.querySelector('.popup');\n  container.innerHTML = '';\n  const imgPop = IMG_PATH + object.poster_path;\n  popupCard.classList.add('popup-card');\n  popupCard.innerHTML = `\n    <div class=\"burger\">X</div>\n    <div class=\"pop--img\">\n      <img src=\"${imgPop}\" alt=\"${object.title} img\">\n      \n      <div id = \"show-comm\">\n      ${showComment(object.id)}\n      </div>\n    </div>\n    <div class = \"movie-summary\">\n      <h1 class=\"popupTitle\">${object.title}</h1><br>\n      <h4 class=\"popupOverview\">${object.overview}</h4><hr>\n      <h4 class=\"popupVote\">Vote average : ${object.vote_average}</h4><hr>\n      <h4 class=\"popupLang\">Original language : ${object.original_language}</h4><hr>\n      <h4 class=\"popupRelease\">Release date : ${object.release_date}</h4><hr>\n      <h4 class=\"popupVoCnt\">Vote count : ${object.vote_count}</h4><hr>\n      <h4 class=\"popupPopula\">Movie popularity : ${object.popularity}</h4>\n      <div class=\"comment\">\n        <h3>Add a comment : </h3>\n        <input id= \"name-input\" type=\"text\" placeholder=\"Your name\" required>\n        <input id= \"insights-input\" type=\"text\" placeholder=\"Your comment\" required>\n        \n        <button type=\"button\" id=\"comment-btn\">Comment</button>\n      </div>\n    </div>\n    `;\n\n  container.appendChild(popupCard);\n\n  const closeButtons = document.querySelector('.burger');\n  closeButtons.addEventListener('click', () => {\n    document.querySelector('.popup.active').classList.remove('active');\n  });\n\n  const SubmitButton = document.getElementById('comment-btn');\n  const usernameInput = document.getElementById('name-input');\n  const commentInput = document.getElementById('insights-input');\n\n  SubmitButton.addEventListener('click', async (event) => {\n    event.preventDefault();\n\n    if (usernameInput.value === '' || commentInput.value === '') {\n      usernameInput.placeholder = 'Please fill your name';\n      commentInput.placeholder = 'Please add your comment';\n    } else {\n      await (0,_comment_api_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(object.id, usernameInput.value, commentInput.value);\n      showComment(object.id);\n      usernameInput.value = '';\n      commentInput.value = '';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupShow);\n\n\n//# sourceURL=webpack://javascript-capstone-1/./src/popup.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);