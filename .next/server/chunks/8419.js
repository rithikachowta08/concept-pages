"use strict";
exports.id = 8419;
exports.ids = [8419];
exports.modules = {

/***/ 8419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const StyledButton = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().button)`
  border-radius: 8px;
  height: 50px;
  border: 1px solid ${props => props.borderColor || props.bgColor || props.color || "white"};
  color: ${props => props.color || "white"};
  min-width: 100px;
  width: ${props => props.width};
  cursor: pointer;
  position: ${props => props.position || "static"};
  bottom: ${props => props.bottom || "0"};
  align-self: ${props => props.alignSelf || "center"};
  background-color: ${props => props.bgColor || "transparent"};
  @media (max-height: 900px) {
    min-width: 70px;
  }
`;

const Button = ({
  children,
  onClick,
  width,
  position,
  bottom,
  alignSelf,
  color,
  borderColor,
  bgColor
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(StyledButton, {
    bgColor: bgColor,
    borderColor: borderColor,
    bottom: bottom,
    alignSelf: alignSelf,
    position: position,
    width: width,
    onClick: onClick,
    color: color,
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ })

};
;