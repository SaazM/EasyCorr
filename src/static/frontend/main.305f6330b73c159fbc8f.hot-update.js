/*! For license information please see main.305f6330b73c159fbc8f.hot-update.js.LICENSE.txt */
self.webpackHotUpdatefrontend("main",{"./src/components/correlation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n\n\n\n\n\nconst Correlation = ({\n  data1,\n  data2,\n  looged\n}) => {\n  const [corr, setCorr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [notSet, setNotSet] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [notSetSign, setNotSetSign] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleSubmit = e => {\n    setNotSet(false);\n    setNotSetSign(false);\n\n    if (!data1 || !data2) {\n      setLoading(true);\n      setCorr("You need to pick 2 datasets");\n      setLoading(false);\n    } else if (data1 === data2) {\n      setLoading(true);\n      setCorr("You cannot correlate the same dataset");\n      setLoading(false);\n    } else {\n      setLoading(true);\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/get-corr", requestOptions).then(response => response.json()).then(data => {\n        setCorr(`The correlation is ${data["corrVal"]}`);\n        setLoading(false);\n      });\n    }\n  };\n\n  const handleSave = e => {\n    if (corr) {\n      const requestOptions = {\n        method: "POST",\n        headers: {\n          "Content-Type": "application/json",\n          "X-CSRFToken": js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\'csrftoken\')\n        },\n        body: JSON.stringify({\n          code1: data1,\n          code2: data2\n        })\n      };\n      fetch("/api/create-corr", requestOptions).then(response => {\n        response.json();\n      }).then(data => {\n        console.log(data);\n      });\n      window.location.href = "http://localhost:8000/";\n    } else {\n      setNotSetSign(true);\n      console.log(notSetSign);\n    }\n  };\n\n  function renderCorr() {\n    if (notSetSign) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "You have to get correlation before saving"));\n    } else if (notSet) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, "Make Correlation ..."));\n    } else if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, "            ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        class: "spinner-border",\n        role: "status"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n        class: "visually-hidden"\n      }, "Loading...")));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {\n        class: "d-inline"\n      }, corr));\n    }\n  }\n\n  function renderSave() {\n    if (looged) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n        type: "submit",\n        class: "btn btn-secondary btn-lg",\n        onClick: handleSave,\n        style: {\n          "color": "white"\n        }\n      }, "Save Corr"));\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "none"\n      });\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "container-lg"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "row mt-5 border border-2 rounded"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-6 col-md-4 mt-5 mb-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    type: "submit",\n    class: "btn btn-primary btn-lg",\n    onClick: handleSubmit,\n    style: {\n      "color": "white"\n    }\n  }, "Get Corr"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-6 col-md-4 mt-5 mb-5"\n  }, renderSave()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "col-12 col-md-4 mt-5 mb-5"\n  }, renderCorr())));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Correlation);\n\n//# sourceURL=webpack://frontend/./src/components/correlation.js?')},"./src/components/post_grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _static_css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/index.css */ "./static/css/index.css");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst {\n  options\n} = __webpack_require__(/*! ../../static/js/sc_options */ "./static/js/sc_options.js");\n\nconst PostGrid = () => {\n  function inverse(lst) {\n    var obj = {};\n\n    for (var key in lst) {\n      obj[lst[key].value] = lst[key].label;\n    }\n\n    return obj;\n  }\n\n  const handleDelete = id => {\n    console.log(id);\n    const requestOptions = {\n      method: "DELETE",\n      headers: {\n        "Content-Type": "application/json",\n        "X-CSRFToken": js_cookie__WEBPACK_IMPORTED_MODULE_2___default().get(\'csrftoken\')\n      }\n    };\n    console.log(id);\n    fetch(`/api/delete/${id}`, requestOptions).then(response => {\n      response.json();\n      window.location.href = "http://localhost:8000/";\n    });\n  }; //const [queryset, setQueryset] = useState([])\n\n\n  var optionsRev = inverse(options);\n  const [elems, setElems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const setElms = queryset => {\n      const elems = [];\n      queryset.forEach(corr => {\n        elems.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "col-sm-6"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "card"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n          class: "card-body"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", {\n          class: "card-title"\n        }, `The value off the correlation is ${corr.corrVal}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n          class: "card-text"\n        }, `${optionsRev[corr.code1]} correlated with ${optionsRev[corr.code2]}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n          onClick: () => {\n            handleDelete(corr.id);\n          },\n          class: "btn btn-secondary"\n        }, "Delete")))));\n      });\n      setElems(elems);\n      setLoading(false);\n    };\n\n    fetch("/api/corr").then(response => response.json()).then(data => {\n      setElms(data);\n    });\n  }, []);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      class: "spinner-border",\n      role: "status"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {\n      class: "visually-hidden"\n    }, "Loading..."));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n      className: "row gx-5 gy-5"\n    }, elems);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostGrid);\n\n//# sourceURL=webpack://frontend/./src/components/post_grid.js?')},"./node_modules/js-cookie/src/js.cookie.js":(module,exports,__webpack_require__)=>{eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n * JavaScript Cookie v2.2.1\n * https://github.com/js-cookie/js-cookie\n *\n * Copyright 2006, 2015 Klaus Hartl & Fagner Brack\n * Released under the MIT license\n */\n;(function (factory) {\n\tvar registeredInModuleLoader;\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (true) {\n\t\tmodule.exports = factory();\n\t\tregisteredInModuleLoader = true;\n\t}\n\tif (!registeredInModuleLoader) {\n\t\tvar OldCookies = window.Cookies;\n\t\tvar api = window.Cookies = factory();\n\t\tapi.noConflict = function () {\n\t\t\twindow.Cookies = OldCookies;\n\t\t\treturn api;\n\t\t};\n\t}\n}(function () {\n\tfunction extend () {\n\t\tvar i = 0;\n\t\tvar result = {};\n\t\tfor (; i < arguments.length; i++) {\n\t\t\tvar attributes = arguments[ i ];\n\t\t\tfor (var key in attributes) {\n\t\t\t\tresult[key] = attributes[key];\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n\n\tfunction decode (s) {\n\t\treturn s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);\n\t}\n\n\tfunction init (converter) {\n\t\tfunction api() {}\n\n\t\tfunction set (key, value, attributes) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tattributes = extend({\n\t\t\t\tpath: '/'\n\t\t\t}, api.defaults, attributes);\n\n\t\t\tif (typeof attributes.expires === 'number') {\n\t\t\t\tattributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);\n\t\t\t}\n\n\t\t\t// We're using \"expires\" because \"max-age\" is not supported by IE\n\t\t\tattributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';\n\n\t\t\ttry {\n\t\t\t\tvar result = JSON.stringify(value);\n\t\t\t\tif (/^[\\{\\[]/.test(result)) {\n\t\t\t\t\tvalue = result;\n\t\t\t\t}\n\t\t\t} catch (e) {}\n\n\t\t\tvalue = converter.write ?\n\t\t\t\tconverter.write(value, key) :\n\t\t\t\tencodeURIComponent(String(value))\n\t\t\t\t\t.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);\n\n\t\t\tkey = encodeURIComponent(String(key))\n\t\t\t\t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)\n\t\t\t\t.replace(/[\\(\\)]/g, escape);\n\n\t\t\tvar stringifiedAttributes = '';\n\t\t\tfor (var attributeName in attributes) {\n\t\t\t\tif (!attributes[attributeName]) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tstringifiedAttributes += '; ' + attributeName;\n\t\t\t\tif (attributes[attributeName] === true) {\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Considers RFC 6265 section 5.2:\n\t\t\t\t// ...\n\t\t\t\t// 3.  If the remaining unparsed-attributes contains a %x3B (\";\")\n\t\t\t\t//     character:\n\t\t\t\t// Consume the characters of the unparsed-attributes up to,\n\t\t\t\t// not including, the first %x3B (\";\") character.\n\t\t\t\t// ...\n\t\t\t\tstringifiedAttributes += '=' + attributes[attributeName].split(';')[0];\n\t\t\t}\n\n\t\t\treturn (document.cookie = key + '=' + value + stringifiedAttributes);\n\t\t}\n\n\t\tfunction get (key, json) {\n\t\t\tif (typeof document === 'undefined') {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tvar jar = {};\n\t\t\t// To prevent the for loop in the first place assign an empty array\n\t\t\t// in case there are no cookies at all.\n\t\t\tvar cookies = document.cookie ? document.cookie.split('; ') : [];\n\t\t\tvar i = 0;\n\n\t\t\tfor (; i < cookies.length; i++) {\n\t\t\t\tvar parts = cookies[i].split('=');\n\t\t\t\tvar cookie = parts.slice(1).join('=');\n\n\t\t\t\tif (!json && cookie.charAt(0) === '\"') {\n\t\t\t\t\tcookie = cookie.slice(1, -1);\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvar name = decode(parts[0]);\n\t\t\t\t\tcookie = (converter.read || converter)(cookie, name) ||\n\t\t\t\t\t\tdecode(cookie);\n\n\t\t\t\t\tif (json) {\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tcookie = JSON.parse(cookie);\n\t\t\t\t\t\t} catch (e) {}\n\t\t\t\t\t}\n\n\t\t\t\t\tjar[name] = cookie;\n\n\t\t\t\t\tif (key === name) {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t} catch (e) {}\n\t\t\t}\n\n\t\t\treturn key ? jar[key] : jar;\n\t\t}\n\n\t\tapi.set = set;\n\t\tapi.get = function (key) {\n\t\t\treturn get(key, false /* read as raw */);\n\t\t};\n\t\tapi.getJSON = function (key) {\n\t\t\treturn get(key, true /* read as json */);\n\t\t};\n\t\tapi.remove = function (key, attributes) {\n\t\t\tset(key, '', extend(attributes, {\n\t\t\t\texpires: -1\n\t\t\t}));\n\t\t};\n\n\t\tapi.defaults = {};\n\n\t\tapi.withConverter = init;\n\n\t\treturn api;\n\t}\n\n\treturn init(function () {});\n}));\n\n\n//# sourceURL=webpack://frontend/./node_modules/js-cookie/src/js.cookie.js?")}},(function(t){"use strict";t.h=()=>"38bbc2a8f5152dd9730d"}));