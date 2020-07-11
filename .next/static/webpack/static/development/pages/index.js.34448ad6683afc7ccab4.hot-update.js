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
      errors: [true, true, true, true]
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();
      if (e.target.checkValidity()) _this.clearForm();
      var inputs = document.getElementById("input").map(function (el) {
        var errors = _this.state.errors;
        if (el.checkValidity()) _this.setState({
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
          lineNumber: 37,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
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
          lineNumber: 39,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[0],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
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
          lineNumber: 54,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[1],
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
          lineNumber: 69,
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
          lineNumber: 70,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[2],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
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
          lineNumber: 85,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        error: this.state.errors[3],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, "Password cannot be empty")), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
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
  return props.error ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error ? url("/icon-error.svg") : "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJpbnB1dHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWFwIiwiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwic3BsaWNlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzYXZlVG9TdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3R5bGVkRm9ybSIsInN0eWxlZCIsImZvcm0iLCJwcm9wcyIsImVycm9yIiwidGhlbWUiLCJyZWQiLCJncmF5aXNoQmx1ZSIsInVybCIsImdyZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBQ01BLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZ0JBQVUsRUFBRSxFQUROO0FBRU5DLGVBQVMsRUFBRSxFQUZMO0FBR05DLFdBQUssRUFBRSxFQUhEO0FBSU5DLGNBQVEsRUFBRSxFQUpKO0FBS05DLFlBQU0sRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQjtBQUxGLEs7O3VOQU9PLFVBQUNDLENBQUQsRUFBTztBQUNwQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBSUQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLGFBQVQsRUFBSixFQUE4QixNQUFLQyxTQUFMO0FBQzlCLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLEVBQWlDQyxHQUFqQyxDQUFxQyxVQUFDQyxFQUFELEVBQVE7QUFDMUQsWUFBTVYsTUFBTSxHQUFHLE1BQUtXLEtBQUwsQ0FBV1gsTUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbEVGLEVBbUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFDaUQsR0FEakQsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBbkVGLENBREY7QUEwRUQ7Ozs7RUExR2dCbUIsNENBQUssQ0FBQ0MsUzs7QUE2R3pCLElBQU1DLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxtdUJBaUJDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQTlCO0FBQUEsQ0FqQkQsRUFrQkQsVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUF2QjtBQUFBLENBbEJDLEVBcUJELFVBQUNILEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQTFCLEdBQWdDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FEckM7QUFBQSxDQXJCQyxFQWlDRSxVQUFDSixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxLQUFOLEdBQWNJLEdBQUcsQ0FBQyxpQkFBRCxDQUFqQixHQUF1QyxFQUFuRDtBQUFBLENBakNGLEVBMENSLFVBQUNMLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQTFCLEdBQWdDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FBeEQ7QUFBQSxDQTFDUSxFQWdERSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlJLEtBQXZCO0FBQUEsQ0FoREYsQ0FBaEI7S0FBTVQsVTtBQTREUzFCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNDQ0OGFkNjY4M2FmYzdjY2FiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yczogW3RydWUsIHRydWUsIHRydWUsIHRydWVdLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIpLm1hcCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KCkpIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNsZWFyRm9ybSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZmlyc3RfbmFtZTogXCJcIixcclxuICAgICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgIGVycm9yczogW2ZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlXSxcclxuICAgIH0pO1xyXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgZmFsc2UpO1xyXG4gICAgZWxzZSBlcnJvcnMuc3BsaWNlKGUudGFyZ2V0LmlkLCAxLCB0cnVlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGb3JtIG1ldGhvZD1cInBvc3RcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIwXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifSBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMF19PlxyXG4gICAgICAgICAgICBGaXJzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjFcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMV19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifSBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMV19PlxyXG4gICAgICAgICAgICBMYXN0IE5hbWUgY2Fubm90IGJlIGVtcHR5XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjJcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMl19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzJdfT5cclxuICAgICAgICAgICAgTG9va3MgbGlrZSB0aGlzIGlzIG5vdCBhbiBlbWFpbFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjNcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbM119XHJcbiAgICAgICAgICAgIHBhdHRlcm49XCJeKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/IS4qXFxzKS4qJFwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUGxlYXNlIGluY2x1ZGUgYXQgbGVhc3QgMSB1cHBlcmNhc2UgY2hhcmFjdGVyLCAxIGxvd2VyY2FzZSBjaGFyYWN0ZXIsIGFuZCAxIG51bWJlci5cIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJzdWdnZXN0ZWQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1szXX0+XHJcbiAgICAgICAgICAgIFBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNsYWltIHlvdXIgZnJlZSBUcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDxTdHlsZWRUZXJtcz5cclxuICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IGFyZSBhZ3JlZWluZyB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YT5UZXJtcyBhbmQgU2VydmljZXM8L2E+XHJcbiAgICAgICAgPC9TdHlsZWRUZXJtcz5cclxuICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtZ2FwOiAyNXB4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmVycm9yIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMuZXJyb3IgPyAxIDogMCl9O1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgICBpbnB1dDppbnZhbGlkOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgICAgICBwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0LFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6aW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gdXJsKFwiL2ljb24tZXJyb3Iuc3ZnXCIpIDogXCJcIil9O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWRcclxuICAgICAgJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlKX07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdyZWVufTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9