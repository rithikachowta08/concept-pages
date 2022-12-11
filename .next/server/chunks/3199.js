"use strict";
exports.id = 3199;
exports.ids = [3199];
exports.modules = {

/***/ 3199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9717);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9627);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8164);
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6159);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3185);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);





const area_triangle_snt = "assets/area-of-triangle/area_triangle_s&t.svg";
const area_triangle_snt_2 = "assets/area-of-triangle/area_triangle_sna_2.svg";



 // Two sides and included angle




const Slide19 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    title: "Two sides and the included angle",
    secondaryTitle: "Area of a triangle",
    bg: "DARK",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__.default, {
      images: [area_triangle_snt, area_triangle_snt_2],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
      marginBottom: "50px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: ["Given any", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        onHover: () => setActiveIndex(1),
        onHoverOut: () => setActiveIndex(0),
        children: [" ", "two sides of the triangle and the included angle between them,"]
      }), " ", "its area can be calculated as:"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_4__.default, {
      width: "fit-content",
      fontSize: "1.8rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.GREEN */ .O.GREEN,
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
      children: ["Area =", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: "\\frac{1}{2} bc \\ Sin A = \\frac{1}{2} ca\\ Sin B = \\frac{1}{2} ab\\ Sin C"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide19);

/***/ })

};
;