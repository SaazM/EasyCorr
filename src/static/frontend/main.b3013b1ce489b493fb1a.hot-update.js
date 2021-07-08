/*! For license information please see main.b3013b1ce489b493fb1a.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/correlation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n\n\n\n\nconst Correlation = ({\n  data1,\n  data2,\n  reference\n}) => {\n  const [corr, setCorr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [notSet, setNotSet] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n\n  const handleSubmit = e => {\n    setNotSet(false);\n\n    if (!data1 || !data2) {\n      setLoading(true);\n      setCorr("You need to pick 2 datasets");\n      setLoading(false);\n    } else if (data1 === data2) {\n      setLoading(true);\n      setCorr("You cannot correlate the same dataset");\n      setLoading(false);\n    } else {\n      setLoading(true);\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/get-corr", requestOptions).then(response => response.json()).then(data => {\n        setCorr(`The correlation is ${data["corrVal"]}`);\n        setLoading(false);\n      });\n    }\n  };\n\n  function renderCorr() {\n    if (notSet) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "Make Correlation ...");\n    } else if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "Loading ...");\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, corr);\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "row mt-5 border rounded",\n    ref: reference\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-12 col-md-6 mt-5 mb-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "submit",\n    class: "btn btn-primary btn-lg",\n    onClick: handleSubmit,\n    style: {\n      "color": "white"\n    }\n  }, "Get Corr")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-12 col-md-6 mt-5 mb-5"\n  }, renderCorr()));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Correlation);\n\n//# sourceURL=webpack://frontend/./src/components/correlation.js?')}},(function(e){"use strict";e.h=()=>"afb6c78dec527e319690"}));