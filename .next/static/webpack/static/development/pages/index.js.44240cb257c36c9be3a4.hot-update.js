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
      isValid: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.clearForm();

      if (e.target.checkValidity()) {
        _this.setState({
          isValid: true
        });
      } else _this.setState({
        isValid: false
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clearForm", function () {
      return _this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "saveToState", function (e) {
      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      var isValid = this.state.isValid;
      return __jsx(StyledForm, {
        isValid: isValid,
        method: "post",
        className: isValid ? "" : "invalid",
        noValidate: true,
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "text",
        name: "last_name",
        required: true,
        value: this.state.last_name,
        placeholder: "Last Name",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, "Last Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "email",
        name: "email",
        required: true,
        value: this.state.email,
        placeholder: "Email",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "password",
        name: "password",
        required: true,
        pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",
        title: "Please include at least 1 uppercase character, 1 lowercase character, and 1 number.",
        autoComplete: "suggested-password",
        value: this.state.password,
        placeholder: "Password",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, "Password cannot be empty")), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
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
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:0;color:", ";}}input,button{padding:10px;border-radius:5px;}.invalid div{input:invalid::placeholder{color:", ";}}.invalid input:invalid + .error{opacity:1;}.invalid input:invalid{border:2px solid ", ";background:url(\"/icon-error.svg\");background-size:20px;background-repeat:no-repeat;background-position:90%;}input{width:100%;border:2px solid ", ";}input:active,input:focus{border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.isValid ? "lightgray" : props.theme.red;
}, function (props) {
  return props.theme.grayishBlue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImlzVmFsaWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGVhckZvcm0iLCJ0YXJnZXQiLCJjaGVja1ZhbGlkaXR5Iiwic2V0U3RhdGUiLCJuYW1lIiwidmFsdWUiLCJzdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInNhdmVUb1N0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTdHlsZWRGb3JtIiwic3R5bGVkIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJncmF5aXNoQmx1ZSIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZ0JBQVUsRUFBRSxFQUROO0FBRU5DLGVBQVMsRUFBRSxFQUZMO0FBR05DLFdBQUssRUFBRSxFQUhEO0FBSU5DLGNBQVEsRUFBRSxFQUpKO0FBS05DLGFBQU8sRUFBRTtBQUxILEs7O3VOQU9PLFVBQUNDLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFlBQUtDLFNBQUw7O0FBQ0EsVUFBSUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLGFBQVQsRUFBSixFQUE4QjtBQUM1QixjQUFLQyxRQUFMLENBQWM7QUFDWk4saUJBQU8sRUFBRTtBQURHLFNBQWQ7QUFHRCxPQUpELE1BS0UsTUFBS00sUUFBTCxDQUFjO0FBQ1pOLGVBQU8sRUFBRTtBQURHLE9BQWQ7QUFHSCxLOztvTkFDVztBQUFBLGFBQ1YsTUFBS00sUUFBTCxDQUFjO0FBQ1pWLGtCQUFVLEVBQUUsRUFEQTtBQUVaQyxpQkFBUyxFQUFFLEVBRkM7QUFHWkMsYUFBSyxFQUFFLEVBSEs7QUFJWkMsZ0JBQVEsRUFBRTtBQUpFLE9BQWQs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QUFBQTtBQUFBO0FBQUEsOEJBRkYsQ0F6REYsQ0FERjtBQWdFRDs7OztFQWhHZ0JDLDRDQUFLLENBQUNDLFM7O0FBbUd6QixJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsNDNCQWtCRCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0FsQkMsRUE2QkQsVUFBQ0YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUF2QjtBQUFBLENBN0JDLEVBc0NRLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBdkI7QUFBQSxDQXRDUixFQWdEUixVQUFDRixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDakIsT0FBTixHQUFnQixXQUFoQixHQUE4QmlCLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUF0RDtBQUFBLENBaERRLEVBcURRLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsV0FBdkI7QUFBQSxDQXJEUixFQTBERSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLEtBQXZCO0FBQUEsQ0ExREYsQ0FBaEI7S0FBTVAsVTtBQXNFU25CLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40NDI0MGNiMjU3YzM2YzliZTNhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIGNsZWFyRm9ybSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuICBzYXZlVG9TdGF0ZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXNWYWxpZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGb3JtXHJcbiAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cclxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICBjbGFzc05hbWU9e2lzVmFsaWQgPyBcIlwiIDogXCJpbnZhbGlkXCJ9XHJcbiAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9PkZpcnN0IE5hbWUgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+TGFzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+TG9va3MgbGlrZSB0aGlzIGlzIG5vdCBhbiBlbWFpbDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgcGF0dGVybj1cIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgaW5jbHVkZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBjaGFyYWN0ZXIsIDEgbG93ZXJjYXNlIGNoYXJhY3RlciwgYW5kIDEgbnVtYmVyLlwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInN1Z2dlc3RlZC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJQYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+UGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNsYWltIHlvdXIgZnJlZSBUcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDxTdHlsZWRUZXJtcz5cclxuICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IGFyZSBhZ3JlZWluZyB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YT5UZXJtcyBhbmQgU2VydmljZXM8L2E+XHJcbiAgICAgICAgPC9TdHlsZWRUZXJtcz5cclxuICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtZ2FwOiAyNXB4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmVycm9yIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICAuaW52YWxpZCBkaXYge1xyXG4gICAgaW5wdXQ6aW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW52YWxpZCBpbnB1dDppbnZhbGlkICsgLmVycm9yIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAuaW52YWxpZCBpbnB1dDppbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2ljb24tZXJyb3Iuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWRcclxuICAgICAgJHsocHJvcHMpID0+IChwcm9wcy5pc1ZhbGlkID8gXCJsaWdodGdyYXlcIiA6IHByb3BzLnRoZW1lLnJlZCl9O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6YWN0aXZlLFxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmF5aXNoQmx1ZX07XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JlZW59O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=