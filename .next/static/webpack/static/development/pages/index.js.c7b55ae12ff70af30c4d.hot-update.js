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

      _this.clearForm();

      e.target.checkValidity();
      console.log(e.target.checkValidity());
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "clearForm", function () {
      return _this.setState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        error: [null, null, null, null]
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
      return __jsx(StyledForm, {
        method: "post",
        noValidate: true,
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "text",
        name: "first_name",
        required: true,
        error: this.state.error[0].toString(),
        value: this.state.first_name,
        placeholder: "First Name",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
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
      }, "Last Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          lineNumber: 57,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
          lineNumber: 68,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, "Password cannot be empty")), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:0;color:", ";}input:invalid::placeholder{color:", ";}input:invalid{border:2px solid ", ";}input:invalid + .error{opacity:1;}}input,button{padding:10px;border-radius:5px;}input:invalid{border:2px solid ", ";background:url(\"/icon-error.svg\");background-size:20px;background-repeat:no-repeat;background-position:90%;}input{width:100%;border:2px solid lightgray;}input:active,input:focus{border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.theme.red;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xlYXJGb3JtIiwidGFyZ2V0IiwiY2hlY2tWYWxpZGl0eSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwidG9TdHJpbmciLCJzYXZlVG9TdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3R5bGVkRm9ybSIsInN0eWxlZCIsImZvcm0iLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiZ3JheWlzaEJsdWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGdCQUFVLEVBQUUsRUFETjtBQUVOQyxlQUFTLEVBQUUsRUFGTDtBQUdOQyxXQUFLLEVBQUUsRUFIRDtBQUlOQyxjQUFRLEVBQUUsRUFKSjtBQUtOQyxXQUFLLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkI7QUFMRCxLOzt1TkFPTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFLQyxTQUFMOztBQUNBRixPQUFDLENBQUNHLE1BQUYsQ0FBU0MsYUFBVDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLGFBQVQsRUFBWjtBQUNELEs7O29OQUNXO0FBQUEsYUFDVixNQUFLRyxRQUFMLENBQWM7QUFDWlosa0JBQVUsRUFBRSxFQURBO0FBRVpDLGlCQUFTLEVBQUUsRUFGQztBQUdaQyxhQUFLLEVBQUUsRUFISztBQUlaQyxnQkFBUSxFQUFFLEVBSkU7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RCxHQURqRCxFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRkYsQ0FwREYsQ0FERjtBQTJERDs7OztFQXJGZ0JDLDRDQUFLLENBQUNDLFM7O0FBd0Z6QixJQUFNQyxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLElBQVY7QUFBQTtBQUFBO0FBQUEsczRCQWtCRCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0FsQkMsRUFxQkQsVUFBQ0YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxHQUF2QjtBQUFBLENBckJDLEVBd0JVLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBdkI7QUFBQSxDQXhCVixFQXNDUSxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0F0Q1IsRUFvRFEsVUFBQ0YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxXQUF2QjtBQUFBLENBcERSLEVBeURFLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBdkI7QUFBQSxDQXpERixDQUFoQjtLQUFNUCxVO0FBcUVTdEIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM3YjU1YWUxMmZmNzBhZjMwYzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFN0eWxlZFRlcm1zIGZyb20gXCIuL3N0eWxlcy9TdHlsZWRUZXJtc1wiO1xyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgZXJyb3I6IFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcclxuICB9O1xyXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpO1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKTtcclxuICB9O1xyXG4gIGNsZWFyRm9ybSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIGVycm9yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICB9KTtcclxuICBzYXZlVG9TdGF0ZSA9IChlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGb3JtIG1ldGhvZD1cInBvc3RcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JbMF0udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+Rmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHk8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5MYXN0IE5hbWUgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5Mb29rcyBsaWtlIHRoaXMgaXMgbm90IGFuIGVtYWlsPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwYXR0ZXJuPVwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGNoYXJhY3RlciwgMSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbmQgMSBudW1iZXIuXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwic3VnZ2VzdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5QYXNzd29yZCBjYW5ub3QgYmUgZW1wdHk8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2xhaW0geW91ciBmcmVlIFRyaWFsPC9idXR0b24+XHJcbiAgICAgICAgPFN0eWxlZFRlcm1zPlxyXG4gICAgICAgICAgQnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiB5b3UgYXJlIGFncmVlaW5nIHRvIG91cntcIiBcIn1cclxuICAgICAgICAgIDxhPlRlcm1zIGFuZCBTZXJ2aWNlczwvYT5cclxuICAgICAgICA8L1N0eWxlZFRlcm1zPlxyXG4gICAgICA8L1N0eWxlZEZvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1nYXA6IDI1cHg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6aW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgICBpbnB1dDppbnZhbGlkIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgICBpbnB1dDppbnZhbGlkICsgLmVycm9yIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6aW52YWxpZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9pY29uLWVycm9yLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICB9XHJcblxyXG4gIGlucHV0OmFjdGl2ZSxcclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JheWlzaEJsdWV9O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdyZWVufTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9