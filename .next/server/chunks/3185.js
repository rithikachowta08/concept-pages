"use strict";
exports.id = 3185;
exports.ids = [3185];
exports.modules = {

/***/ 3185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9716);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7605);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const TextAndDiagramSlide = ({
  title,
  bg = "LIGHT",
  mobileLayoutGap = "30px",
  isLastSlide,
  secondaryTitle,
  children,
  downIcon,
  navBar,
  diagram
}) => {
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_1__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;
  const secondaryTitleElem = secondaryTitle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Title, {
    opacity: 0.5,
    color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
    textAlign: isMobile ? "center" : "left",
    marginBottom: "1vh",
    small: true,
    children: secondaryTitle
  }) : null;

  const titleElem = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Title, {
    color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
    fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_3__/* .fontSizes.H2 */ .C.H2,
    fontWeight: utils_fontStyles__WEBPACK_IMPORTED_MODULE_3__/* .fontWeights.BOLD */ .v.BOLD,
    textAlign: isMobile ? "center" : "left",
    marginBottom: "1vh",
    small: true,
    children: title
  });

  const content = isMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    width: "100%",
    alignItems: "center",
    direction: isMobile ? "column-reverse" : "row",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      children: children
    }), diagram]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.LeftWrap, {
      children: [secondaryTitleElem, titleElem, children]
    }), diagram]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.SlideWrap, {
    bg: bg,
    padding: isMobile ? "0 0 20px 0" : "20px",
    isLastSlide: isLastSlide,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      height: isMobile ? "70%" : "auto",
      width: "100%",
      gap: isMobile ? "10px" : "60px",
      direction: isMobile ? "column" : "row",
      children: [navBar, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        padding: "0 20px",
        direction: isMobile ? "column" : "row",
        gap: isMobile ? mobileLayoutGap : "10px",
        margin: isMobile ? "auto 0" : "0",
        justifyContent: "space-evenly",
        flex: 2,
        width: "100%",
        alignItems: "center",
        children: [isMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          direction: "column",
          alignItems: "center",
          children: [secondaryTitleElem, titleElem]
        }) : null, content]
      })]
    }), downIcon]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAndDiagramSlide);

/***/ })

};
;