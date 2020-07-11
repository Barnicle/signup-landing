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
      errors: ["false", "true", "true", "true"]
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
      }, __jsx(StyledInput, {
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

var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "Form__StyledInput",
  componentId: "sc-11jr08r-0"
})(["width:100%;border:2px solid ", ";:invalid::placeholder{color:", ";}:invalid{background:", ";background-size:20px;background-repeat:no-repeat;background-position:90%;}"], function (props) {
  return props.error ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? 'url("/icon-error.svg")' : "";
});
_c = StyledInput;
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "Form__StyledForm",
  componentId: "sc-11jr08r-1"
})(["display:grid;grid-template-rows:1fr;grid-gap:25px;place-items:center;width:70%;min-width:250px;margin:0 auto;background:white;padding:20px;border-radius:10px;box-shadow:0 6px rgba(0,0,0,0.3);div{width:100%;.error{font-size:1rem;text-align:end;opacity:", ";color:", ";}}input,button{padding:10px;border-radius:5px;}input{width:100%;border:2px solid ", ";}button{width:100%;text-transform:uppercase;background:", ";color:white;box-shadow:inset 0 -5px hsl(154,59%,41%);border:1px solid transparent;cursor:pointer;:active{box-shadow:inset 0 -2px hsl(154,59%,41%);transform:translateY(2px);}}"], function (props) {
  return props.error ? 1 : 0;
}, function (props) {
  return props.theme.red;
}, function (props) {
  return props.error ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.theme.green;
});
_c2 = StyledForm;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c, _c2;

$RefreshReg$(_c, "StyledInput");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9ycyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNoZWNrVmFsaWRpdHkiLCJjbGVhckZvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdGF0ZSIsInNwbGljZSIsImlkIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0Iiwic2F2ZVRvU3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlN0eWxlZElucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJwcm9wcyIsImVycm9yIiwidGhlbWUiLCJyZWQiLCJncmF5aXNoQmx1ZSIsIlN0eWxlZEZvcm0iLCJmb3JtIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDTUEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxnQkFBVSxFQUFFLEVBRE47QUFFTkMsZUFBUyxFQUFFLEVBRkw7QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsY0FBUSxFQUFFLEVBSko7QUFLTkMsWUFBTSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsTUFBMUI7QUFMRixLOzt1TkFPTyxVQUFDQyxDQUFELEVBQU87QUFDcEJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsYUFBVCxFQUFKLEVBQThCO0FBQzVCLGNBQUtDLFNBQUw7O0FBQ0E7QUFDRDs7QUFDREMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0MsT0FBbkMsQ0FBMkMsVUFBQ0MsRUFBRCxFQUFRO0FBQ2pELFlBQU1ULE1BQU0sR0FBRyxNQUFLVSxLQUFMLENBQVdWLE1BQTFCO0FBQ0EsWUFBSVMsRUFBRSxDQUFDTCxhQUFILEVBQUosRUFBd0JKLE1BQU0sQ0FBQ1csTUFBUCxDQUFjRixFQUFFLENBQUNHLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLE9BQXhCLEVBQXhCLEtBQ0taLE1BQU0sQ0FBQ1csTUFBUCxDQUFjRixFQUFFLENBQUNHLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLE1BQXhCO0FBQ0xDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZZCxNQUFaOztBQUNBLGNBQUtlLFFBQUwsQ0FBYztBQUFFZixnQkFBTSxFQUFOQTtBQUFGLFNBQWQ7QUFDRCxPQU5EO0FBT0QsSzs7b05BQ1c7QUFBQSxhQUNWLE1BQUtlLFFBQUwsQ0FBYztBQUNabkIsa0JBQVUsRUFBRSxFQURBO0FBRVpDLGlCQUFTLEVBQUUsRUFGQztBQUdaQyxhQUFLLEVBQUUsRUFISztBQUlaQyxnQkFBUSxFQUFFLEVBSkU7QUFLWkMsY0FBTSxFQUFFLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmLEVBQXNCLEtBQXRCO0FBTEksT0FBZCxDQURVO0FBQUEsSzs7c05BUUUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLFVBQU1ELE1BQU0sR0FBRyxNQUFLVSxLQUFMLENBQVdWLE1BQTFCO0FBQ0EsVUFBSUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLGFBQVQsRUFBSixFQUE4QkosTUFBTSxDQUFDVyxNQUFQLENBQWNWLENBQUMsQ0FBQ0UsTUFBRixDQUFTUyxFQUF2QixFQUEyQixDQUEzQixFQUE4QixLQUE5QixFQUE5QixLQUNLWixNQUFNLENBQUNXLE1BQVAsQ0FBY1YsQ0FBQyxDQUFDRSxNQUFGLENBQVNTLEVBQXZCLEVBQTJCLENBQTNCLEVBQThCLElBQTlCOztBQUNMLFlBQUtHLFFBQUwsQ0FBYztBQUFFZixjQUFNLEVBQU5BO0FBQUYsT0FBZDs7QUFDQSxZQUFLZSxRQUFMLCtGQUFpQmQsQ0FBQyxDQUFDRSxNQUFGLENBQVNhLElBQTFCLEVBQWlDZixDQUFDLENBQUNFLE1BQUYsQ0FBU2MsS0FBMUM7QUFDRCxLOzs7Ozs7OzZCQUNRO0FBQ1AsYUFDRSxNQUFDLFVBQUQ7QUFBWSxjQUFNLEVBQUMsTUFBbkI7QUFBMEIsa0JBQVUsTUFBcEM7QUFBcUMsZ0JBQVEsRUFBRSxLQUFLQyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsV0FBRDtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxnQkFBUSxNQUhWO0FBSUUsVUFBRSxFQUFDLEdBSkw7QUFLRSxhQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXVixNQUFYLENBQWtCLENBQWxCLENBTFQ7QUFNRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXZCxVQU5wQjtBQU9FLG1CQUFXLEVBQUMsWUFQZDtBQVFFLGdCQUFRLEVBQUUsS0FBS3VCLFdBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVdFO0FBQUssaUJBQVMsRUFBRSxPQUFoQjtBQUF5QixhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXVixNQUFYLENBQWtCLENBQWxCLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBWEYsQ0FERixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxXQUZQO0FBR0UsZ0JBQVEsTUFIVjtBQUlFLFVBQUUsRUFBQyxHQUpMO0FBS0UsYUFBSyxFQUFFLEtBQUtVLEtBQUwsQ0FBV1YsTUFBWCxDQUFrQixDQUFsQixDQUxUO0FBTUUsYUFBSyxFQUFFLEtBQUtVLEtBQUwsQ0FBV2IsU0FOcEI7QUFPRSxtQkFBVyxFQUFDLFdBUGQ7QUFRRSxnQkFBUSxFQUFFLEtBQUtzQixXQVJqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFXRTtBQUFLLGlCQUFTLEVBQUUsT0FBaEI7QUFBeUIsYUFBSyxFQUFFLEtBQUtULEtBQUwsQ0FBV1YsTUFBWCxDQUFrQixDQUFsQixDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQVhGLENBaEJGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxnQkFBUSxNQUhWO0FBSUUsVUFBRSxFQUFDLEdBSkw7QUFLRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXVixNQUFYLENBQWtCLENBQWxCLENBTFQ7QUFNRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXWixLQU5wQjtBQU9FLG1CQUFXLEVBQUMsT0FQZDtBQVFFLGdCQUFRLEVBQUUsS0FBS3FCLFdBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQVdFO0FBQUssaUJBQVMsRUFBRSxPQUFoQjtBQUF5QixhQUFLLEVBQUUsS0FBS1QsS0FBTCxDQUFXVixNQUFYLENBQWtCLENBQWxCLENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBWEYsQ0FoQ0YsRUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsWUFBSSxFQUFDLFVBRFA7QUFFRSxZQUFJLEVBQUMsVUFGUDtBQUdFLGdCQUFRLE1BSFY7QUFJRSxVQUFFLEVBQUMsR0FKTDtBQUtFLGFBQUssRUFBRSxLQUFLVSxLQUFMLENBQVdWLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FMVDtBQU1FLGVBQU8sRUFBQyw4Q0FOVjtBQU9FLGFBQUssRUFBQyxxRkFQUjtBQVFFLG9CQUFZLEVBQUMsb0JBUmY7QUFTRSxhQUFLLEVBQUUsS0FBS1UsS0FBTCxDQUFXWCxRQVRwQjtBQVVFLG1CQUFXLEVBQUUsVUFWZjtBQVdFLGdCQUFRLEVBQUUsS0FBS29CLFdBWGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQWNFO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQXVCLGFBQUssRUFBRSxLQUFLVCxLQUFMLENBQVdWLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FkRixDQS9DRixFQWtFRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbEVGLEVBbUVFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFDaUQsR0FEakQsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZGLENBbkVGLENBREY7QUEwRUQ7Ozs7RUFoSGdCb0IsNENBQUssQ0FBQ0MsUzs7QUFrSHpCLElBQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSwrS0FHWCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxLQUFOLEdBQWNELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUExQixHQUFnQ0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLFdBQXhEO0FBQUEsQ0FIVyxFQUtKLFVBQUNKLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUJELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUFyQyxHQUEyQ0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLFdBRGhEO0FBQUEsQ0FMSSxFQVNDLFVBQUNKLEtBQUQ7QUFBQSxTQUNaQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsd0JBQXpCLEdBQW9ELEVBRHhDO0FBQUEsQ0FURCxDQUFqQjtLQUFNSixXO0FBZ0JOLElBQU1RLFVBQVUsR0FBR1AseURBQU0sQ0FBQ1EsSUFBVjtBQUFBO0FBQUE7QUFBQSxvbEJBaUJDLFVBQUNOLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQTlCO0FBQUEsQ0FqQkQsRUFrQkQsVUFBQ0QsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxHQUF2QjtBQUFBLENBbEJDLEVBK0JSLFVBQUNILEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQTFCLEdBQWdDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FBeEQ7QUFBQSxDQS9CUSxFQXFDRSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlLLEtBQXZCO0FBQUEsQ0FyQ0YsQ0FBaEI7TUFBTUYsVTtBQWlEU25DLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45ZGJhNDU5NjYxNTdhY2Y2Y2RjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBTdHlsZWRUZXJtcyBmcm9tIFwiLi9zdHlsZXMvU3R5bGVkVGVybXNcIjtcclxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgbGFzdF9uYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGVycm9yczogW1wiZmFsc2VcIiwgXCJ0cnVlXCIsIFwidHJ1ZVwiLCBcInRydWVcIl0sXHJcbiAgfTtcclxuICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICB0aGlzLmNsZWFyRm9ybSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZWwuaWQsIDEsIFwiZmFsc2VcIik7XHJcbiAgICAgIGVsc2UgZXJyb3JzLnNwbGljZShlbC5pZCwgMSwgXCJ0cnVlXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcnMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjbGVhckZvcm0gPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IFtmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXHJcbiAgICB9KTtcclxuICBzYXZlVG9TdGF0ZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLnN0YXRlLmVycm9ycztcclxuICAgIGlmIChlLnRhcmdldC5jaGVja1ZhbGlkaXR5KCkpIGVycm9ycy5zcGxpY2UoZS50YXJnZXQuaWQsIDEsIGZhbHNlKTtcclxuICAgIGVsc2UgZXJyb3JzLnNwbGljZShlLnRhcmdldC5pZCwgMSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JzIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkRm9ybSBtZXRob2Q9XCJwb3N0XCIgbm9WYWxpZGF0ZSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlyc3RfbmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGlkPVwiMFwiXHJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1swXX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3RfbmFtZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzBdfT5cclxuICAgICAgICAgICAgRmlyc3QgTmFtZSBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibGFzdF9uYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIxXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0X25hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2F2ZVRvU3RhdGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZXJyb3JcIn0gZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzFdfT5cclxuICAgICAgICAgICAgTGFzdCBOYW1lIGNhbm5vdCBiZSBlbXB0eVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIyXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzJdfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImVycm9yXCJ9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1syXX0+XHJcbiAgICAgICAgICAgIExvb2tzIGxpa2UgdGhpcyBpcyBub3QgYW4gZW1haWxcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzWzNdfVxyXG4gICAgICAgICAgICBwYXR0ZXJuPVwiXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPyEuKlxccykuKiRcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIlBsZWFzZSBpbmNsdWRlIGF0IGxlYXN0IDEgdXBwZXJjYXNlIGNoYXJhY3RlciwgMSBsb3dlcmNhc2UgY2hhcmFjdGVyLCBhbmQgMSBudW1iZXIuXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwic3VnZ2VzdGVkLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNhdmVUb1N0YXRlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIiBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnNbM119PlxyXG4gICAgICAgICAgICBQYXNzd29yZCBjYW5ub3QgYmUgZW1wdHlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DbGFpbSB5b3VyIGZyZWUgVHJpYWw8L2J1dHRvbj5cclxuICAgICAgICA8U3R5bGVkVGVybXM+XHJcbiAgICAgICAgICBCeSBjbGlja2luZyB0aGUgYnV0dG9uIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3Vye1wiIFwifVxyXG4gICAgICAgICAgPGE+VGVybXMgYW5kIFNlcnZpY2VzPC9hPlxyXG4gICAgICAgIDwvU3R5bGVkVGVybXM+XHJcbiAgICAgIDwvU3R5bGVkRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkXHJcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWUpfTtcclxuICA6aW52YWxpZDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5lcnJvciA9PT0gXCJ0cnVlXCIgPyBwcm9wcy50aGVtZS5yZWQgOiBwcm9wcy50aGVtZS5ncmF5aXNoQmx1ZX07XHJcbiAgfVxyXG4gIDppbnZhbGlkIHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG4gICAgICBwcm9wcy5lcnJvciA9PT0gXCJ0cnVlXCIgPyAndXJsKFwiL2ljb24tZXJyb3Iuc3ZnXCIpJyA6IFwiXCJ9O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDkwJTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFN0eWxlZEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtZ2FwOiAyNXB4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmVycm9yIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgIG9wYWNpdHk6ICR7KHByb3BzKSA9PiAocHJvcHMuZXJyb3IgPyAxIDogMCl9O1xyXG4gICAgICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnJlZH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWRcclxuICAgICAgJHsocHJvcHMpID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlKX07XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdyZWVufTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTVweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIDphY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggaHNsKDE1NCwgNTklLCA0MSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9