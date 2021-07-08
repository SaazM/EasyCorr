/*! For license information please see main.97db798f310eb040c5a9.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/services/googleLogin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * \n * @param {*} accesstoken This is the accesstoken of the user obtained from Google\n */\n\nconst googleLogin = async accesstoken => {\n  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8000/rest-auth/google/", {\n    access_token: accesstoken\n  });\n  console.log(res);\n  return await res.status;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (googleLogin);\n\n//# sourceURL=webpack://frontend/./src/services/googleLogin.js?')}},(function(_){"use strict";_.h=()=>"c17a897916a282f6c42b"}));