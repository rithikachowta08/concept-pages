"use strict";
exports.id = 7262;
exports.ids = [7262];
exports.modules = {

/***/ 7262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9717);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9627);
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6159);
/* harmony import */ var components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7605);
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9716);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const applet = "applets/triangle.html"; // General formula derivation

const Slide7 = ({
  downIcon,
  navBar
}) => {
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_7__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_7__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    title: "Derivation",
    secondaryTitle: "Area of a triangle",
    bg: "LIGHT",
    paddingLeft: "200px",
    appletSrc: applet,
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.BLACK */ .O.BLACK,
      marginBottom: isMobile ? "20px" : "40px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_6__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: "Two identical triangles combine to form a parallelogram."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.BLACK */ .O.BLACK,
      marginBottom: "10px",
      fontSize: "1.4rem",
      children: ["Area of a parallelogram", "= Base (b) \xD7 Height (h)"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.BLACK */ .O.BLACK,
      marginBottom: isMobile ? "30px" : "50px",
      fontSize: "1.4rem",
      children: ["Area of a triangle = ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        htmlString: "\\frac{1}{2}"
      }), " \xD7 Area of the parallelogram"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_3__.default, {
      width: "fit-content",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.GREEN */ .O.GREEN,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {
        fontSize: "1.8rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.WHITE */ .O.WHITE,
        fontWeight: "600",
        children: ["Area of the triangle =", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          htmlString: "\\frac{1}{2}\\ \\times\\ "
        }), " "]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {
        fontSize: "1.8rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.WHITE */ .O.WHITE,
        fontWeight: "600",
        children: "Base (b)"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpan, {
        fontSize: "1.8rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.WHITE */ .O.WHITE,
        fontWeight: "600",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
          htmlString: "\\ \\times\\ "
        }), "Height (h)"]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide7);

/***/ })

};
;