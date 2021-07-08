/*! For license information please see main.8cf01782662f9a0148db.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/correlation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n\n\n\n\n\nconst Correlation = ({\n  data1,\n  data2,\n  logged,\n  setPostStatus\n}) => {\n  const [corr, setCorr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [notSet, setNotSet] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [notSetSign, setNotSetSign] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleSubmit = e => {\n    setNotSet(false);\n    setNotSetSign(false);\n\n    if (!data1 || !data2) {\n      setLoading(true);\n      setCorr("You need to pick 2 datasets");\n      setLoading(false);\n    } else if (data1 === data2) {\n      setLoading(true);\n      setCorr("You cannot correlate the same dataset");\n      setLoading(false);\n    } else {\n      setLoading(true);\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/get-corr", requestOptions).then(response => response.json()).then(data => {\n        setCorr(`The correlation is ${data["corrVal"]}`);\n        setLoading(false);\n      });\n    }\n  };\n\n  const handleSave = e => {\n    if (corr) {\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n          "X-CSRFToken": js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\'csrftoken\')\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/create-corr", requestOptions).then(response => {}).catch(error => {\n        setPostStatus(2);\n      }); //window.location.href = "http://localhost:8000/";\n    } else {\n      setNotSetSign(true);\n      console.log(notSetSign);\n    }\n  };\n\n  function renderCorr() {\n    if (notSetSign) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "You have to get correlation before saving"));\n    } else if (notSet) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "Make Correlation ..."));\n    } else if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, "            ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        class: "spinner-border",\n        role: "status"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n        class: "visually-hidden"\n      }, "Loading...")));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, corr));\n    }\n  }\n\n  if (logged) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "container-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "row mt-5 border border-2 rounded"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-6 col-md-4 mt-5 mb-5"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "submit",\n      class: "btn btn-primary btn-lg",\n      onClick: handleSubmit,\n      style: {\n        "color": "white"\n      }\n    }, "Get Corr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-6 col-md-4 mt-5 mb-5"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "submit",\n      class: "btn btn-secondary btn-lg",\n      onClick: handleSave,\n      style: {\n        "color": "white"\n      }\n    }, "Save Corr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-12 col-md-4 mt-5 mb-5"\n    }, renderCorr())));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "container-lg"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "row mt-5 border border-2 rounded"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-6 col-md-4 mt-5 mb-5"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "submit",\n      class: "btn btn-primary btn-lg",\n      onClick: handleSubmit,\n      style: {\n        "color": "white"\n      }\n    }, "Get Corr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-6 col-md-4 mt-5 mb-5"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "button",\n      class: "btn btn-secondary btn-lg",\n      "data-bs-toggle": "modal",\n      "data-bs-target": "#exampleModal",\n      style: {\n        "color": "white"\n      }\n    }, "Save Corr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "col-12 col-md-4 mt-5 mb-5"\n    }, renderCorr())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal fade",\n      id: "exampleModal",\n      tabindex: "-1",\n      "aria-labelledby": "exampleModalLabel",\n      "aria-hidden": "true"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal-dialog"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal-content"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal-header"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n      class: "modal-title",\n      id: "exampleModalLabel"\n    }, "Sign in to save correlations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "button",\n      class: "btn-close",\n      "data-bs-dismiss": "modal",\n      "aria-label": "Close"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal-body"\n    }, "You can sign in for free using a google account :D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "modal-footer"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n      type: "button",\n      class: "btn btn-secondary",\n      "data-bs-dismiss": "modal"\n    }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n      href: "/login",\n      type: "button",\n      class: "btn btn-primary",\n      style: {\n        "color": "white"\n      }\n    }, "Login"))))));\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Correlation);\n\n//# sourceURL=webpack://frontend/./src/components/correlation.js?')}},(function(_){"use strict";_.h=()=>"f33d1e70bf462bdc9f12"}));