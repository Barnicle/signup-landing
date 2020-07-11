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
      error: [null, null, null, null]
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      if (e.target.checkValidity()) _this.clearForm();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clearForm", function () {
      return _this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        errors: [null, null, null, null]
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "saveToState", function (e) {
      var errors = _this.state.errors;
      if (e.target.checkValidity()) errors.splice(e.target.id, 1, true);else errors.splice(e.target.id, 1, false);

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
          lineNumber: 33,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "text",
        name: "first_name",
        required: true,
        id: "0",
        error: this.state.error[0],
        value: this.state.first_name,
        placeholder: "First Name",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.error[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "text",
        name: "last_name",
        required: true,
        id: "1",
        error: this.state.error[1],
        value: this.state.last_name,
        placeholder: "Last Name",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }
      }, "Last Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "email",
        name: "email",
        required: true,
        id: "2",
        error: this.state.error[2],
        value: this.state.email,
        placeholder: "Email",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "password",
        name: "password",
        required: true,
        id: "3",
        error: this.state.error[3],
        pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$",
        title: "Please include at least 1 uppercase character, 1 lowercase character, and 1 number.",
        autoComplete: "suggested-password",
        value: this.state.password,
        placeholder: "Password",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:", ";color:", ";}input:invalid::placeholder{color:", ";}input:invalid{border:2px solid ", ";}input:invalid + .error{opacity:1;}}input,button{padding:10px;border-radius:5px;}input:invalid{border:2px solid ", ";background:url(\"/icon-error.svg\");background-size:20px;background-repeat:no-repeat;background-position:90%;}input{width:100%;border:2px solid ", ";}input:active,input:focus{border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.error ? 11 : 0;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.error ? props.theme.red : props.theme.grayishBlue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsImNsZWFyRm9ybSIsInNldFN0YXRlIiwiZXJyb3JzIiwic3RhdGUiLCJzcGxpY2UiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInNhdmVUb1N0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJTdHlsZWRGb3JtIiwic3R5bGVkIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJyZWQiLCJncmF5aXNoQmx1ZSIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZ0JBQVUsRUFBRSxFQUROO0FBRU5DLGVBQVMsRUFBRSxFQUZMO0FBR05DLFdBQUssRUFBRSxFQUhEO0FBSU5DLGNBQVEsRUFBRSxFQUpKO0FBS05DLFdBQUssRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUxELEs7O3VOQU9PLFVBQUNDLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBSUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLGFBQVQsRUFBSixFQUE4QixNQUFLQyxTQUFMO0FBQy9CLEs7O29OQUNXO0FBQUEsYUFDVixNQUFLQyxRQUFMLENBQWM7QUFDWlYsa0JBQVUsRUFBRSxFQURBO0FBRVpDLGlCQUFTLEVBQUUsRUFGQztBQUdaQyxhQUFLLEVBQUUsRUFISztBQUlaQyxnQkFBUSxFQUFFLEVBSkU7QUFLWlEsY0FBTSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElB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ckJDLEVBd0JVLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBdkI7QUFBQSxDQXhCVixFQXNDUSxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0F0Q1IsRUFnRFIsVUFBQ0YsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ3BCLEtBQU4sR0FBY29CLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUExQixHQUFnQ0YsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFdBQXhEO0FBQUEsQ0FoRFEsRUFzRFIsVUFBQ0gsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ3BCLEtBQU4sR0FBY29CLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUExQixHQUFnQ0YsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFdBQXhEO0FBQUEsQ0F0RFEsRUEyREUsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUF2QjtBQUFBLENBM0RGLENBQWhCO0tBQU1QLFU7QUF1RVN0QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGM1YjFkMjc5MzBmYWRmYjFkOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3R5bGVkVGVybXMgZnJvbSBcIi4vc3R5bGVzL1N0eWxlZFRlcm1zXCI7XHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcjogW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcclxuICAgIH0pO1xyXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgdHJ1ZSk7XHJcbiAgICBlbHNlIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIGZhbHNlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGb3JtIG1ldGhvZD1cInBvc3RcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIwXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JbMF19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yWzBdfT5cclxuICAgICAgICAgICAgRmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JbMV19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5MYXN0IE5hbWUgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIyXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JbMl19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+TG9va3MgbGlrZSB0aGlzIGlzIG5vdCBhbiBlbWFpbDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JbM119XHJcbiAgICAgICAgICAgIHBhdHRlcm49XCJeKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/IS4qXFxzKS4qJFwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGluY2x1ZGUgYXQgbGVhc3QgMSB1cHBlcmNhc2UgY2hhcmFjdGVyLCAxIGxvd2VyY2FzZSBjaGFyYWN0ZXIsIGFuZCAxIG51bWJlci5cIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJzdWdnZXN0ZWQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPlBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DbGFpbSB5b3VyIGZyZWUgVHJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8U3R5bGVkVGVybXM+XHJcbiAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3Vye1wiIFwifVxyXG4gICAgICAgICAgPGE+VGVybXMgYW5kIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgIDwvU3R5bGVkVGVybXM+XHJcbiAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWdhcDogMjVweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gMTEgOiAwKX07XHJcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICAgIGlucHV0OmludmFsaWQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6aW52YWxpZCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6aW52YWxpZCArIC5lcnJvciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaWNvbi1lcnJvci5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgICAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWUpfTtcclxuICB9XHJcblxyXG4gIGlucHV0OmFjdGl2ZSxcclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgICAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWUpfTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC01cHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==