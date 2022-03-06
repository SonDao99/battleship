/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! OmbudsmanAlternate-6YvDq.otf */ "./src/OmbudsmanAlternate-6YvDq.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: military;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    height: 100%;\n    font-family: military;\n}\n\n#bothGrids {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.battleGrid {\n    display: grid;\n    grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;\n    grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;\n    gap: 2px;\n    background-color: whitesmoke;\n}\n\n.gameSquare {\n    border-style: solid;\n    border-width: 2px;\n    border-color: rgba(0, 0, 0, 0.5);\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(119, 182, 230, 0.5);\n}\n\n#remainingShipDivs {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.remainingShips {\n    color: rgb(2, 34, 59);\n    width: 418px;\n    text-align: center;\n    font-size: 40px;\n}\n\n#gameOver {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    border-style: solid;\n    border-width: 5px;\n    border-color: rgb(2, 34, 59);\n    border-radius: 10px;\n    height: 200px;\n    width: 450px;\n    background-color: rgb(252, 247, 247);\n    position: absolute;\n    z-index: 2;\n}\n\n#gameOverMessage {\n    font-size: 40px;\n    color: rgb(2, 34, 59);\n}\n\nbutton {\n    font-family: inherit;\n    font-size: 25px;\n    padding: 10px;\n    color: rgb(2, 34, 59);\n    background-color: transparent;\n    border-radius: 10px;\n    border-style: solid;\n    border-color: rgb(2, 34, 59);\n    border-width: 3px;\n    cursor: pointer;\n}\n\n#backToMenu {\n    background-color: rgb(2, 34, 59);\n    color: white;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n#mainMenu {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: whitesmoke;    \n    color: rgb(2, 34, 59);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 10px;\n}\n\nh1 {\n    font-size: 60px;\n    margin: 0px;\n}\n\n.hover {\n    background-color: white;\n}\n\n.select {\n    background-color: rgba(189, 186, 186, 0.6);\n}\n\n#instructions, #gridAndButton {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\np {\n    text-align: center;\n    color: rgb(2, 34, 59);\n    font-size: 25px;\n    margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAsC;AAC1C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,wEAAwE;IACxE,qEAAqE;IACrE,QAAQ;IACR,4BAA4B;AAChC;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,gCAAgC;IAChC,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,4BAA4B;IAC5B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,qBAAqB;IACrB,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,gCAAgC;IAChC,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,SAAS;AACb","sourcesContent":["@font-face {\n    font-family: military;\n    src: url(OmbudsmanAlternate-6YvDq.otf);\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    background-color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    height: 100%;\n    font-family: military;\n}\n\n#bothGrids {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.battleGrid {\n    display: grid;\n    grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;\n    grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px;\n    gap: 2px;\n    background-color: whitesmoke;\n}\n\n.gameSquare {\n    border-style: solid;\n    border-width: 2px;\n    border-color: rgba(0, 0, 0, 0.5);\n    cursor: crosshair;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(119, 182, 230, 0.5);\n}\n\n#remainingShipDivs {\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.remainingShips {\n    color: rgb(2, 34, 59);\n    width: 418px;\n    text-align: center;\n    font-size: 40px;\n}\n\n#gameOver {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    border-style: solid;\n    border-width: 5px;\n    border-color: rgb(2, 34, 59);\n    border-radius: 10px;\n    height: 200px;\n    width: 450px;\n    background-color: rgb(252, 247, 247);\n    position: absolute;\n    z-index: 2;\n}\n\n#gameOverMessage {\n    font-size: 40px;\n    color: rgb(2, 34, 59);\n}\n\nbutton {\n    font-family: inherit;\n    font-size: 25px;\n    padding: 10px;\n    color: rgb(2, 34, 59);\n    background-color: transparent;\n    border-radius: 10px;\n    border-style: solid;\n    border-color: rgb(2, 34, 59);\n    border-width: 3px;\n    cursor: pointer;\n}\n\n#backToMenu {\n    background-color: rgb(2, 34, 59);\n    color: white;\n}\n\nbutton:active {\n    scale: 0.9;\n}\n\n#mainMenu {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: whitesmoke;    \n    color: rgb(2, 34, 59);\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 10px;\n}\n\nh1 {\n    font-size: 60px;\n    margin: 0px;\n}\n\n.hover {\n    background-color: white;\n}\n\n.select {\n    background-color: rgba(189, 186, 186, 0.6);\n}\n\n#instructions, #gridAndButton {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\np {\n    text-align: center;\n    color: rgb(2, 34, 59);\n    font-size: 25px;\n    margin: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameLoop.js":
/*!*************************!*\
  !*** ./src/gameLoop.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const player = __webpack_require__(/*! ./player */ "./src/player.js");
const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const gameLoop = (playerOneName = 'Player', playerTwoName = 'Computer') => {
  const playerOne = player(playerOneName);
  const playerTwo = player(playerTwoName);

  const getPlayerOne = () => playerOne;
  const getPlayerTwo = () => playerTwo;

  const playerOneBoard = gameboard();
  const playerTwoBoard = gameboard();

  /* playerOneBoard.placeShip('ca', 'x', [0, 2]);
  playerOneBoard.placeShip('ba', 'x', [2, 3]);
  playerOneBoard.placeShip('cr', 'y', [4, 1]);
  playerOneBoard.placeShip('su', 'x', [6, 6]);
  playerOneBoard.placeShip('de', 'y', [8, 2]); */

  /* playerTwoBoard.placeShip('ca', 'x', [0, 2]);
  playerTwoBoard.placeShip('ba', 'x', [2, 3]);
  playerTwoBoard.placeShip('cr', 'y', [4, 1]);
  playerTwoBoard.placeShip('su', 'x', [6, 6]);
  playerTwoBoard.placeShip('de', 'y', [8, 2]); */

  const shipCodes = ['ca', 'ba', 'cr', 'su', 'de'];

  const placePlayerOneShips = (coords, axes) => {
    for (let i = 0; i < 5; i += 1) {
      playerOneBoard.placeShip(shipCodes[i], axes[i], coords[i]);
    }
  };

  const placePlayerTwoShips = () => {
    const shipLengths = [5, 4, 3, 3, 2];

    let availableSquares = [];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        availableSquares.push([i, j]);
      }
    }

    const takenSquares = [];

    const randomAxis = () => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 'x';
      }
      return 'y';
    };

    let axis;
    for (let i = 0; i < 5; i += 1) {
      axis = randomAxis();
      if (axis === 'x') {
        let legalSquares = availableSquares.filter((square) => square[1] <= (10 - shipLengths[i]));
        for (let j = 0; j < takenSquares.length; j += 1) {
          for (let k = 1; k < shipLengths[i]; k += 1) {
            legalSquares = legalSquares.filter((square) => !(square[0] === takenSquares[j][0]
              && square[1] === (takenSquares[j][1] - k)));
          }
        }

        const squarePick = legalSquares[Math.floor(Math.random() * legalSquares.length)];
        playerTwoBoard.placeShip(shipCodes[i], axis, squarePick);
        const row = squarePick[0];
        const column = squarePick[1];
        for (let j = column; j < column + shipLengths[i]; j += 1) {
          availableSquares = availableSquares.filter(
            (square) => !(square[0] === row && square[1] === j),
          );
          takenSquares.push([row, j]);
        }
      } else if (axis === 'y') {
        let legalSquares = availableSquares.filter((square) => square[0] <= (10 - shipLengths[i]));
        for (let j = 0; j < takenSquares.length; j += 1) {
          for (let k = 1; k < shipLengths[i]; k += 1) {
            legalSquares = legalSquares.filter((square) => !(square[0] === (takenSquares[j][0] - k)
              && square[1] === takenSquares[j][1]));
          }
        }

        const squarePick = legalSquares[Math.floor(Math.random() * legalSquares.length)];
        playerTwoBoard.placeShip(shipCodes[i], axis, squarePick);
        const row = squarePick[0];
        const column = squarePick[1];
        for (let j = row; j < row + shipLengths[i]; j += 1) {
          availableSquares = availableSquares.filter((square) => !(square[0] === j
            && square[1] === column));
          takenSquares.push([j, column]);
        }
      }
    }
  };

  const getPlayerOneBoard = () => playerOneBoard.getBoard();
  const getPlayerTwoBoard = () => playerTwoBoard.getBoard();

  const getPlayerOneShips = () => playerOneBoard.getAllShips();
  const getPlayerTwoShips = () => playerTwoBoard.getAllShips();

  let currentPlayer = playerOne;
  let gameOver = false;

  const gameIsOver = () => gameOver;

  const move = (coordinates) => {
    if (currentPlayer === playerOne) {
      playerOne.saveAttackMove(coordinates);
      playerTwoBoard.receiveAttack(coordinates);
      if (playerTwoBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerTwo;
      move(playerTwo.makeRandomMove());
    } else {
      playerTwo.saveAttackMove(coordinates);
      playerOneBoard.receiveAttack(coordinates);
      if (playerOneBoard.allSunk()) {
        gameOver = true;
      }
      currentPlayer = playerOne;
    }
  };

  return {
    getPlayerOne,
    getPlayerTwo,
    placePlayerOneShips,
    placePlayerTwoShips,
    getPlayerOneBoard,
    getPlayerTwoBoard,
    getPlayerOneShips,
    getPlayerTwoShips,
    gameIsOver,
    move,
  };
};

module.exports = gameLoop;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board.push([]);
    for (let j = 0; j < 10; j += 1) {
      board[i].push('');
    }
  }

  const getBoard = () => board;

  const carrier = ship(5);
  const battleship = ship(4);
  const cruiser = ship(3);
  const submarine = ship(3);
  const destroyer = ship(2);

  const allShips = [carrier, battleship, cruiser, submarine, destroyer];

  const getAllShips = () => allShips;

  const shipSelection = (shipCode) => {
    if (shipCode === 'de') {
      return destroyer;
    } if (shipCode === 'ca') {
      return carrier;
    } if (shipCode === 'ba') {
      return battleship;
    } if (shipCode === 'cr') {
      return cruiser;
    }
    return submarine;
  };

  const placeShip = (shipCode, axis, coordinates) => {
    const xCoordinate = coordinates[0];
    const yCoordinate = coordinates[1];
    const currentShip = shipSelection(shipCode);
    const shipLength = currentShip.length;

    if (axis === 'x' && (yCoordinate + shipLength <= 10)) {
      for (let i = yCoordinate; i < yCoordinate + shipLength; i += 1) {
        board[xCoordinate][i] = shipCode + (i - yCoordinate).toString();
      }
    } else if (axis === 'y' && (xCoordinate + shipLength <= 10)) {
      for (let i = xCoordinate; i < xCoordinate + shipLength; i += 1) {
        board[i][yCoordinate] = shipCode + (i - xCoordinate).toString();
      }
    }
  };

  const receiveAttack = (coordinates) => {
    const xCoordinate = coordinates[0];
    const yCoordinate = coordinates[1];
    const attackedSpot = board[xCoordinate][yCoordinate];
    if (attackedSpot !== '' && attackedSpot !== 'm') {
      const currentShip = shipSelection(attackedSpot.slice(0, 2));
      currentShip.hit(attackedSpot.slice(2));
      board[xCoordinate][yCoordinate] = 'X';
    } else if (attackedSpot === '') {
      board[xCoordinate][yCoordinate] = 'm';
    }
  };

  const allSunk = () => {
    let allSunkStatus = true;
    allShips.forEach((shipElement) => {
      if (shipElement.isSunk() !== true) {
        allSunkStatus = false;
      }
    });
    return allSunkStatus;
  };

  return {
    getBoard, getAllShips, placeShip, receiveAttack, allSunk,
  };
};

module.exports = gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

const player = (name) => {
  // const board = gameboard();

  let legalMoves = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      legalMoves.push([i, j]);
    }
  }

  const getLegalMoves = () => legalMoves;

  const setLegalMoves = (newList) => { legalMoves = newList; };

  const saveAttackMove = (newMove) => {
    setLegalMoves(getLegalMoves().filter((move) => (
      (move[0] !== newMove[0]) || (move[1] !== newMove[1])
    )));
  };

  const makeRandomMove = () => (
    getLegalMoves()[Math.floor(Math.random() * (getLegalMoves().length - 1))]
  );

  return {
    name, getLegalMoves, saveAttackMove, makeRandomMove,
  };
};

module.exports = player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const ship = (length) => {
  const shipArray = [];

  for (let i = 0; i < length; i += 1) {
    shipArray.push('O');
  }

  const hit = (position) => {
    shipArray[position] = 'X';
  };

  const isSunk = () => {
    const hitArray = shipArray.filter((position) => position !== 'O');
    return hitArray.length === length;
  };

  return {
    length, shipArray, hit, isSunk,
  };
};

module.exports = ship;


/***/ }),

/***/ "./src/OmbudsmanAlternate-6YvDq.otf":
/*!******************************************!*\
  !*** ./src/OmbudsmanAlternate-6YvDq.otf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "16cc09dbd9f5d34be1be.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const gameLoop = __webpack_require__(/*! ./gameLoop */ "./src/gameLoop.js");

const userInterface = (() => {
  // Generating grids on the page:
  const battleGrids = document.querySelectorAll('.battleGrid');
  battleGrids.forEach((grid) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameSquare = document.createElement('div');
        gameSquare.classList.add('gameSquare');
        gameSquare.classList.add(`${i}${j}`);
        grid.appendChild(gameSquare);
      }
    }
  });

  // Create a variable for axis chosen:
  let axis = 'x';

  const axisButton = document.querySelector('#axis');
  axisButton.addEventListener('click', () => {
    if (axisButton.textContent === 'horizontal') {
      axis = 'y';
      axisButton.textContent = 'vertical';
    } else {
      axis = 'x';
      axisButton.textContent = 'horizontal';
    }
  });

  // Create an array for the lengths of the ships that needs to be placed. Remove when placed:
  const shipLengths = [5, 4, 3, 3, 2];

  // Create an array for the coordinates to place the ships:
  const shipCoordinates = [];
  const takenSquares = [];
  const shipAxes = [];

  // Define function for hovering over squares that are on the grid:
  const selectionGrid = document.querySelector('#selectionGrid');
  const shipHover = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);
    if (axis === 'x') {
      if (column <= 10 - length) {
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.add('hover');
        }
      }
    } else if (axis === 'y') {
      if (row <= 10 - length) {
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.add('hover');
        }
      }
    }
  };

  // Define function for when the mouse comes off the square in the grid:
  const shipNoHover = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);
    if (axis === 'x') {
      if (column <= 10 - length) {
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.remove('hover');
        }
      }
    } else if (axis === 'y') {
      if (row <= 10 - length) {
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.remove('hover');
        }
      }
    }
  };

  // Define mouseover and mouseout events for each grid square:
  const selectionSquares = document.querySelectorAll('#selectionGrid .gameSquare');
  selectionSquares.forEach((square) => square.addEventListener('mouseover', (e) => {
    shipHover(e, shipLengths[0]);
  }));
  selectionSquares.forEach((square) => square.addEventListener('mouseout', (e) => {
    shipNoHover(e, shipLengths[0]);
  }));

  // Define function to place the ships on the grid:
  const shipPlacement = (e, length) => {
    const row = Number(e.target.classList[1][0]);
    const column = Number(e.target.classList[1][1]);

    const shipSquares = [];

    if (axis === 'x') {
      // Adding the squares the current ship will take up to an array:
      for (let i = column; i < column + length; i += 1) {
        shipSquares.push([row, i]);
      }

      // Checking to see if any of the squares are taken:
      for (let i = 0; i < shipSquares.length; i += 1) {
        if (takenSquares.filter((coordinate) => ((coordinate[0] === shipSquares[i][0])
        && (coordinate[1] === shipSquares[i][1]))).length !== 0) {
          return;
        }
      }

      // Add the class to change background and save the coordinates
      if (column <= 10 - length) {
        shipCoordinates.push([row, column]);
        shipAxes.push(axis);
        for (let i = column; i < column + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${row}${i}`)[0];
          square.classList.add('select');
          // takenSquares.push([row, i]);
        }
        takenSquares.push(...shipSquares);
        shipLengths.splice(0, 1);
      }
    } else if (axis === 'y') {
      for (let i = row; i < row + length; i += 1) {
        shipSquares.push([i, column]);
      }

      for (let i = 0; i < shipSquares.length; i += 1) {
        if (takenSquares.filter((coordinate) => ((coordinate[0] === shipSquares[i][0])
        && (coordinate[1] === shipSquares[i][1]))).length !== 0) {
          return;
        }
      }

      if (row <= 10 - length) {
        shipCoordinates.push([row, column]);
        shipAxes.push(axis);
        for (let i = row; i < row + length; i += 1) {
          const square = selectionGrid.getElementsByClassName(`gameSquare ${i}${column}`)[0];
          square.classList.add('select');
          takenSquares.push([i, column]);
        }
        shipLengths.splice(0, 1);
      }
    }
  };

  // Define event to place ships on the grid:
  selectionSquares.forEach((square) => square.addEventListener('click', (e) => {
    shipPlacement(e, shipLengths[0]);
  }));

  // Start a new game:
  const newGame = gameLoop();

  // Defining the function to display player one's grid which includes the ships
  const playerOneGrid = document.querySelector('#playerOneGrid');
  const displayPlayerOneBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare !== '' && oneSquare !== 'm' && oneSquare !== 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.style.backgroundColor = 'rgb(212, 209, 209)';
        } else if (oneSquare === 'm') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="rgb(130, 127, 127)" />
            </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerOneGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="brown" />
            </svg>`;
        }
      }
    }
  };

  // Display player one's grid before the player makes the first move
  // displayPlayerOneBoard(newGame.getPlayerOneBoard());

  // Player two's grid doesn't include the ships
  const playerTwoGrid = document.querySelector('#playerTwoGrid');
  const displayPlayerTwoBoard = (board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const oneSquare = board[i][j];
        if (oneSquare === 'm') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="rgb(130, 127, 127)" />
            </svg>`;
        } else if (oneSquare === 'X') {
          const updateSquare = playerTwoGrid.getElementsByClassName(`gameSquare ${i}${j}`)[0];
          updateSquare.style.backgroundColor = 'rgb(212, 209, 209)';
          updateSquare.innerHTML = `
            <svg height="10" width="10">
              <circle cx="5" cy="5" r="5" stroke="" stroke-width="3" fill="brown" />
            </svg>`;
        }
      }
    }
  };

  // Pressing start game button has to send the ship locations to the game loop:
  const startGameButton = document.querySelector('#startGame');
  startGameButton.addEventListener('click', () => {
    if (shipLengths.length === 0) {
      newGame.placePlayerOneShips(shipCoordinates, shipAxes);
      newGame.placePlayerTwoShips();

      const mainMenu = document.querySelector('#mainMenu');
      mainMenu.style.display = 'none';

      displayPlayerOneBoard(newGame.getPlayerOneBoard());
      displayPlayerTwoBoard(newGame.getPlayerTwoBoard());
    }
  });

  // Getting the remaining ships for each player means looping through the allShips array
  const getRemainingShips = (ships) => {
    let remainingShips = 5;
    ships.forEach((ship) => {
      if (ship.isSunk()) {
        remainingShips -= 1;
      }
    });
    return remainingShips;
  };

  // DOM interation to change the number of ships
  const playerOneRemaining = document.querySelector('#playerOneRemaining');
  const playerTwoRemaining = document.querySelector('#playerTwoRemaining');
  const displayRemainingShips = () => {
    playerOneRemaining.textContent = (playerOneRemaining.textContent.slice(0, 17)
    + getRemainingShips(newGame.getPlayerOneShips()).toString());

    playerTwoRemaining.textContent = (playerTwoRemaining.textContent.slice(0, 17)
    + getRemainingShips(newGame.getPlayerTwoShips()).toString());
  };

  const displayGameOver = () => {
    const gameOverDiv = document.querySelector('#gameOver');
    gameOverDiv.style.display = 'flex';

    if (playerOneRemaining.textContent === 'Ships Remaining: 0') {
      const gameOverMessage = document.querySelector('#gameOverMessage');
      gameOverMessage.textContent = 'Game Over! Try again?';
    }

    const backToMenu = document.querySelector('#backToMenu');
    backToMenu.addEventListener('click', () => {
      window.location.reload();
    });
  };

  /* Each square on player two's grid has an event listener which records the move from player one
  and generates a random move from player two */
  const computerGameSquares = document.querySelectorAll('#playerTwoGrid .gameSquare');
  computerGameSquares.forEach((square) => square.addEventListener('click', () => {
    if (!newGame.gameIsOver()) {
      const selectedCoord = [Number(square.classList[1][0]), Number(square.classList[1][1])];
      if (newGame.getPlayerOne().getLegalMoves().filter((move) => ((move[0] === selectedCoord[0])
      && (move[1] === selectedCoord[1]))).length !== 0) {
        newGame.move(selectedCoord);
        displayPlayerOneBoard(newGame.getPlayerOneBoard());
        displayPlayerTwoBoard(newGame.getPlayerTwoBoard());
        displayRemainingShips();
        if (newGame.gameIsOver()) {
          displayGameOver();
        }
      }
    } else {
      displayGameOver();
    }
  }));
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIk9tYnVkc21hbkFsdGVybmF0ZS02WXZEcS5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IG1pbGl0YXJ5O1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBtaWxpdGFyeTtcXG59XFxuXFxuI2JvdGhHcmlkcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmJhdHRsZUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5nYW1lU3F1YXJlIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAxODIsIDIzMCwgMC41KTtcXG59XFxuXFxuI3JlbWFpbmluZ1NoaXBEaXZzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVtYWluaW5nU2hpcHMge1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIHdpZHRoOiA0MThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNnYW1lT3ZlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyLCAzNCwgNTkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0NywgMjQ3KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jZ2FtZU92ZXJNZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMiwgMzQsIDU5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNiYWNrVG9NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHNjYWxlOiAwLjk7XFxufVxcblxcbiNtYWluTWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgICAgXFxuICAgIGNvbG9yOiByZ2IoMiwgMzQsIDU5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODYsIDE4NiwgMC42KTtcXG59XFxuXFxuI2luc3RydWN0aW9ucywgI2dyaWRBbmRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0VBQXdFO0lBQ3hFLHFFQUFxRTtJQUNyRSxRQUFRO0lBQ1IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBtaWxpdGFyeTtcXG4gICAgc3JjOiB1cmwoT21idWRzbWFuQWx0ZXJuYXRlLTZZdkRxLm90Zik7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBtaWxpdGFyeTtcXG59XFxuXFxuI2JvdGhHcmlkcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmJhdHRsZUdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweCA0MHB4IDQwcHggNDBweDtcXG4gICAgZ2FwOiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcblxcbi5nYW1lU3F1YXJlIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE5LCAxODIsIDIzMCwgMC41KTtcXG59XFxuXFxuI3JlbWFpbmluZ1NoaXBEaXZzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVtYWluaW5nU2hpcHMge1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIHdpZHRoOiA0MThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiNnYW1lT3ZlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyLCAzNCwgNTkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI0NywgMjQ3KTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4jZ2FtZU92ZXJNZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMiwgMzQsIDU5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNiYWNrVG9NZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHNjYWxlOiAwLjk7XFxufVxcblxcbiNtYWluTWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgICAgXFxuICAgIGNvbG9yOiByZ2IoMiwgMzQsIDU5KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDYwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNlbGVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCAxODYsIDE4NiwgMC42KTtcXG59XFxuXFxuI2luc3RydWN0aW9ucywgI2dyaWRBbmRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5wIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDIsIDM0LCA1OSk7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IGdhbWVMb29wID0gKHBsYXllck9uZU5hbWUgPSAnUGxheWVyJywgcGxheWVyVHdvTmFtZSA9ICdDb21wdXRlcicpID0+IHtcbiAgY29uc3QgcGxheWVyT25lID0gcGxheWVyKHBsYXllck9uZU5hbWUpO1xuICBjb25zdCBwbGF5ZXJUd28gPSBwbGF5ZXIocGxheWVyVHdvTmFtZSk7XG5cbiAgY29uc3QgZ2V0UGxheWVyT25lID0gKCkgPT4gcGxheWVyT25lO1xuICBjb25zdCBnZXRQbGF5ZXJUd28gPSAoKSA9PiBwbGF5ZXJUd287XG5cbiAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBnYW1lYm9hcmQoKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBnYW1lYm9hcmQoKTtcblxuICAvKiBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAoJ2NhJywgJ3gnLCBbMCwgMl0pO1xuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAoJ2JhJywgJ3gnLCBbMiwgM10pO1xuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAoJ2NyJywgJ3knLCBbNCwgMV0pO1xuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAoJ3N1JywgJ3gnLCBbNiwgNl0pO1xuICBwbGF5ZXJPbmVCb2FyZC5wbGFjZVNoaXAoJ2RlJywgJ3knLCBbOCwgMl0pOyAqL1xuXG4gIC8qIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgnY2EnLCAneCcsIFswLCAyXSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgnYmEnLCAneCcsIFsyLCAzXSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgnY3InLCAneScsIFs0LCAxXSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgnc3UnLCAneCcsIFs2LCA2XSk7XG4gIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcCgnZGUnLCAneScsIFs4LCAyXSk7ICovXG5cbiAgY29uc3Qgc2hpcENvZGVzID0gWydjYScsICdiYScsICdjcicsICdzdScsICdkZSddO1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyT25lU2hpcHMgPSAoY29vcmRzLCBheGVzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgIHBsYXllck9uZUJvYXJkLnBsYWNlU2hpcChzaGlwQ29kZXNbaV0sIGF4ZXNbaV0sIGNvb3Jkc1tpXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYWNlUGxheWVyVHdvU2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG5cbiAgICBsZXQgYXZhaWxhYmxlU3F1YXJlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGF2YWlsYWJsZVNxdWFyZXMucHVzaChbaSwgal0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRha2VuU3F1YXJlcyA9IFtdO1xuXG4gICAgY29uc3QgcmFuZG9tQXhpcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgICBpZiAocmFuZG9tTnVtYmVyID4gMC41KSB7XG4gICAgICAgIHJldHVybiAneCc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3knO1xuICAgIH07XG5cbiAgICBsZXQgYXhpcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgYXhpcyA9IHJhbmRvbUF4aXMoKTtcbiAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgbGV0IGxlZ2FsU3F1YXJlcyA9IGF2YWlsYWJsZVNxdWFyZXMuZmlsdGVyKChzcXVhcmUpID0+IHNxdWFyZVsxXSA8PSAoMTAgLSBzaGlwTGVuZ3Roc1tpXSkpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRha2VuU3F1YXJlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgc2hpcExlbmd0aHNbaV07IGsgKz0gMSkge1xuICAgICAgICAgICAgbGVnYWxTcXVhcmVzID0gbGVnYWxTcXVhcmVzLmZpbHRlcigoc3F1YXJlKSA9PiAhKHNxdWFyZVswXSA9PT0gdGFrZW5TcXVhcmVzW2pdWzBdXG4gICAgICAgICAgICAgICYmIHNxdWFyZVsxXSA9PT0gKHRha2VuU3F1YXJlc1tqXVsxXSAtIGspKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3F1YXJlUGljayA9IGxlZ2FsU3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbFNxdWFyZXMubGVuZ3RoKV07XG4gICAgICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChzaGlwQ29kZXNbaV0sIGF4aXMsIHNxdWFyZVBpY2spO1xuICAgICAgICBjb25zdCByb3cgPSBzcXVhcmVQaWNrWzBdO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBzcXVhcmVQaWNrWzFdO1xuICAgICAgICBmb3IgKGxldCBqID0gY29sdW1uOyBqIDwgY29sdW1uICsgc2hpcExlbmd0aHNbaV07IGogKz0gMSkge1xuICAgICAgICAgIGF2YWlsYWJsZVNxdWFyZXMgPSBhdmFpbGFibGVTcXVhcmVzLmZpbHRlcihcbiAgICAgICAgICAgIChzcXVhcmUpID0+ICEoc3F1YXJlWzBdID09PSByb3cgJiYgc3F1YXJlWzFdID09PSBqKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHRha2VuU3F1YXJlcy5wdXNoKFtyb3csIGpdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgbGV0IGxlZ2FsU3F1YXJlcyA9IGF2YWlsYWJsZVNxdWFyZXMuZmlsdGVyKChzcXVhcmUpID0+IHNxdWFyZVswXSA8PSAoMTAgLSBzaGlwTGVuZ3Roc1tpXSkpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRha2VuU3F1YXJlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgc2hpcExlbmd0aHNbaV07IGsgKz0gMSkge1xuICAgICAgICAgICAgbGVnYWxTcXVhcmVzID0gbGVnYWxTcXVhcmVzLmZpbHRlcigoc3F1YXJlKSA9PiAhKHNxdWFyZVswXSA9PT0gKHRha2VuU3F1YXJlc1tqXVswXSAtIGspXG4gICAgICAgICAgICAgICYmIHNxdWFyZVsxXSA9PT0gdGFrZW5TcXVhcmVzW2pdWzFdKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3F1YXJlUGljayA9IGxlZ2FsU3F1YXJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbFNxdWFyZXMubGVuZ3RoKV07XG4gICAgICAgIHBsYXllclR3b0JvYXJkLnBsYWNlU2hpcChzaGlwQ29kZXNbaV0sIGF4aXMsIHNxdWFyZVBpY2spO1xuICAgICAgICBjb25zdCByb3cgPSBzcXVhcmVQaWNrWzBdO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBzcXVhcmVQaWNrWzFdO1xuICAgICAgICBmb3IgKGxldCBqID0gcm93OyBqIDwgcm93ICsgc2hpcExlbmd0aHNbaV07IGogKz0gMSkge1xuICAgICAgICAgIGF2YWlsYWJsZVNxdWFyZXMgPSBhdmFpbGFibGVTcXVhcmVzLmZpbHRlcigoc3F1YXJlKSA9PiAhKHNxdWFyZVswXSA9PT0galxuICAgICAgICAgICAgJiYgc3F1YXJlWzFdID09PSBjb2x1bW4pKTtcbiAgICAgICAgICB0YWtlblNxdWFyZXMucHVzaChbaiwgY29sdW1uXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0UGxheWVyT25lQm9hcmQgPSAoKSA9PiBwbGF5ZXJPbmVCb2FyZC5nZXRCb2FyZCgpO1xuICBjb25zdCBnZXRQbGF5ZXJUd29Cb2FyZCA9ICgpID0+IHBsYXllclR3b0JvYXJkLmdldEJvYXJkKCk7XG5cbiAgY29uc3QgZ2V0UGxheWVyT25lU2hpcHMgPSAoKSA9PiBwbGF5ZXJPbmVCb2FyZC5nZXRBbGxTaGlwcygpO1xuICBjb25zdCBnZXRQbGF5ZXJUd29TaGlwcyA9ICgpID0+IHBsYXllclR3b0JvYXJkLmdldEFsbFNoaXBzKCk7XG5cbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuXG4gIGNvbnN0IGdhbWVJc092ZXIgPSAoKSA9PiBnYW1lT3ZlcjtcblxuICBjb25zdCBtb3ZlID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXIgPT09IHBsYXllck9uZSkge1xuICAgICAgcGxheWVyT25lLnNhdmVBdHRhY2tNb3ZlKGNvb3JkaW5hdGVzKTtcbiAgICAgIHBsYXllclR3b0JvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgICAgaWYgKHBsYXllclR3b0JvYXJkLmFsbFN1bmsoKSkge1xuICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgICBjdXJyZW50UGxheWVyID0gcGxheWVyVHdvO1xuICAgICAgbW92ZShwbGF5ZXJUd28ubWFrZVJhbmRvbU1vdmUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclR3by5zYXZlQXR0YWNrTW92ZShjb29yZGluYXRlcyk7XG4gICAgICBwbGF5ZXJPbmVCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICAgIGlmIChwbGF5ZXJPbmVCb2FyZC5hbGxTdW5rKCkpIHtcbiAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY3VycmVudFBsYXllciA9IHBsYXllck9uZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQbGF5ZXJPbmUsXG4gICAgZ2V0UGxheWVyVHdvLFxuICAgIHBsYWNlUGxheWVyT25lU2hpcHMsXG4gICAgcGxhY2VQbGF5ZXJUd29TaGlwcyxcbiAgICBnZXRQbGF5ZXJPbmVCb2FyZCxcbiAgICBnZXRQbGF5ZXJUd29Cb2FyZCxcbiAgICBnZXRQbGF5ZXJPbmVTaGlwcyxcbiAgICBnZXRQbGF5ZXJUd29TaGlwcyxcbiAgICBnYW1lSXNPdmVyLFxuICAgIG1vdmUsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVMb29wO1xuIiwiY29uc3Qgc2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGJvYXJkLnB1c2goW10pO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgYm9hcmRbaV0ucHVzaCgnJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBjYXJyaWVyID0gc2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoNCk7XG4gIGNvbnN0IGNydWlzZXIgPSBzaGlwKDMpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKDMpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDIpO1xuXG4gIGNvbnN0IGFsbFNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGNydWlzZXIsIHN1Ym1hcmluZSwgZGVzdHJveWVyXTtcblxuICBjb25zdCBnZXRBbGxTaGlwcyA9ICgpID0+IGFsbFNoaXBzO1xuXG4gIGNvbnN0IHNoaXBTZWxlY3Rpb24gPSAoc2hpcENvZGUpID0+IHtcbiAgICBpZiAoc2hpcENvZGUgPT09ICdkZScpIHtcbiAgICAgIHJldHVybiBkZXN0cm95ZXI7XG4gICAgfSBpZiAoc2hpcENvZGUgPT09ICdjYScpIHtcbiAgICAgIHJldHVybiBjYXJyaWVyO1xuICAgIH0gaWYgKHNoaXBDb2RlID09PSAnYmEnKSB7XG4gICAgICByZXR1cm4gYmF0dGxlc2hpcDtcbiAgICB9IGlmIChzaGlwQ29kZSA9PT0gJ2NyJykge1xuICAgICAgcmV0dXJuIGNydWlzZXI7XG4gICAgfVxuICAgIHJldHVybiBzdWJtYXJpbmU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBDb2RlLCBheGlzLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHhDb29yZGluYXRlID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeUNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBTZWxlY3Rpb24oc2hpcENvZGUpO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBjdXJyZW50U2hpcC5sZW5ndGg7XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnICYmICh5Q29vcmRpbmF0ZSArIHNoaXBMZW5ndGggPD0gMTApKSB7XG4gICAgICBmb3IgKGxldCBpID0geUNvb3JkaW5hdGU7IGkgPCB5Q29vcmRpbmF0ZSArIHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFt4Q29vcmRpbmF0ZV1baV0gPSBzaGlwQ29kZSArIChpIC0geUNvb3JkaW5hdGUpLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChheGlzID09PSAneScgJiYgKHhDb29yZGluYXRlICsgc2hpcExlbmd0aCA8PSAxMCkpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4Q29vcmRpbmF0ZTsgaSA8IHhDb29yZGluYXRlICsgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW3lDb29yZGluYXRlXSA9IHNoaXBDb2RlICsgKGkgLSB4Q29vcmRpbmF0ZSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IHhDb29yZGluYXRlID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgeUNvb3JkaW5hdGUgPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCBhdHRhY2tlZFNwb3QgPSBib2FyZFt4Q29vcmRpbmF0ZV1beUNvb3JkaW5hdGVdO1xuICAgIGlmIChhdHRhY2tlZFNwb3QgIT09ICcnICYmIGF0dGFja2VkU3BvdCAhPT0gJ20nKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBTZWxlY3Rpb24oYXR0YWNrZWRTcG90LnNsaWNlKDAsIDIpKTtcbiAgICAgIGN1cnJlbnRTaGlwLmhpdChhdHRhY2tlZFNwb3Quc2xpY2UoMikpO1xuICAgICAgYm9hcmRbeENvb3JkaW5hdGVdW3lDb29yZGluYXRlXSA9ICdYJztcbiAgICB9IGVsc2UgaWYgKGF0dGFja2VkU3BvdCA9PT0gJycpIHtcbiAgICAgIGJvYXJkW3hDb29yZGluYXRlXVt5Q29vcmRpbmF0ZV0gPSAnbSc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgbGV0IGFsbFN1bmtTdGF0dXMgPSB0cnVlO1xuICAgIGFsbFNoaXBzLmZvckVhY2goKHNoaXBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoc2hpcEVsZW1lbnQuaXNTdW5rKCkgIT09IHRydWUpIHtcbiAgICAgICAgYWxsU3Vua1N0YXR1cyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rU3RhdHVzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsIGdldEFsbFNoaXBzLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZDtcbiIsImNvbnN0IGdhbWVib2FyZCA9IHJlcXVpcmUoJy4vZ2FtZWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XG4gIC8vIGNvbnN0IGJvYXJkID0gZ2FtZWJvYXJkKCk7XG5cbiAgbGV0IGxlZ2FsTW92ZXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBsZWdhbE1vdmVzLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRMZWdhbE1vdmVzID0gKCkgPT4gbGVnYWxNb3ZlcztcblxuICBjb25zdCBzZXRMZWdhbE1vdmVzID0gKG5ld0xpc3QpID0+IHsgbGVnYWxNb3ZlcyA9IG5ld0xpc3Q7IH07XG5cbiAgY29uc3Qgc2F2ZUF0dGFja01vdmUgPSAobmV3TW92ZSkgPT4ge1xuICAgIHNldExlZ2FsTW92ZXMoZ2V0TGVnYWxNb3ZlcygpLmZpbHRlcigobW92ZSkgPT4gKFxuICAgICAgKG1vdmVbMF0gIT09IG5ld01vdmVbMF0pIHx8IChtb3ZlWzFdICE9PSBuZXdNb3ZlWzFdKVxuICAgICkpKTtcbiAgfTtcblxuICBjb25zdCBtYWtlUmFuZG9tTW92ZSA9ICgpID0+IChcbiAgICBnZXRMZWdhbE1vdmVzKClbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGdldExlZ2FsTW92ZXMoKS5sZW5ndGggLSAxKSldXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLCBnZXRMZWdhbE1vdmVzLCBzYXZlQXR0YWNrTW92ZSwgbWFrZVJhbmRvbU1vdmUsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllcjtcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaCgnTycpO1xuICB9XG5cbiAgY29uc3QgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgc2hpcEFycmF5W3Bvc2l0aW9uXSA9ICdYJztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgY29uc3QgaGl0QXJyYXkgPSBzaGlwQXJyYXkuZmlsdGVyKChwb3NpdGlvbikgPT4gcG9zaXRpb24gIT09ICdPJyk7XG4gICAgcmV0dXJuIGhpdEFycmF5Lmxlbmd0aCA9PT0gbGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLCBzaGlwQXJyYXksIGhpdCwgaXNTdW5rLFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZ2FtZUxvb3AgPSByZXF1aXJlKCcuL2dhbWVMb29wJyk7XG5cbmNvbnN0IHVzZXJJbnRlcmZhY2UgPSAoKCkgPT4ge1xuICAvLyBHZW5lcmF0aW5nIGdyaWRzIG9uIHRoZSBwYWdlOlxuICBjb25zdCBiYXR0bGVHcmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXR0bGVHcmlkJyk7XG4gIGJhdHRsZUdyaWRzLmZvckVhY2goKGdyaWQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVTcXVhcmUuY2xhc3NMaXN0LmFkZCgnZ2FtZVNxdWFyZScpO1xuICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoYCR7aX0ke2p9YCk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ2FtZVNxdWFyZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGUgYSB2YXJpYWJsZSBmb3IgYXhpcyBjaG9zZW46XG4gIGxldCBheGlzID0gJ3gnO1xuXG4gIGNvbnN0IGF4aXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXhpcycpO1xuICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChheGlzQnV0dG9uLnRleHRDb250ZW50ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGF4aXMgPSAneSc7XG4gICAgICBheGlzQnV0dG9uLnRleHRDb250ZW50ID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgYXhpcyA9ICd4JztcbiAgICAgIGF4aXNCdXR0b24udGV4dENvbnRlbnQgPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9KTtcblxuICAvLyBDcmVhdGUgYW4gYXJyYXkgZm9yIHRoZSBsZW5ndGhzIG9mIHRoZSBzaGlwcyB0aGF0IG5lZWRzIHRvIGJlIHBsYWNlZC4gUmVtb3ZlIHdoZW4gcGxhY2VkOlxuICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcblxuICAvLyBDcmVhdGUgYW4gYXJyYXkgZm9yIHRoZSBjb29yZGluYXRlcyB0byBwbGFjZSB0aGUgc2hpcHM6XG4gIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IFtdO1xuICBjb25zdCB0YWtlblNxdWFyZXMgPSBbXTtcbiAgY29uc3Qgc2hpcEF4ZXMgPSBbXTtcblxuICAvLyBEZWZpbmUgZnVuY3Rpb24gZm9yIGhvdmVyaW5nIG92ZXIgc3F1YXJlcyB0aGF0IGFyZSBvbiB0aGUgZ3JpZDpcbiAgY29uc3Qgc2VsZWN0aW9uR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rpb25HcmlkJyk7XG4gIGNvbnN0IHNoaXBIb3ZlciA9IChlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdKTtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0WzFdWzFdKTtcbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICBpZiAoY29sdW1uIDw9IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBjb2x1bW47IGkgPCBjb2x1bW4gKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNlbGVjdGlvbkdyaWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ2FtZVNxdWFyZSAke3Jvd30ke2l9YClbMF07XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF4aXMgPT09ICd5Jykge1xuICAgICAgaWYgKHJvdyA8PSAxMCAtIGxlbmd0aCkge1xuICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBzcXVhcmUgPSBzZWxlY3Rpb25HcmlkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGdhbWVTcXVhcmUgJHtpfSR7Y29sdW1ufWApWzBdO1xuICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIERlZmluZSBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbW91c2UgY29tZXMgb2ZmIHRoZSBzcXVhcmUgaW4gdGhlIGdyaWQ6XG4gIGNvbnN0IHNoaXBOb0hvdmVyID0gKGUsIGxlbmd0aCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbMV1bMF0pO1xuICAgIGNvbnN0IGNvbHVtbiA9IE51bWJlcihlLnRhcmdldC5jbGFzc0xpc3RbMV1bMV0pO1xuICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgIGlmIChjb2x1bW4gPD0gMTAgLSBsZW5ndGgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGNvbHVtbiArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlID0gc2VsZWN0aW9uR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICBpZiAocm93IDw9IDEwIC0gbGVuZ3RoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCByb3cgKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHNlbGVjdGlvbkdyaWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgZ2FtZVNxdWFyZSAke2l9JHtjb2x1bW59YClbMF07XG4gICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gRGVmaW5lIG1vdXNlb3ZlciBhbmQgbW91c2VvdXQgZXZlbnRzIGZvciBlYWNoIGdyaWQgc3F1YXJlOlxuICBjb25zdCBzZWxlY3Rpb25TcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NlbGVjdGlvbkdyaWQgLmdhbWVTcXVhcmUnKTtcbiAgc2VsZWN0aW9uU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgIHNoaXBIb3ZlcihlLCBzaGlwTGVuZ3Roc1swXSk7XG4gIH0pKTtcbiAgc2VsZWN0aW9uU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgc2hpcE5vSG92ZXIoZSwgc2hpcExlbmd0aHNbMF0pO1xuICB9KSk7XG5cbiAgLy8gRGVmaW5lIGZ1bmN0aW9uIHRvIHBsYWNlIHRoZSBzaGlwcyBvbiB0aGUgZ3JpZDpcbiAgY29uc3Qgc2hpcFBsYWNlbWVudCA9IChlLCBsZW5ndGgpID0+IHtcbiAgICBjb25zdCByb3cgPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0WzFdWzBdKTtcbiAgICBjb25zdCBjb2x1bW4gPSBOdW1iZXIoZS50YXJnZXQuY2xhc3NMaXN0WzFdWzFdKTtcblxuICAgIGNvbnN0IHNoaXBTcXVhcmVzID0gW107XG5cbiAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNxdWFyZXMgdGhlIGN1cnJlbnQgc2hpcCB3aWxsIHRha2UgdXAgdG8gYW4gYXJyYXk6XG4gICAgICBmb3IgKGxldCBpID0gY29sdW1uOyBpIDwgY29sdW1uICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbcm93LCBpXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNraW5nIHRvIHNlZSBpZiBhbnkgb2YgdGhlIHNxdWFyZXMgYXJlIHRha2VuOlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU3F1YXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGFrZW5TcXVhcmVzLmZpbHRlcigoY29vcmRpbmF0ZSkgPT4gKChjb29yZGluYXRlWzBdID09PSBzaGlwU3F1YXJlc1tpXVswXSlcbiAgICAgICAgJiYgKGNvb3JkaW5hdGVbMV0gPT09IHNoaXBTcXVhcmVzW2ldWzFdKSkpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGNsYXNzIHRvIGNoYW5nZSBiYWNrZ3JvdW5kIGFuZCBzYXZlIHRoZSBjb29yZGluYXRlc1xuICAgICAgaWYgKGNvbHVtbiA8PSAxMCAtIGxlbmd0aCkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgc2hpcEF4ZXMucHVzaChheGlzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbHVtbjsgaSA8IGNvbHVtbiArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlID0gc2VsZWN0aW9uR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7cm93fSR7aX1gKVswXTtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgICAgICAgLy8gdGFrZW5TcXVhcmVzLnB1c2goW3JvdywgaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRha2VuU3F1YXJlcy5wdXNoKC4uLnNoaXBTcXVhcmVzKTtcbiAgICAgICAgc2hpcExlbmd0aHMuc3BsaWNlKDAsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgcm93ICsgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc2hpcFNxdWFyZXMucHVzaChbaSwgY29sdW1uXSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcFNxdWFyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRha2VuU3F1YXJlcy5maWx0ZXIoKGNvb3JkaW5hdGUpID0+ICgoY29vcmRpbmF0ZVswXSA9PT0gc2hpcFNxdWFyZXNbaV1bMF0pXG4gICAgICAgICYmIChjb29yZGluYXRlWzFdID09PSBzaGlwU3F1YXJlc1tpXVsxXSkpKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJvdyA8PSAxMCAtIGxlbmd0aCkge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgc2hpcEF4ZXMucHVzaChheGlzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA8IHJvdyArIGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3Qgc3F1YXJlID0gc2VsZWN0aW9uR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2NvbHVtbn1gKVswXTtcbiAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0Jyk7XG4gICAgICAgICAgdGFrZW5TcXVhcmVzLnB1c2goW2ksIGNvbHVtbl0pO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBMZW5ndGhzLnNwbGljZSgwLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gRGVmaW5lIGV2ZW50IHRvIHBsYWNlIHNoaXBzIG9uIHRoZSBncmlkOlxuICBzZWxlY3Rpb25TcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4gc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzaGlwUGxhY2VtZW50KGUsIHNoaXBMZW5ndGhzWzBdKTtcbiAgfSkpO1xuXG4gIC8vIFN0YXJ0IGEgbmV3IGdhbWU6XG4gIGNvbnN0IG5ld0dhbWUgPSBnYW1lTG9vcCgpO1xuXG4gIC8vIERlZmluaW5nIHRoZSBmdW5jdGlvbiB0byBkaXNwbGF5IHBsYXllciBvbmUncyBncmlkIHdoaWNoIGluY2x1ZGVzIHRoZSBzaGlwc1xuICBjb25zdCBwbGF5ZXJPbmVHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllck9uZUdyaWQnKTtcbiAgY29uc3QgZGlzcGxheVBsYXllck9uZUJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb25lU3F1YXJlID0gYm9hcmRbaV1bal07XG4gICAgICAgIGlmIChvbmVTcXVhcmUgIT09ICcnICYmIG9uZVNxdWFyZSAhPT0gJ20nICYmIG9uZVNxdWFyZSAhPT0gJ1gnKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlU3F1YXJlID0gcGxheWVyT25lR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2p9YClbMF07XG4gICAgICAgICAgdXBkYXRlU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjEyLCAyMDksIDIwOSknO1xuICAgICAgICB9IGVsc2UgaWYgKG9uZVNxdWFyZSA9PT0gJ20nKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlU3F1YXJlID0gcGxheWVyT25lR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2p9YClbMF07XG4gICAgICAgICAgdXBkYXRlU3F1YXJlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMTBcIiB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjVcIiBzdHJva2U9XCJcIiBzdHJva2Utd2lkdGg9XCIzXCIgZmlsbD1cInJnYigxMzAsIDEyNywgMTI3KVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgICAgICB9IGVsc2UgaWYgKG9uZVNxdWFyZSA9PT0gJ1gnKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlU3F1YXJlID0gcGxheWVyT25lR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2p9YClbMF07XG4gICAgICAgICAgdXBkYXRlU3F1YXJlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMTBcIiB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjVcIiBzdHJva2U9XCJcIiBzdHJva2Utd2lkdGg9XCIzXCIgZmlsbD1cImJyb3duXCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gRGlzcGxheSBwbGF5ZXIgb25lJ3MgZ3JpZCBiZWZvcmUgdGhlIHBsYXllciBtYWtlcyB0aGUgZmlyc3QgbW92ZVxuICAvLyBkaXNwbGF5UGxheWVyT25lQm9hcmQobmV3R2FtZS5nZXRQbGF5ZXJPbmVCb2FyZCgpKTtcblxuICAvLyBQbGF5ZXIgdHdvJ3MgZ3JpZCBkb2Vzbid0IGluY2x1ZGUgdGhlIHNoaXBzXG4gIGNvbnN0IHBsYXllclR3b0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyVHdvR3JpZCcpO1xuICBjb25zdCBkaXNwbGF5UGxheWVyVHdvQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBvbmVTcXVhcmUgPSBib2FyZFtpXVtqXTtcbiAgICAgICAgaWYgKG9uZVNxdWFyZSA9PT0gJ20nKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlU3F1YXJlID0gcGxheWVyVHdvR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2p9YClbMF07XG4gICAgICAgICAgdXBkYXRlU3F1YXJlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxzdmcgaGVpZ2h0PVwiMTBcIiB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjVcIiBzdHJva2U9XCJcIiBzdHJva2Utd2lkdGg9XCIzXCIgZmlsbD1cInJnYigxMzAsIDEyNywgMTI3KVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgICAgICB9IGVsc2UgaWYgKG9uZVNxdWFyZSA9PT0gJ1gnKSB7XG4gICAgICAgICAgY29uc3QgdXBkYXRlU3F1YXJlID0gcGxheWVyVHdvR3JpZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBnYW1lU3F1YXJlICR7aX0ke2p9YClbMF07XG4gICAgICAgICAgdXBkYXRlU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjEyLCAyMDksIDIwOSknO1xuICAgICAgICAgIHVwZGF0ZVNxdWFyZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3ZnIGhlaWdodD1cIjEwXCIgd2lkdGg9XCIxMFwiPlxuICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiNVwiIHI9XCI1XCIgc3Ryb2tlPVwiXCIgc3Ryb2tlLXdpZHRoPVwiM1wiIGZpbGw9XCJicm93blwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIFByZXNzaW5nIHN0YXJ0IGdhbWUgYnV0dG9uIGhhcyB0byBzZW5kIHRoZSBzaGlwIGxvY2F0aW9ucyB0byB0aGUgZ2FtZSBsb29wOlxuICBjb25zdCBzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lJyk7XG4gIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc2hpcExlbmd0aHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXdHYW1lLnBsYWNlUGxheWVyT25lU2hpcHMoc2hpcENvb3JkaW5hdGVzLCBzaGlwQXhlcyk7XG4gICAgICBuZXdHYW1lLnBsYWNlUGxheWVyVHdvU2hpcHMoKTtcblxuICAgICAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbk1lbnUnKTtcbiAgICAgIG1haW5NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGRpc3BsYXlQbGF5ZXJPbmVCb2FyZChuZXdHYW1lLmdldFBsYXllck9uZUJvYXJkKCkpO1xuICAgICAgZGlzcGxheVBsYXllclR3b0JvYXJkKG5ld0dhbWUuZ2V0UGxheWVyVHdvQm9hcmQoKSk7XG4gICAgfVxuICB9KTtcblxuICAvLyBHZXR0aW5nIHRoZSByZW1haW5pbmcgc2hpcHMgZm9yIGVhY2ggcGxheWVyIG1lYW5zIGxvb3BpbmcgdGhyb3VnaCB0aGUgYWxsU2hpcHMgYXJyYXlcbiAgY29uc3QgZ2V0UmVtYWluaW5nU2hpcHMgPSAoc2hpcHMpID0+IHtcbiAgICBsZXQgcmVtYWluaW5nU2hpcHMgPSA1O1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHJlbWFpbmluZ1NoaXBzIC09IDE7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlbWFpbmluZ1NoaXBzO1xuICB9O1xuXG4gIC8vIERPTSBpbnRlcmF0aW9uIHRvIGNoYW5nZSB0aGUgbnVtYmVyIG9mIHNoaXBzXG4gIGNvbnN0IHBsYXllck9uZVJlbWFpbmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXJPbmVSZW1haW5pbmcnKTtcbiAgY29uc3QgcGxheWVyVHdvUmVtYWluaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllclR3b1JlbWFpbmluZycpO1xuICBjb25zdCBkaXNwbGF5UmVtYWluaW5nU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxheWVyT25lUmVtYWluaW5nLnRleHRDb250ZW50ID0gKHBsYXllck9uZVJlbWFpbmluZy50ZXh0Q29udGVudC5zbGljZSgwLCAxNylcbiAgICArIGdldFJlbWFpbmluZ1NoaXBzKG5ld0dhbWUuZ2V0UGxheWVyT25lU2hpcHMoKSkudG9TdHJpbmcoKSk7XG5cbiAgICBwbGF5ZXJUd29SZW1haW5pbmcudGV4dENvbnRlbnQgPSAocGxheWVyVHdvUmVtYWluaW5nLnRleHRDb250ZW50LnNsaWNlKDAsIDE3KVxuICAgICsgZ2V0UmVtYWluaW5nU2hpcHMobmV3R2FtZS5nZXRQbGF5ZXJUd29TaGlwcygpKS50b1N0cmluZygpKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5R2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FtZU92ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXInKTtcbiAgICBnYW1lT3ZlckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgaWYgKHBsYXllck9uZVJlbWFpbmluZy50ZXh0Q29udGVudCA9PT0gJ1NoaXBzIFJlbWFpbmluZzogMCcpIHtcbiAgICAgIGNvbnN0IGdhbWVPdmVyTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lT3Zlck1lc3NhZ2UnKTtcbiAgICAgIGdhbWVPdmVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhIFRyeSBhZ2Fpbj8nO1xuICAgIH1cblxuICAgIGNvbnN0IGJhY2tUb01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja1RvTWVudScpO1xuICAgIGJhY2tUb01lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyogRWFjaCBzcXVhcmUgb24gcGxheWVyIHR3bydzIGdyaWQgaGFzIGFuIGV2ZW50IGxpc3RlbmVyIHdoaWNoIHJlY29yZHMgdGhlIG1vdmUgZnJvbSBwbGF5ZXIgb25lXG4gIGFuZCBnZW5lcmF0ZXMgYSByYW5kb20gbW92ZSBmcm9tIHBsYXllciB0d28gKi9cbiAgY29uc3QgY29tcHV0ZXJHYW1lU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXJUd29HcmlkIC5nYW1lU3F1YXJlJyk7XG4gIGNvbXB1dGVyR2FtZVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKCFuZXdHYW1lLmdhbWVJc092ZXIoKSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRDb29yZCA9IFtOdW1iZXIoc3F1YXJlLmNsYXNzTGlzdFsxXVswXSksIE51bWJlcihzcXVhcmUuY2xhc3NMaXN0WzFdWzFdKV07XG4gICAgICBpZiAobmV3R2FtZS5nZXRQbGF5ZXJPbmUoKS5nZXRMZWdhbE1vdmVzKCkuZmlsdGVyKChtb3ZlKSA9PiAoKG1vdmVbMF0gPT09IHNlbGVjdGVkQ29vcmRbMF0pXG4gICAgICAmJiAobW92ZVsxXSA9PT0gc2VsZWN0ZWRDb29yZFsxXSkpKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgbmV3R2FtZS5tb3ZlKHNlbGVjdGVkQ29vcmQpO1xuICAgICAgICBkaXNwbGF5UGxheWVyT25lQm9hcmQobmV3R2FtZS5nZXRQbGF5ZXJPbmVCb2FyZCgpKTtcbiAgICAgICAgZGlzcGxheVBsYXllclR3b0JvYXJkKG5ld0dhbWUuZ2V0UGxheWVyVHdvQm9hcmQoKSk7XG4gICAgICAgIGRpc3BsYXlSZW1haW5pbmdTaGlwcygpO1xuICAgICAgICBpZiAobmV3R2FtZS5nYW1lSXNPdmVyKCkpIHtcbiAgICAgICAgICBkaXNwbGF5R2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5R2FtZU92ZXIoKTtcbiAgICB9XG4gIH0pKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=