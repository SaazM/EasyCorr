/*! For license information please see main.790663e1e6a73fab09f1.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/status.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _google_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google_auth */ "./src/components/google_auth.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n\n\n\n\n\nconst Status = ({\n  x,\n  setX\n}) => {\n  console.log(x);\n\n  if (x === 1) {\n    setX(0);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "alert alert-success",\n      role: "alert"\n    }, "Your post was successful, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n      href: "/",\n      class: "alert-link"\n    }, "go back"), " to see changes"));\n  } else if (x === 2) {\n    console.log("niln------------------");\n    setX(0);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "alert alert-warning alert-dismissible fade show",\n      role: "alert"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Duplicate Error"), " You have already saved this correlation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "button",\n      class: "btn-close",\n      "data-bs-dismiss": "alert",\n      "aria-label": "Close"\n    })));\n  } else {\n    return null;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Status);\n\n//# sourceURL=webpack://frontend/./src/components/status.js?')}},(function(_){"use strict";_.h=()=>"7e993225beefa662e500"}));