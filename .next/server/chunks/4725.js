"use strict";
exports.id = 4725;
exports.ids = [4725];
exports.modules = {

/***/ 4725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8164);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);



const rectangle_full = "assets/area-of-rectangle/rectangle_full.svg";
const rectangle_angles = "assets/area-of-rectangle/rectangle_angles.svg";
const rectangle_sides = "assets/area-of-rectangle/rectangle_sides.svg";





const Slide2 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const onHover = e => {
    setActiveIndex(e);
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "What is a Rectangle?",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_2__.default, {
      images: [rectangle_full, rectangle_sides, rectangle_angles],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: ["A rectangle is a four-sided polygon with\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        onHover: () => onHover(1),
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "opposite sides equal"
      }), "\xA0in length and all the\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        onHover: () => onHover(2),
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "internal angles"
      }), "\xA0equal to 90 degrees."]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide2);

/***/ })

};
;