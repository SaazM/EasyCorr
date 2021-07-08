/*! For license information please see main.7640016ef55cb2a4a0f2.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/github_auth.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_github_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-github-login */ "./node_modules/react-github-login/dist/GitHubLogin.js");\n/* harmony import */ var react_github_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_github_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_githubLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/githubLogin */ "./src/services/githubLogin.js");\n\n\n\n\nclass GithubSocialAuth extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    const responseGithub = async response => {\n      console.log(response);\n      let githubResponse = await (0,_services_githubLogin__WEBPACK_IMPORTED_MODULE_2__.default)(response.accessToken);\n      console.log(githubResponse);\n      console.log(response);\n    };\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "App"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "LOGIN WITH Github"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_github_login__WEBPACK_IMPORTED_MODULE_1___default()), {\n      clientId: "eb1de60dc4581b6484e7",\n      redirectUri: "http://localhost:8000/",\n      buttonText: "LOGIN WITH Github",\n      onSuccess: responseGithub,\n      onFailure: err => console.log(\'Error Logging in: \', err)\n    }));\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GithubSocialAuth);\n\n//# sourceURL=webpack://frontend/./src/components/github_auth.js?')}},(function(_){"use strict";_.h=()=>"1726fcb89f047e28e599"}));