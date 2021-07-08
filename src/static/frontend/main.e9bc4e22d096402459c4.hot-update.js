/*! For license information please see main.e9bc4e22d096402459c4.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/post_grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst {\n  options\n} = __webpack_require__(/*! ../../static/js/sc_options */ "./static/js/sc_options.js");\n\nconst PostGrid = () => {\n  function inverse(lst) {\n    var obj = {};\n\n    for (var key in lst) {\n      obj[lst[key].value] = lst[key].label;\n    }\n\n    return obj;\n  }\n\n  const handleDelete = id => {\n    console.log(id);\n    const requestOptions = {\n      method: "DELETE",\n      headers: {\n        "Content-Type": "application/json",\n        "X-CSRFToken": js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\'csrftoken\')\n      }\n    };\n    console.log(id);\n    fetch(`/api/delete/${id}`, requestOptions).then(response => {\n      response.json();\n      window.location.href = "http://localhost:8000/";\n    });\n  }; //const [queryset, setQueryset] = useState([])\n\n\n  var optionsRev = inverse(options);\n  const [elems, setElems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const setElms = queryset => {\n      const elems = [];\n      queryset.forEach(corr => {\n        elems.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "col-sm-6"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "card"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "card-body"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n          class: "card-title"\n        }, `The value off the correlation is ${corr.corrVal}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n          class: "card-text"\n        }, `${optionsRev[corr.code1]} correlated with ${optionsRev[corr.code2]}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n          onClick: () => {\n            handleDelete(corr.id);\n          },\n          class: "btn btn-secondary"\n        }, "Delete")))));\n      });\n      setElems(elems);\n      setLoading(false);\n    };\n\n    fetch("/api/corr").then(response => response.json()).then(data => {\n      setElms(data);\n    });\n  }, []);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "spinner-border",\n      role: "status"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n      class: "visually-hidden"\n    }, "Loading..."));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "row gx-5 gy-5"\n    }, elems);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostGrid);\n\n//# sourceURL=webpack://frontend/./src/components/post_grid.js?')}},(function(_){"use strict";_.h=()=>"628e1a95e8938a2d5e6d"}));