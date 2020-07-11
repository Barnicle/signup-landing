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
      password: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.clearForm();
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
      return __jsx(StyledForm, {
        noValidate: true,
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
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
          lineNumber: 29,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }, "First Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
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
          lineNumber: 40,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "Last Name cannot be empty")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
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
          lineNumber: 52,
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
      }, "Looks like this is not an email")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
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
          lineNumber: 63,
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
      }, "Password cannot be empty")), __jsx("button", {
        type: "submit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9
        }
      }, "Claim your free Trial"), __jsx(_styles_StyledTerms__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 9
        }
      }, "By clicking the button you are agreeing to our", " ", __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, "Terms and Services")));
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.attrs({
  noValidate: true
}).withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyRm9ybSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic3RhdGUiLCJzYXZlVG9TdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiU3R5bGVkRm9ybSIsInN0eWxlZCIsImZvcm0iLCJhdHRycyIsIm5vVmFsaWRhdGUiLCJwcm9wcyIsInRoZW1lIiwicmVkIiwiZ3JheWlzaEJsdWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUNNQSxJOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGdCQUFVLEVBQUUsRUFETjtBQUVOQyxlQUFTLEVBQUUsRUFGTDtBQUdOQyxXQUFLLEVBQUUsRUFIRDtBQUlOQyxjQUFRLEVBQUU7QUFKSixLOzt1TkFNTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFLQyxTQUFMO0FBQ0QsSzs7b05BQ1c7QUFBQSxhQUNWLE1BQUtDLFFBQUwsQ0FBYztBQUNaUCxrQkFBVSxFQUFFLEVBREE7QUFFWkMsaUJBQVMsRUFBRSxFQUZDO0FBR1pDLGFBQUssRUFBRSxFQUhLO0FBSVpDLGdCQUFRLEVBQUU7QUFKRSxPQUFkLENBRFU7QUFBQSxLOztzTkFPRSxVQUFDQyxDQUFELEVBQU87QUFDbkIsWUFBS0csUUFBTCwrRkFBaUJILENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxJQUExQixFQUFpQ0wsQ0FBQyxDQUFDSSxNQUFGLENBQVNFLEtBQTFDO0FBQ0QsSzs7Ozs7Ozs2QkFDUTtBQUNQLGFBQ0UsTUFBQyxVQUFEO0FBQVksa0JBQVUsTUFBdEI7QUFB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MEJVLFVBQUNGLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsR0FBdkI7QUFBQSxDQTFCVixFQXdDUSxVQUFDRixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQXZCO0FBQUEsQ0F4Q1IsRUFzRFEsVUFBQ0YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxXQUF2QjtBQUFBLENBdERSLEVBMkRFLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBdkI7QUFBQSxDQTNERixDQUFoQjtLQUFNVCxVO0FBdUVTakIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjBhZWQ1NjY4ZDJiYjliZWNmNTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFN0eWxlZFRlcm1zIGZyb20gXCIuL3N0eWxlcy9TdHlsZWRUZXJtc1wiO1xyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH07XHJcbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuY2xlYXJGb3JtKCk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgc2F2ZVRvU3RhdGUgPSAoZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkRm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmaXJzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRmlyc3QgTmFtZVwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5GaXJzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJMYXN0IE5hbWVcIn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+TGFzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJFbWFpbFwifVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zYXZlVG9TdGF0ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJlcnJvclwifT5Mb29rcyBsaWtlIHRoaXMgaXMgbm90IGFuIGVtYWlsPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBwYXR0ZXJuPVwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGNoYXJhY3RlciwgMSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbmQgMSBudW1iZXIuXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwic3VnZ2VzdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9PlBhc3N3b3JkIGNhbm5vdCBiZSBlbXB0eTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PkNsYWltIHlvdXIgZnJlZSBUcmlhbDwvYnV0dG9uPlxyXG4gICAgICAgIDxTdHlsZWRUZXJtcz5cclxuICAgICAgICAgIEJ5IGNsaWNraW5nIHRoZSBidXR0b24geW91IGFyZSBhZ3JlZWluZyB0byBvdXJ7XCIgXCJ9XHJcbiAgICAgICAgICA8YT5UZXJtcyBhbmQgU2VydmljZXM8L2E+XHJcbiAgICAgICAgPC9TdHlsZWRUZXJtcz5cclxuICAgICAgPC9TdHlsZWRGb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybS5hdHRycyh7XHJcbiAgbm9WYWxpZGF0ZTogdHJ1ZSxcclxufSlgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWdhcDogMjVweDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWluLXdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgICBpbnB1dDppbnZhbGlkOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICAgIGlucHV0OmludmFsaWQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUucmVkfTtcclxuICAgIH1cclxuICAgIGlucHV0OmludmFsaWQgKyAuZXJyb3Ige1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQsXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dDppbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2ljb24tZXJyb3Iuc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQ6YWN0aXZlLFxyXG4gIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5ncmF5aXNoQmx1ZX07XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JlZW59O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=