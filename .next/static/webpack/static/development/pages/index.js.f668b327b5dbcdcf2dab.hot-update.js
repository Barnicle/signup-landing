webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Form.js":
/*!********************************!*\
  !*** ./src/components/Form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/StyledTerms */ "./src/components/styles/StyledTerms.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/Form */ "./src/components/styles/Form.js");







var _jsxFileName = "C:\\Users\\ged-it\\Documents\\GitHub\\signup-landing\\src\\components\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Form = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: ["false", "false", "false", "false"]
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      if (e.target.checkValidity()) {
        _this.clearForm();

        return;
      }

      document.querySelectorAll("input").forEach(function (el) {
        var errors = _this.state.errors;
        if (el.checkValidity()) errors.splice(el.id, 1, "false");else errors.splice(el.id, 1, "true");
        console.log(errors);

        _this.setState({
          errors: errors
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clearForm", function () {
      return _this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        errors: [false, false, false, false]
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "saveToState", function (e) {
      var errors = _this.state.errors;
      if (e.target.checkValidity()) errors.splice(e.target.id, 1, false);else errors.splice(e.target.id, 1, true);

      _this.setState({
        errors: errors
      });

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledForm"], {
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
      }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledInput"], {
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
      }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledErrorMessage"], {
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
      }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledInput"], {
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
      }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledErrorMessage"], {
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
      }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledInput"], {
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
      }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledErrorMessage"], {
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
      }, __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledInput"], {
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
      }), __jsx(_styles_Form__WEBPACK_IMPORTED_MODULE_10__["StyledErrorMessage"], {
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
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/styles/Form.js":
/*!***************************************!*\
  !*** ./src/components/styles/Form.js ***!
  \***************************************/
/*! exports provided: StyledForm, StyledInput, StyledErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledForm", function() { return StyledForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledErrorMessage", function() { return StyledErrorMessage; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");


function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 1rem;\n  text-align: end;\n  display: ", ";\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  border: 2px solid\n    ", ";\n\n  :invalid::placeholder {\n    color: ", ";\n  }\n  :invalid {\n    background: ", ";\n    background-size: 20px;\n    background-repeat: no-repeat;\n    background-position: 90%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 25px;\n  place-items: center;\n  width: 70%;\n  min-width: 250px;\n  margin: 0 auto;\n  background: white;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 6px rgba(0, 0, 0, 0.3);\n  div {\n    width: 100%;\n  }\n\n  input,\n  button {\n    padding: 10px;\n    border-radius: 5px;\n  }\n\n  button {\n    width: 100%;\n    text-transform: uppercase;\n    background: ", ";\n    color: white;\n    box-shadow: inset 0 -5px hsl(154, 59%, 41%);\n    border: 1px solid transparent;\n    cursor: pointer;\n    :active {\n      box-shadow: inset 0 -2px hsl(154, 59%, 41%);\n      transform: translateY(2px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledForm = styled.form(_templateObject(), function (props) {
  return props.theme.green;
});
var StyledInput = styled.input(_templateObject2(), function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? 'url("/icon-error.svg")' : "";
});
var StyledErrorMessage = styled.div(_templateObject3(), function (props) {
  return props.error === "true" ? "block" : "none";
}, function (props) {
  return props.theme.red;
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdGF0ZSIsInNwbGljZSIsImlkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2F2ZVRvU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlN0eWxlZEZvcm0iLCJzdHlsZWQiLCJmb3JtIiwicHJvcHMiLCJ0aGVtZSIsImdyZWVuIiwiU3R5bGVkSW5wdXQiLCJpbnB1dCIsImVycm9yIiwicmVkIiwiZ3JheWlzaEJsdWUiLCJTdHlsZWRFcnJvck1lc3NhZ2UiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFDTUEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFLEVBRE47QUFFTkMsZUFBUyxFQUFFLEVBRkw7QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsY0FBUSxFQUFFLEVBSko7QUFLTkMsWUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsT0FBNUI7QUFMRixLOzt1TkFPTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxFQUFKLEVBQThCO0FBQzVCLGNBQUtDLFNBQUw7O0FBQ0E7QUFDRDs7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S0FBSyxDQUFDQyxLQUFOLENBQVlLLEdBQXJDLEdBQTJDTixLQUFLLENBQUNDLEtBQU4sQ0FBWU0sV0FEdkQ7QUFBQSxDQUhrQixFQU9YLFVBQUNQLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNLLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUJMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxHQUFyQyxHQUEyQ04sS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBRGhEO0FBQUEsQ0FQVyxFQVdOLFVBQUNQLEtBQUQ7QUFBQSxTQUNaQSxLQUFLLENBQUNLLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsd0JBQXpCLEdBQW9ELEVBRHhDO0FBQUEsQ0FYTSxDQUFqQjtBQW1CQSxJQUFNRyxrQkFBa0IsR0FBR1YsTUFBTSxDQUFDVyxHQUFWLHFCQUdsQixVQUFDVCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDSyxLQUFOLEtBQWdCLE1BQWhCLEdBQXlCLE9BQXpCLEdBQW1DLE1BQS9DO0FBQUEsQ0FIa0IsRUFJcEIsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxHQUF2QjtBQUFBLENBSm9CLENBQXhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mNjY4YjMyN2I1ZGJjZGNmMmRhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuaW1wb3J0IHsgU3R5bGVkRm9ybSwgU3R5bGVkSW5wdXQsIFN0eWxlZEVycm9yTWVzc2FnZSB9IGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcnM6IFtcImZhbHNlXCIsIFwiZmFsc2VcIiwgXCJmYWxzZVwiLCBcImZhbHNlXCJdLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSgpKSBlcnJvcnMuc3BsaWNlKGVsLmlkLCAxLCBcImZhbHNlXCIpO1xyXG4gICAgICBlbHNlIGVycm9ycy5zcGxpY2UoZWwuaWQsIDEsIFwidHJ1ZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY2xlYXJGb3JtID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgZXJyb3JzOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgfSk7XHJcbiAgc2F2ZVRvU3RhdGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSBlcnJvcnMuc3BsaWNlKGUudGFyZ2V0LmlkLCAxLCBmYWxzZSk7XHJcbiAgICBlbHNlIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIHRydWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEZvcm0gbWV0aG9kPVwicG9zdFwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjBcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMF19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1swXX0+XHJcbiAgICAgICAgICAgIEZpcnN0IE5hbWUgY2Fubm90IGJlIGVtcHR5XHJcbiAgICAgICAgICA8L1N0eWxlZEVycm9yTWVzc2FnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1sxXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTdHlsZWRFcnJvck1lc3NhZ2UgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1sxXX0+XHJcbiAgICAgICAgICAgIExhc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1syXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3R5bGVkRXJyb3JNZXNzYWdlIGNsYXNzTmFtZT17XCJlcnJvclwifSBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMl19PlxyXG4gICAgICAgICAgICBMb29rcyBsaWtlIHRoaXMgaXMgbm90IGFuIGVtYWlsXHJcbiAgICAgICAgICA8L1N0eWxlZEVycm9yTWVzc2FnZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFN0eWxlZElucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiM1wiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1szXX1cclxuICAgICAgICAgICAgcGF0dGVybj1cIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgaW5jbHVkZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBjaGFyYWN0ZXIsIDEgbG93ZXJjYXNlIGNoYXJhY3RlciwgYW5kIDEgbnVtYmVyLlwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInN1Z2dlc3RlZC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJQYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3R5bGVkRXJyb3JNZXNzYWdlIGNsYXNzTmFtZT1cImVycm9yXCIgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzNdfT5cclxuICAgICAgICAgICAgUGxlYXNlIGluY2x1ZGUgYXQgbGVhc3QgMSB1cHBlcmNhc2UgY2hhcmFjdGVyLCAxIGxvd2VyY2FzZVxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIsIGFuZCAxIG51bWJlci5cclxuICAgICAgICAgIDwvU3R5bGVkRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DbGFpbSB5b3VyIGZyZWUgVHJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8U3R5bGVkVGVybXM+XHJcbiAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3Vye1wiIFwifVxyXG4gICAgICAgICAgPGE+VGVybXMgYW5kIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgIDwvU3R5bGVkVGVybXM+XHJcbiAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iLCJleHBvcnQgY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1nYXA6IDI1cHg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JlZW59O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlfTtcclxuXHJcbiAgOmludmFsaWQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWV9O1xyXG4gIH1cclxuICA6aW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gJ3VybChcIi9pY29uLWVycm9yLnN2Z1wiKScgOiBcIlwifTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9