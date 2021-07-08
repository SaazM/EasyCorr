/*! For license information please see main.133450bbd2d4530869a8.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/search-card.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");\n\n\n\n // import "../../static/css/bootstrap.css";\n\nconst options = [{\n  value: \'DP04_0089E\',\n  label: \'Median value of owner occupied units\'\n}, {\n  value: \'DP03_0063E\',\n  label: \'Mean household income\'\n}, {\n  value: \'DP02_0068PE\',\n  label: \'Bachelor degree of higher(25 years and over)\'\n}, {\n  value: "DP02_0071PE",\n  label: "Percentage of population with disability status"\n}];\n\nconst SearchCard = ({\n  data,\n  setData,\n  reference\n}) => {\n  const handleSubmit = e => {\n    setData(e.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "card cardH",\n    ref: reference\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    class: "card-body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {\n    style: {\n      "margin-bottom": "20px"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_2__.default, {\n    options: options,\n    className: "mb-3",\n    placeholder: "Select Data",\n    isSearchable: true,\n    onChange: handleSubmit\n  }))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchCard);\n\n//# sourceURL=webpack://frontend/./src/components/search-card.js?')}},(function(e){"use strict";e.h=()=>"0c647ef69b5fb7d62036"}));