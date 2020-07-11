webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


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


var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form(_templateObject(), function (props) {
  return props.theme.green;
});
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject2(), function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? props.theme.red : props.theme.grayishBlue;
}, function (props) {
  return props.error === "true" ? 'url("/icon-error.svg")' : "";
});
var StyledErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3(), function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRGb3JtIiwic3R5bGVkIiwiZm9ybSIsInByb3BzIiwidGhlbWUiLCJncmVlbiIsIlN0eWxlZElucHV0IiwiaW5wdXQiLCJlcnJvciIsInJlZCIsImdyYXlpc2hCbHVlIiwiU3R5bGVkRXJyb3JNZXNzYWdlIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVixvQkF5QkwsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUF2QjtBQUFBLENBekJLLENBQWhCO0FBcUNBLElBQU1DLFdBQVcsR0FBR0wseURBQU0sQ0FBQ00sS0FBVixxQkFHbEIsVUFBQ0osS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0ssS0FBTixLQUFnQixNQUFoQixHQUF5QkwsS0FBSyxDQUFDQyxLQUFOLENBQVlLLEdBQXJDLEdBQTJDTixLQUFLLENBQUNDLEtBQU4sQ0FBWU0sV0FEdkQ7QUFBQSxDQUhrQixFQU9YLFVBQUNQLEtBQUQ7QUFBQSxTQUNQQSxLQUFLLENBQUNLLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUJMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxHQUFyQyxHQUEyQ04sS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBRGhEO0FBQUEsQ0FQVyxFQVdOLFVBQUNQLEtBQUQ7QUFBQSxTQUNaQSxLQUFLLENBQUNLLEtBQU4sS0FBZ0IsTUFBaEIsR0FBeUIsd0JBQXpCLEdBQW9ELEVBRHhDO0FBQUEsQ0FYTSxDQUFqQjtBQW1CQSxJQUFNRyxrQkFBa0IsR0FBR1YseURBQU0sQ0FBQ1csR0FBVixxQkFHbEIsVUFBQ1QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0ssS0FBTixLQUFnQixNQUFoQixHQUF5QixPQUF6QixHQUFtQyxNQUEvQztBQUFBLENBSGtCLEVBSXBCLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssR0FBdkI7QUFBQSxDQUpvQixDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOGE4NWIwODllYWU1MjEyMDdhNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgZ3JpZC1nYXA6IDI1cHg7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpbnB1dCxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ3JlZW59O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtNXB4IGhzbCgxNTQsIDU5JSwgNDElKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCBoc2woMTU0LCA1OSUsIDQxJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZFxyXG4gICAgJHsocHJvcHMpID0+XHJcbiAgICAgIHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IHByb3BzLnRoZW1lLnJlZCA6IHByb3BzLnRoZW1lLmdyYXlpc2hCbHVlfTtcclxuXHJcbiAgOmludmFsaWQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gcHJvcHMudGhlbWUucmVkIDogcHJvcHMudGhlbWUuZ3JheWlzaEJsdWV9O1xyXG4gIH1cclxuICA6aW52YWxpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT5cclxuICAgICAgcHJvcHMuZXJyb3IgPT09IFwidHJ1ZVwiID8gJ3VybChcIi9pY29uLWVycm9yLnN2Z1wiKScgOiBcIlwifTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA5MCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmVycm9yID09PSBcInRydWVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiKX07XHJcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5yZWR9O1xyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9