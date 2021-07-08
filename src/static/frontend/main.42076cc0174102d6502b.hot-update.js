/*! For license information please see main.42076cc0174102d6502b.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/correlation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n\n\n\n\nconst Correlation = ({\n  data1,\n  data2\n}) => {\n  const [corr, setCorr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n\n  const handleSubmit = e => {\n    if (data1 === data2) {\n      setCorr("You cannot correlate the same dataset");\n    } else if (!data1 || !data2) {\n      setCorr("You need to pick 2 datasets");\n    } else {\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/get-corr", requestOptions).then(response => response.json()).then(data => setCorr(data["corrVal"]));\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "submit",\n    class: "btn btn-primary btn-lg mt-5",\n    onClick: handleSubmit,\n    style: {\n      "color": "white"\n    }\n  }, "Get Corr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, corr));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Correlation);\n\n//# sourceURL=webpack://frontend/./src/components/correlation.js?')}},(function(e){"use strict";e.h=()=>"b438363c0b2322ec3912"}));