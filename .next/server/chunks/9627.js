"use strict";
exports.id = 9627;
exports.ids = [9627];
exports.modules = {

/***/ 9627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7605);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Pill = ({
  children,
  icon,
  width,
  position,
  bottom,
  alignSelf,
  marginBottom,
  color,
  bgColor,
  fontSize = utils_fontStyles__WEBPACK_IMPORTED_MODULE_1__/* .fontSizes.SMALL */ .C.SMALL
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    bgColor: bgColor,
    bottom: bottom,
    padding: "0.7rem",
    alignItems: "center",
    marginBottom: marginBottom,
    alignSelf: alignSelf,
    borderRadius: "8px",
    position: position,
    color: color,
    width: width,
    children: [icon ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      src: icon,
      marginRight: "6px"
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__.TextSpan, {
      color: color,
      fontSize: fontSize,
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pill);

/***/ })

};
;