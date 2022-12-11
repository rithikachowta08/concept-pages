"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9716);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5592);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7605);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const IFrame = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().iframe)`
   width: 700px;
   height: 700px;

   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: 250px;
      height: 250px;
   }

   @media only screen and (min-width: 400px) and (max-width: 768px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 700px) {
      width: 250px;
      height: 250px;
   }

   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 700px) {
      width: 350px;
      height: 350px;
   }
`;

const TextAndAppletSlide = ({
  title,
  bg = "LIGHT",
  isLastSlide,
  mobileLayoutGap = "30px",
  downIcon,
  navBar,
  secondaryTitle,
  children,
  appletSrc
}) => {
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_2__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_2__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;

  const titleElem = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__.Title, {
    color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
    fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_4__/* .fontSizes.H2 */ .C.H2,
    fontWeight: utils_fontStyles__WEBPACK_IMPORTED_MODULE_4__/* .fontWeights.BOLD */ .v.BOLD,
    textAlign: isMobile ? "center" : "left",
    marginBottom: "1vh",
    small: true,
    children: title
  });

  const secondaryTitleElem = secondaryTitle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__.Title, {
    opacity: 0.5,
    color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
    textAlign: isMobile ? "center" : "left",
    marginBottom: "1vh",
    small: true,
    children: secondaryTitle
  }) : null;
  const content = isMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    width: "100%",
    alignItems: "center",
    direction: isMobile ? "column-reverse" : "row",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      children: children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IFrame, {
      src: appletSrc,
      allowFullScreen: true,
      frameBorder: "0"
    })]
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.LeftWrap, {
      children: [secondaryTitleElem, titleElem, children]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IFrame, {
      src: appletSrc,
      allowFullScreen: true,
      frameBorder: "0"
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.SlideWrap, {
    bg: bg,
    isLastSlide: isLastSlide,
    padding: isMobile ? "0 0 20px 0" : "20px",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      height: isMobile ? "70%" : "auto",
      width: "100%",
      gap: isMobile ? "30px" : "60px",
      direction: isMobile ? "column" : "row",
      children: [navBar, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        height: "100%",
        padding: "0 20px",
        direction: isMobile ? "column" : "row",
        gap: isMobile ? mobileLayoutGap : "10px",
        justifyContent: isMobile ? "flex-start" : "space-evenly",
        flex: 2,
        alignItems: "center",
        children: [isMobile ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          direction: "column",
          alignItems: "center",
          children: [secondaryTitleElem, titleElem]
        }) : null, content]
      })]
    }), downIcon]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAndAppletSlide);

/***/ })

};
;