"use strict";
exports.id = 2700;
exports.ids = [2700];
exports.modules = {

/***/ 2700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8164);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9716);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9717);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const area_triangle_angles_1_1 = "assets/area-of-triangle/16.a.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/16.b.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/16.c.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/17.a.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/17.b.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/17.c.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/18.a.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/18.b.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/18.c.svg"; // General Formula base and height slide

const MultipleDiagramSlide = ({
  title,
  secondaryTitle,
  isLastSlide,
  children,
  images,
  bg,
  downIcon,
  navBar,
  hideFiller = false
}) => {
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_3__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_3__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.SlideWrap, {
    bg: bg,
    padding: isMobile ? "0 0 20px 0" : "20px",
    isLastSlide: isLastSlide,
    hideFiller: hideFiller,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      direction: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: isMobile ? "flex-start" : "center",
      height: isMobile ? "70%" : "auto",
      width: "100%",
      gap: isMobile ? "10px" : "60px",
      children: [navBar, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        direction: "column",
        alignItems: "center",
        justifyContent: isMobile ? "center" : "space-between",
        flex: 2,
        children: [secondaryTitle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Title, {
          opacity: 0.5,
          color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
          marginBottom: "1vh",
          small: true,
          children: secondaryTitle
        }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Title, {
          color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__/* .fontSizes.H2 */ .C.H2,
          fontWeight: utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__/* .fontWeights.BOLD */ .v.BOLD,
          marginBottom: "1vh",
          small: true,
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          direction: isMobile ? "column-reverse" : "column",
          alignItems: "center",
          width: "100%",
          padding: "0 10px",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
            color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
            fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__/* .fontSizes.MEDIUM */ .C.MEDIUM,
            children: children
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexFlow: isMobile ? "wrap" : "none",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "flex-start",
            children: images.map(image => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              justifyContent: "flex-start",
              direction: "column",
              margin: "0 auto",
              children: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().cloneElement(image.diagram, {
                mobileSize: "150px",
                tabletSize: "250px",
                width: "450px"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
                color: bg === "LIGHT" ? utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.BLACK */ .O.BLACK : utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.WHITE */ .O.WHITE,
                fontWeight: 400,
                textAlign: "center",
                fontSize: "1.4rem",
                children: image.caption
              })]
            }))
          })]
        })]
      })]
    }), downIcon]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultipleDiagramSlide);

/***/ })

};
;