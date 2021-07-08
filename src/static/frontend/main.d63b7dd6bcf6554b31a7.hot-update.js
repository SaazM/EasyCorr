/*! For license information please see main.d63b7dd6bcf6554b31a7.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/services/githubLogin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * \n * @param {*} code This is the accesstoken of the user obtained from Google\n */\n\nconst githubLogin = async code => {\n  let res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8000/dj-rest-auth/github/", {\n    code: code\n  }).then(res => {\n    if (res.status === 200) {\n      console.log(res);\n    }\n  }).catch(err => {\n    if (err.request) {\n      console.log(err.request);\n    }\n\n    if (err.response) {\n      console.log(err.response);\n    }\n  });\n  console.log(res);\n  return await res.status;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (githubLogin);\n\n//# sourceURL=webpack://frontend/./src/services/githubLogin.js?')}},(function(_){"use strict";_.h=()=>"d052940ecab40b0d21a8"}));