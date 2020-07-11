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
  return props.error === "true" ? props.theme.red : "green";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsInVuZGVmaW5lZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdGF0ZSIsInNwbGljZSIsImlkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2F2ZVRvU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlN0eWxlZEZvcm0iLCJzdHlsZWQiLCJmb3JtIiwicHJvcHMiLCJlcnJvciIsInRoZW1lIiwicmVkIiwidXJsIiwiZ3JheWlzaEJsdWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGdCQUFVLEVBQUUsRUFETjtBQUVOQyxlQUFTLEVBQUUsRUFGTDtBQUdOQyxXQUFLLEVBQUUsRUFIRDtBQUlOQyxjQUFRLEVBQUUsRUFKSjtBQUtOQyxZQUFNLEVBQUUsQ0FBQ0MsU0FBRCxFQUFZQSxTQUFaLEVBQXVCQSxTQUF2QixFQUFrQ0EsU0FBbEM7QUFMRixLOzt1TkFPTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxFQUFKLEVBQThCO0FBQzVCLGNBQUtDLFNBQUw7O0FBQ0E7QUFDRDs7QUFDREMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsT0FBbkMsQ0FBMkMsVUFBQ0MsRUFBRCxFQUFRO0FBQ2pELFlB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QUFnQ0gsS0FBSyxDQUFDRSxLQUFOLENBQVlHLFdBQXhEO0FBQUEsQ0ExQ1EsRUFnREUsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZSSxLQUF2QjtBQUFBLENBaERGLENBQWhCO0tBQU1ULFU7QUE0RFM1QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZjlhNWM4NTAwZGI4MjhlYjIzYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgU3R5bGVkVGVybXMgZnJvbSBcIi4vc3R5bGVzL1N0eWxlZFRlcm1zXCI7XHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBlcnJvcnM6IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRdLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgdGhpcy5jbGVhckZvcm0oKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgICBpZiAoZWwuY2hlY2tWYWxpZGl0eSgpKSBlcnJvcnMuc3BsaWNlKGVsLmlkLCAxLCBcImZhbHNlXCIpO1xyXG4gICAgICBlbHNlIGVycm9ycy5zcGxpY2UoZWwuaWQsIDEsIFwidHJ1ZVwiKTtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JzKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY2xlYXJGb3JtID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgZXJyb3JzOiBbZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgfSk7XHJcbiAgc2F2ZVRvU3RhdGUgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICBpZiAoZS50YXJnZXQuY2hlY2tWYWxpZGl0eSgpKSBlcnJvcnMuc3BsaWNlKGUudGFyZ2V0LmlkLCAxLCBmYWxzZSk7XHJcbiAgICBlbHNlIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIHRydWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9ycyB9KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEZvcm0gbWV0aG9kPVwicG9zdFwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjBcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMF19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1swXX0+XHJcbiAgICAgICAgICAgIEZpcnN0IE5hbWUgY2Fubm90IGJlIGVtcHR5XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1sxXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1sxXX0+XHJcbiAgICAgICAgICAgIExhc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1syXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifSBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMl19PlxyXG4gICAgICAgICAgICBMb29rcyBsaWtlIHRoaXMgaXMgbm90IGFuIGVtYWlsXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiM1wiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1szXX1cclxuICAgICAgICAgICAgcGF0dGVybj1cIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgaW5jbHVkZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBjaGFyYWN0ZXIsIDEgbG93ZXJjYXNlIGNoYXJhY3RlciwgYW5kIDEgbnVtYmVyLlwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInN1Z2dlc3RlZC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJQYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCIgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzNdfT5cclxuICAgICAgICAgICAgUGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q2xhaW0geW91ciBmcmVlIFRyaWFsPC9idXR0b24+XHJcbiAgICAgICAgPFN0eWxlZFRlcm1zPlxyXG4gICAgICAgICAgQnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiB5b3UgYXJlIGFncmVlaW5nIHRvIG91cntcIiBcIn1cclxuICAgICAgICAgIDxhPlRlcm1zIGFuZCBTZXJ2aWNlczwvYT5cclxuICAgICAgICA8L1N0eWxlZFRlcm1zPlxyXG4gICAgICA8L1N0eWxlZEZvcm0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1nYXA6IDI1cHg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuZXJyb3Ige1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgb3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA/IDEgOiAwKX07XHJcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICAgIGlucHV0OmludmFsaWQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gcHJvcHMudGhlbWUucmVkIDogXCJncmVlblwiKX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmludmFsaWQge1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IHVybChcIi9pY29uLWVycm9yLnN2Z1wiKSA6IFwiXCJ9O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWRcclxuICAgICAgJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlKX07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdyZWVufTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9