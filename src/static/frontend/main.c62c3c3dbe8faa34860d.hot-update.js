/*! For license information please see main.c62c3c3dbe8faa34860d.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/search-card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");\n\n\n\n // import "../../static/css/bootstrap.css";\n\nconst options = [{\n  value: \'chocolate\',\n  label: \'Chocolate\'\n}, {\n  value: \'strawberry\',\n  label: \'Strawberry\'\n}, {\n  value: \'vanilla\',\n  label: \'Vanilla\'\n}];\n\nconst update = e => {\n  console.log(e.target.value);\n};\n\nconst SearchCard = () => {\n  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "card cardH"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    class: "card-body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    style: {\n      "margin-bottom": "20px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    class: "form-floating mb-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__.default, {\n    options: options,\n    className: "mb-3",\n    placeholder: "Select Data",\n    isSearchable: true,\n    autoFocus: true,\n    onChange: setData,\n    noOptionsMessage: "No other Datasets :("\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "submit",\n    class: "btn",\n    style: {\n      "background-color": "#42ba96",\n      "color": "white"\n    }\n  }, "Download a sample"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCard);\n\n//# sourceURL=webpack://frontend/./src/components/search-card.js?')}},(function(_){"use strict";_.h=()=>"0d911427e05c465cc1eb"}));