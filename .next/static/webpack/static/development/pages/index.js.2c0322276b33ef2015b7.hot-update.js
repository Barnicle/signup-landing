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
      errors: [null, null, null, null]
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
        error: this.state.errors[0],
        value: this.state.first_name,
        placeholder: "First Name",
        onChange: this.saveToState,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }), __jsx(StyledError, {
        error: this.state.errors[0],
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
        error: this.state.errors[1],
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
        error: this.state.errors[2],
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

var StyledError = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Form__StyledError",
  componentId: "sc-11jr08r-0"
})(["font-size:1rem;text-align:end;opacity:", ";color:", ";"], function (props) {
  return props.error ? 1 : 0;
}, function (props) {
  return props.theme.red;
});
_c = StyledError;
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "sc-11jr08r-1"
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:", ";color:", ";}input:invalid::placeholder{color:", ";}input:invalid{border:2px solid ", ";}}input,button{padding:10px;border-radius:5px;}input:invalid{border:2px solid ", ";background:url(\"/icon-error.svg\");background-size:20px;background-repeat:no-repeat;background-position:90%;}input{width:100%;border:2px solid ", ";}input:active,input:focus{border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.error ? 1 : 0;
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
_c2 = StyledForm;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c, _c2;

$RefreshReg$(_c, "StyledError");
$RefreshReg$(_c2, "StyledForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJzZXRTdGF0ZSIsInN0YXRlIiwic3BsaWNlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJzYXZlVG9TdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3R5bGVkRXJyb3IiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImVycm9yIiwidGhlbWUiLCJyZWQiLCJTdHlsZWRGb3JtIiwiZm9ybSIsImdyYXlpc2hCbHVlIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFLEVBRE47QUFFTkMsZUFBUyxFQUFFLEVBRkw7QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsY0FBUSxFQUFFLEVBSko7QUFLTkMsWUFBTSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CO0FBTEYsSzs7dU5BT08sVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxFQUFKLEVBQThCLE1BQUtDLFNBQUw7QUFDL0IsSzs7b05BQ1c7QUFBQSxhQUNWLE1BQUtDLFFBQUwsQ0FBYztBQUNaVixrQkFBVSxFQUFFLEVBREE7QUFFWkMsaUJBQVMsRUFBRSxFQUZDO0FBR1pDLGFBQUssRUFBRSxFQUhLO0FBSVpDLGdCQUFRLEVBQUUsRUFKRTtBQUtaQyxjQUFNLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFB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QUFBLGsyQkFpQkMsVUFBQ0wsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQWQsR0FBa0IsQ0FBOUI7QUFBQSxDQWpCRCxFQWtCRCxVQUFDRCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0FsQkMsRUFxQkQsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUF2QjtBQUFBLENBckJDLEVBd0JVLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBdkI7QUFBQSxDQXhCVixFQW1DUSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0FuQ1IsRUE2Q1IsVUFBQ0gsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBMUIsR0FBZ0NILEtBQUssQ0FBQ0UsS0FBTixDQUFZSSxXQUF4RDtBQUFBLENBN0NRLEVBbURSLFVBQUNOLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQTFCLEdBQWdDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUksV0FBeEQ7QUFBQSxDQW5EUSxFQXdERSxVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlLLEtBQXZCO0FBQUEsQ0F4REYsQ0FBaEI7TUFBTUgsVTtBQW9FUzVCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yYzAzMjIyNzZiMzNlZjIwMTViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yczogW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcclxuICAgIH0pO1xyXG4gIHNhdmVUb1N0YXRlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgdHJ1ZSk7XHJcbiAgICBlbHNlIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIGZhbHNlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvcnMgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxTdHlsZWRGb3JtIG1ldGhvZD1cInBvc3RcIiBub1ZhbGlkYXRlIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIwXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdF9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U3R5bGVkRXJyb3IgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfT5cclxuICAgICAgICAgICAgRmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvU3R5bGVkRXJyb3I+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBpZD1cIjFcIlxyXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbMV19XHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5MYXN0IE5hbWUgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIyXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzJdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9Pkxvb2tzIGxpa2UgdGhpcyBpcyBub3QgYW4gZW1haWw8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiM1wiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1szXX1cclxuICAgICAgICAgICAgcGF0dGVybj1cIl4oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD8hLipcXHMpLiokXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJQbGVhc2UgaW5jbHVkZSBhdCBsZWFzdCAxIHVwcGVyY2FzZSBjaGFyYWN0ZXIsIDEgbG93ZXJjYXNlIGNoYXJhY3RlciwgYW5kIDEgbnVtYmVyLlwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInN1Z2dlc3RlZC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJQYXNzd29yZFwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+UGFzc3dvcmQgY2Fubm90IGJlIGVtcHR5PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNsYWltIHlvdXIgZnJlZSBUcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDxTdHlsZWRUZXJtcz5cclxuICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IGFyZSBhZ3JlZWluZyB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YT5UZXJtcyBhbmQgU2VydmljZXM8L2E+XHJcbiAgICAgICAgPC9TdHlsZWRUZXJtcz5cclxuICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuY29uc3QgU3R5bGVkRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgb3BhY2l0eTogJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA/IDEgOiAwKX07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG5gO1xyXG5jb25zdCBTdHlsZWRGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWdhcDogMjVweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gMSA6IDApfTtcclxuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6aW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgICBpbnB1dDppbnZhbGlkIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0OmludmFsaWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvaWNvbi1lcnJvci5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogOTAlO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgICAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWUpfTtcclxuICB9XHJcblxyXG4gIGlucHV0OmFjdGl2ZSxcclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgICAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWUpfTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmVlbn07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC01cHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICA6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==