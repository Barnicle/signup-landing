module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");

/* harmony default export */ __webpack_exports__["default"] = (_src_components_Page__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_StyledTerms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/StyledTerms */ "./src/components/styles/StyledTerms.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");
var _jsxFileName = "C:\\Users\\ged-it\\Documents\\GitHub\\signup-landing\\src\\components\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Form extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: ["false", "false", "false", "false"]
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();

      if (e.target.checkValidity()) {
        this.clearForm();
        return;
      }

      document.querySelectorAll("input").forEach(el => {
        const errors = this.state.errors;
        if (el.checkValidity()) errors.splice(el.id, 1, "false");else errors.splice(el.id, 1, "true");
        console.log(errors);
        this.setState({
          errors
        });
      });
    });

    _defineProperty(this, "clearForm", () => this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: [false, false, false, false]
    }));

    _defineProperty(this, "saveToState", e => {
      const errors = this.state.errors;
      if (e.target.checkValidity()) errors.splice(e.target.id, 1, false);else errors.splice(e.target.id, 1, true);
      this.setState({
        errors
      });
      this.setState({
        [e.target.name]: e.target.value
      });
    });
  }

  render() {
    return __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledForm"], {
      method: "post",
      noValidate: true,
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
      type: "text",
      name: "first_name",
      required: true,
      id: "0",
      error: this.state.errors[0],
      value: this.state.first_name,
      placeholder: "First Name",
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }
    }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledErrorMessage"], {
      className: "error",
      error: this.state.errors[0],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }
    }, "First Name cannot be empty")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
      type: "text",
      name: "last_name",
      required: true,
      id: "1",
      error: this.state.errors[1],
      value: this.state.last_name,
      placeholder: "Last Name",
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledErrorMessage"], {
      className: "error",
      error: this.state.errors[1],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, "Last Name cannot be empty")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
      type: "email",
      name: "email",
      required: true,
      id: "2",
      error: this.state.errors[2],
      value: this.state.email,
      placeholder: "Email",
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledErrorMessage"], {
      className: "error",
      error: this.state.errors[2],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, "Looks like this is not an email")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledInput"], {
      type: "password",
      name: "password",
      required: true,
      id: "3",
      error: this.state.errors[3],
      pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",
      title: "Please include at least 1 uppercase character, 1 lowercase character, and 1 number.",
      autoComplete: "suggested-password",
      value: this.state.password,
      placeholder: "Password",
      onChange: this.saveToState,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["StyledErrorMessage"], {
      className: "error",
      error: this.state.errors[3],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, "Please include at least 1 uppercase character, 1 lowercase character, and 1 number.")), __jsx("button", {
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, "Terms and Services")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./src/components/Meta.js":
/*!********************************!*\
  !*** ./src/components/Meta.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ged-it\\Documents\\GitHub\\signup-landing\\src\\components\\Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/favicon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Sign Up"));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form */ "./src/components/Form.js");
/* harmony import */ var _styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/GlobalStyle */ "./src/components/styles/GlobalStyle.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Theme */ "./src/components/styles/Theme.js");
var _jsxFileName = "C:\\Users\\ged-it\\Documents\\GitHub\\signup-landing\\src\\components\\Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const StyledPage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-14336of-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:20px;place-items:center;padding:10px;padding-bottom:100px;background:", ";background-image:url(\"/bg-intro-desktop.png\");object-fit:cover;width:100%;min-height:100vh;.form__wrapper{display:flex;width:100%;flex-flow:column;align-items:center;}@media (max-width:425px){background-image:url(\"/bg-intro-mobile.png\");}"], props => props.theme.red);

const Page = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 3
  }
}, __jsx(_styles_GlobalStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}), __jsx(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
  theme: _styles_Theme__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }
}, __jsx(StyledPage, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, __jsx(StyledHeader, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 11
  }
}, "Learn to code by watching others"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 11
  }
}, "See how expirienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")), __jsx("div", {
  className: "form__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }
}, __jsx(StyledOffer, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 11
  }
}, __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 13
  }
}, "Try it free 7 days"), " then $20/mo. thereafter"), __jsx(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 11
  }
})))));

/* harmony default export */ __webpack_exports__["default"] = (Page);
const StyledOffer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p.withConfig({
  displayName: "Page__StyledOffer",
  componentId: "sc-14336of-1"
})(["padding:15px;border-radius:5px;text-align:center;font-size:1.2rem;box-shadow:0 6px rgba(0,0,0,0.2);background:", ";color:white;width:70%;font-weight:400;span{font-weight:700;}@media (min-width:650px) and (max-width:730px){width:80%;}"], props => props.theme.blue);
const StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "Page__StyledHeader",
  componentId: "sc-14336of-2"
})(["text-align:center;color:white;width:80%;"]);

/***/ }),

/***/ "./src/components/styles/Form.js":
/*!***************************************!*\
  !*** ./src/components/styles/Form.js ***!
  \***************************************/
/*! exports provided: StyledForm, StyledInput, StyledErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledErrorMessage", function() { return StyledErrorMessage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 25px;
  place-items: center;
  width: 70%;
  min-width: 250px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 6px rgba(0, 0, 0, 0.3);
  div {
    width: 100%;
  }

  input,
  button {
    padding: 10px;
    border-radius: 5px;
  }

  button {
    width: 100%;
    text-transform: uppercase;
    background: ${props => props.theme.green};
    color: white;
    box-shadow: inset 0 -5px hsl(154, 59%, 41%);
    border: 1px solid transparent;
    cursor: pointer;
    :active {
      box-shadow: inset 0 -2px hsl(154, 59%, 41%);
      transform: translateY(2px);
    }
  }
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  width: 100%;
  border: 2px solid
    ${props => props.error === "true" ? props.theme.red : props.theme.grayishBlue};

  :invalid::placeholder {
    color: ${props => props.error === "true" ? props.theme.red : props.theme.grayishBlue};
  }
  :invalid {
    background: ${props => props.error === "true" ? 'url("/icon-error.svg")' : ""};
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 90%;
  }
`;
const StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  font-size: 1rem;
  text-align: end;
  display: ${props => props.error === "true" ? "block" : "none"};
  color: ${props => props.theme.red};
`;

/***/ }),

/***/ "./src/components/styles/GlobalStyle.js":
/*!**********************************************!*\
  !*** ./src/components/styles/GlobalStyle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
html{
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
}
html, body, #__next {
    min-height: 100%;
}
input, button{
  font-family: 'Poppins', sans-serif;
  outline: none;
}

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./src/components/styles/StyledTerms.js":
/*!**********************************************!*\
  !*** ./src/components/styles/StyledTerms.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledTerms = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "StyledTerms",
  componentId: "sc-1l8pdq9-0"
})(["font-size:1rem;width:220px;text-align:center;a{color:", ";}"], props => props.theme.red);
/* harmony default export */ __webpack_exports__["default"] = (StyledTerms);

/***/ }),

/***/ "./src/components/styles/Theme.js":
/*!****************************************!*\
  !*** ./src/components/styles/Theme.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  red: "hsl(0, 100%, 74%)",
  green: "hsl(154, 59%, 51%)",
  blue: "hsl(248, 32%, 49%)",
  darkBlue: "hsl(249, 10%, 26%)",
  grayishBlue: "hsl(246, 25%, 77%)"
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ged-it\Documents\GitHub\signup-landing\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3R5bGVzL0dsb2JhbFN0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9TdHlsZWRUZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvVGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlBhZ2UiLCJGb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdGF0ZSIsInNwbGljZSIsImlkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0Iiwic2F2ZVRvU3RhdGUiLCJNZXRhIiwiU3R5bGVkUGFnZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJTdHlsZWRPZmZlciIsInAiLCJibHVlIiwiU3R5bGVkSGVhZGVyIiwiU3R5bGVkRm9ybSIsImZvcm0iLCJncmVlbiIsIlN0eWxlZElucHV0IiwiaW5wdXQiLCJlcnJvciIsImdyYXlpc2hCbHVlIiwiU3R5bGVkRXJyb3JNZXNzYWdlIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlN0eWxlZFRlcm1zIiwiZGFya0JsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQ2VBLDJIQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1DLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDekI7QUFDTkMsZ0JBQVUsRUFBRSxFQUROO0FBRU5DLGVBQVMsRUFBRSxFQUZMO0FBR05DLFdBQUssRUFBRSxF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LE1BQWhCLEdBQXlCWixLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBckMsR0FBMkNGLEtBQUssQ0FBQ0MsS0FBTixDQUFZWSxXQUFZOzs7a0JBR3REYixLQUFELElBQ1pBLEtBQUssQ0FBQ1ksS0FBTixLQUFnQixNQUFoQixHQUF5Qix3QkFBekIsR0FBb0QsRUFBRzs7Ozs7Q0FadEQ7QUFtQkEsTUFBTUUsa0JBQWtCLEdBQUdoQix3REFBTSxDQUFDQyxHQUFJOzs7YUFHL0JDLEtBQUQsSUFBWUEsS0FBSyxDQUFDWSxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE9BQXpCLEdBQW1DLE1BQVE7V0FDeERaLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQUk7Q0FKL0IsQzs7Ozs7Ozs7Ozs7O0FDMURQO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTWEsV0FBVyxHQUFHQyxtRUFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXRDO0FBd0JlRCwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNRSxXQUFXLEdBQUduQix3REFBTSxDQUFDTSxDQUFWO0FBQUE7QUFBQTtBQUFBLG9FQUtISixLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUxuQixDQUFqQjtBQVFlZSwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNUQTtBQUFBLE1BQU1oQixLQUFLLEdBQUc7QUFDWkMsS0FBRyxFQUFFLG1CQURPO0FBRVpPLE9BQUssRUFBRSxvQkFGSztBQUdaSixNQUFJLEVBQUUsb0JBSE07QUFJWmEsVUFBUSxFQUFFLG9CQUpFO0FBS1pMLGFBQVcsRUFBRTtBQUxELENBQWQ7QUFRZVosb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUGFnZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFN0eWxlZFRlcm1zIGZyb20gXCIuL3N0eWxlcy9TdHlsZWRUZXJtc1wiO1xyXG5pbXBvcnQgeyBTdHlsZWRGb3JtLCBTdHlsZWRJbnB1dCwgU3R5bGVkRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yczogW1wiZmFsc2VcIiwgXCJmYWxzZVwiLCBcImZhbHNlXCIsIFwiZmFsc2VcIl0sXHJcbiAgfTtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZWwuaWQsIDEsIFwiZmFsc2VcIik7XHJcbiAgICAgIGVsc2UgZXJyb3JzLnNwbGljZShlbC5pZCwgMSwgXCJ0cnVlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICB9KTtcclxuICBzYXZlVG9TdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnN0YXRlLmVycm9ycztcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIGZhbHNlKTtcclxuICAgIGVsc2UgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkRm9ybSBtZXRob2Q9XCJwb3N0XCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMFwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1swXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0eWxlZEVycm9yTWVzc2FnZSBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfT5cclxuICAgICAgICAgICAgRmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFN0eWxlZEVycm9yTWVzc2FnZSBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfT5cclxuICAgICAgICAgICAgTGFzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eVxyXG4gICAgICAgICAgPC9TdHlsZWRFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIyXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzJdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1syXX0+XHJcbiAgICAgICAgICAgIExvb2tzIGxpa2UgdGhpcyBpcyBub3QgYW4gZW1haWxcclxuICAgICAgICAgIDwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzNdfVxyXG4gICAgICAgICAgICBwYXR0ZXJuPVwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGNoYXJhY3RlciwgMSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbmQgMSBudW1iZXIuXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwic3VnZ2VzdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPVwiZXJyb3JcIiBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbM119PlxyXG4gICAgICAgICAgICBQbGVhc2UgaW5jbHVkZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBjaGFyYWN0ZXIsIDEgbG93ZXJjYXNlXHJcbiAgICAgICAgICAgIGNoYXJhY3RlciwgYW5kIDEgbnVtYmVyLlxyXG4gICAgICAgICAgPC9TdHlsZWRFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNsYWltIHlvdXIgZnJlZSBUcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDxTdHlsZWRUZXJtcz5cclxuICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IGFyZSBhZ3JlZWluZyB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YT5UZXJtcyBhbmQgU2VydmljZXM8L2E+XHJcbiAgICAgICAgPC9TdHlsZWRUZXJtcz5cclxuICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuY29uc3QgTWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgID48L2xpbms+XHJcbiAgICAgIDx0aXRsZT5TaWduIFVwPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0YTtcclxuIiwiaW1wb3J0IE1ldGEgZnJvbSBcIi4vTWV0YVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvR2xvYmFsU3R5bGVcIjtcclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi9zdHlsZXMvVGhlbWVcIjtcclxuY29uc3QgU3R5bGVkUGFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxuICBncmlkLWdhcDogMjBweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9iZy1pbnRyby1kZXNrdG9wLnBuZ1wiKTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAuZm9ybV9fd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2JnLWludHJvLW1vYmlsZS5wbmdcIik7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQYWdlID0gKCkgPT4gKFxyXG4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgPE1ldGEgLz5cclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxTdHlsZWRQYWdlPlxyXG4gICAgICAgIDxTdHlsZWRIZWFkZXI+XHJcbiAgICAgICAgICA8aDE+TGVhcm4gdG8gY29kZSBieSB3YXRjaGluZyBvdGhlcnM8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIFNlZSBob3cgZXhwaXJpZW5jZWQgZGV2ZWxvcGVycyBzb2x2ZSBwcm9ibGVtcyBpbiByZWFsLXRpbWUuIFdhdGNoaW5nXHJcbiAgICAgICAgICAgIHNjcmlwdGVkIHR1dG9yaWFscyBpcyBncmVhdCwgYnV0IHVuZGVyc3RhbmRpbmcgaG93IGRldmVsb3BlcnMgdGhpbmtcclxuICAgICAgICAgICAgaXMgaW52YWx1YWJsZS5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L1N0eWxlZEhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxTdHlsZWRPZmZlcj5cclxuICAgICAgICAgICAgPHNwYW4+VHJ5IGl0IGZyZWUgNyBkYXlzPC9zcGFuPiB0aGVuICQyMC9tby4gdGhlcmVhZnRlclxyXG4gICAgICAgICAgPC9TdHlsZWRPZmZlcj5cclxuICAgICAgICAgIDxGb3JtIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvU3R5bGVkUGFnZT5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXHJcbmNvbnN0IFN0eWxlZE9mZmVyID0gc3R5bGVkLnBgXHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYmx1ZX07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NTBweCkgYW5kIChtYXgtd2lkdGg6IDczMHB4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogODAlO1xyXG5gO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtZ2FwOiAyNXB4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdyZWVufTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWRcclxuICAgICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5lcnJvciA9PT0gXCJ0cnVlXCIgPyBwcm9wcy50aGVtZS5yZWQgOiBwcm9wcy50aGVtZS5ncmF5aXNoQmx1ZX07XHJcblxyXG4gIDppbnZhbGlkOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlfTtcclxuICB9XHJcbiAgOmludmFsaWQge1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmVycm9yID09PSBcInRydWVcIiA/ICd1cmwoXCIvaWNvbi1lcnJvci5zdmdcIiknIDogXCJcIn07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRFcnJvck1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA9PT0gXCJ0cnVlXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG4gIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuaHRtbHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4qLCAqOmJlZm9yZSwgKjphZnRlcntcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcbmJvZHl7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5odG1sLCBib2R5LCAjX19uZXh0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuaW5wdXQsIGJ1dHRvbntcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmA7XHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5jb25zdCBTdHlsZWRUZXJtcyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkVGVybXM7XHJcbiIsImNvbnN0IHRoZW1lID0ge1xyXG4gIHJlZDogXCJoc2woMCwgMTAwJSwgNzQlKVwiLFxyXG4gIGdyZWVuOiBcImhzbCgxNTQsIDU5JSwgNTElKVwiLFxyXG4gIGJsdWU6IFwiaHNsKDI0OCwgMzIlLCA0OSUpXCIsXHJcbiAgZGFya0JsdWU6IFwiaHNsKDI0OSwgMTAlLCAyNiUpXCIsXHJcbiAgZ3JheWlzaEJsdWU6IFwiaHNsKDI0NiwgMjUlLCA3NyUpXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=