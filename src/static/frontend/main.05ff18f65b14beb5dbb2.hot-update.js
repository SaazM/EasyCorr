/*! For license information please see main.05ff18f65b14beb5dbb2.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/correlation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n\n\n\n\nconst Correlation = ({\n  data1,\n  data2\n}) => {\n  const [corr, setCorr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n\n  const handleSubmit = e => {\n    if (data1 === data2) {\n      setCorr("You cannot correlate the same dataset");\n    } else if (!data1 || !data2) {\n      setCorr("You need to pick 2 datasets");\n    } else {\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/get-corr", requestOptions).then(response => response.json()).then(data => setCorr(data["corrVal"]));\n    }\n  };\n\n  function renderCorr() {\n    if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "...");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, corr);\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "row mt-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-12 col-md-6 mt-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "submit",\n    class: "btn btn-primary btn-lg",\n    onClick: handleSubmit,\n    style: {\n      "color": "white"\n    }\n  }, "Get Corr")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-12 col-md-6 mt-5"\n  }, renderCorr()));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Correlation);\n\n//# sourceURL=webpack://frontend/./src/components/correlation.js?')}},(function(_){"use strict";_.h=()=>"1daf236cdfd187372838"}));