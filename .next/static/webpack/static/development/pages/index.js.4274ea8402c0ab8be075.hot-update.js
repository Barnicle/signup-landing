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
      errors: [undefined, undefined, undefined, undefined]
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
      return __jsx(StyledForm, {
        method: "post",
        noValidate: true,
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("input", {
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
          lineNumber: 45,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx("input", {
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
          lineNumber: 60,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[1],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }, "Last Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 9
        }
      }, __jsx("input", {
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
          lineNumber: 76,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[2],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }, __jsx("input", {
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
          lineNumber: 91,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[3],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }, "Password cannot be empty")), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, "Terms and Services")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "sc-11jr08r-0"
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:", ";color:", ";}input:invalid::placeholder{color:", ";}}input,button{padding:10px;border-radius:5px;}input:invalid{background:", ";background-size:20px;background-repeat:no-repeat;background-position:90%;}input{width:100%;border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.error ? 1 : 0;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? url("/icon-error.svg") : "";
}, function (props) {
  return props.error ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.theme.green;
});
_c = StyledForm;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "StyledForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsInVuZGVmaW5lZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdGF0ZSIsInNwbGljZSIsImlkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2F2ZVRvU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlN0eWxlZEZvcm0iLCJzdHlsZWQiLCJmb3JtIiwicHJvcHMiLCJlcnJvciIsInRoZW1lIiwicmVkIiwiZ3JheWlzaEJsdWUiLCJ1cmwiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGdCQUFVLEVBQUUsRUFETjtBQUVOQyxlQUFTLEVBQUUsRUFGTDtBQUdOQyxXQUFLLEVBQUUsRUFIRDtBQUlOQyxjQUFRLEVBQUUsRUFKSjtBQUtOQyxZQUFNLEVBQUUsQ0FBQ0MsU0FBRCxFQUFZQSxTQUFaLEVBQXVCQSxTQUF2QixFQUFrQ0EsU0FBbEM7QUFMRixLOzt1TkFPTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxFQUFKLEVBQThCO0FBQzVCLGNBQUtDLFNBQUw7O0FBQ0E7QUFDRDs7QUFDREMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsT0FBbkMsQ0FBMkMsVUFBQ0MsRUFBRCxFQUFRO0FBQ2pELFlB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QUFDRSxLQUFOLENBQVlDLEdBQTFCLEdBQWdDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FBeEQ7QUFBQSxDQTNDUSxFQWlERSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlJLEtBQXZCO0FBQUEsQ0FqREYsQ0FBaEI7S0FBTVQsVTtBQTZEUzVCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40Mjc0ZWE4NDAyYzBhYjhiZTA3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yczogW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZF0sXHJcbiAgfTtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZWwuaWQsIDEsIFwiZmFsc2VcIik7XHJcbiAgICAgIGVsc2UgZXJyb3JzLnNwbGljZShlbC5pZCwgMSwgXCJ0cnVlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICB9KTtcclxuICBzYXZlVG9TdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnN0YXRlLmVycm9ycztcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIGZhbHNlKTtcclxuICAgIGVsc2UgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkRm9ybSBtZXRob2Q9XCJwb3N0XCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMFwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1swXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfT5cclxuICAgICAgICAgICAgRmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfT5cclxuICAgICAgICAgICAgTGFzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIyXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzJdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1syXX0+XHJcbiAgICAgICAgICAgIExvb2tzIGxpa2UgdGhpcyBpcyBub3QgYW4gZW1haWxcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzNdfVxyXG4gICAgICAgICAgICBwYXR0ZXJuPVwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGNoYXJhY3RlciwgMSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbmQgMSBudW1iZXIuXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwic3VnZ2VzdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIiBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbM119PlxyXG4gICAgICAgICAgICBQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DbGFpbSB5b3VyIGZyZWUgVHJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8U3R5bGVkVGVybXM+XHJcbiAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3Vye1wiIFwifVxyXG4gICAgICAgICAgPGE+VGVybXMgYW5kIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgIDwvU3R5bGVkVGVybXM+XHJcbiAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWdhcDogMjVweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gMSA6IDApfTtcclxuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6aW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+XHJcbiAgICAgICAgcHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWV9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDppbnZhbGlkIHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5lcnJvciA9PT0gXCJ0cnVlXCIgPyB1cmwoXCIvaWNvbi1lcnJvci5zdmdcIikgOiBcIlwifTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkXHJcbiAgICAgICR7KHByb3BzKSA9PiAocHJvcHMuZXJyb3IgPyBwcm9wcy50aGVtZS5yZWQgOiBwcm9wcy50aGVtZS5ncmF5aXNoQmx1ZSl9O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC01cHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==