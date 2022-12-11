"use strict";
exports.id = 6883;
exports.ids = [6883];
exports.modules = {

/***/ 6883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3185);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9627);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




const cube_red = "assets/volume-of-cube/slide13/cube-1.png";
const cube_lwh = "assets/volume-of-cube/slide13/cube-2.png";
const cube_s = "assets/volume-of-cube/slide13/cube-3.png";





const Slide13 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const onHover = e => {
    setActiveIndex(Number(e.target.id));
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    bg: "DARK",
    title: "Rectangular Prism vs. Cube",
    secondaryTitle: "Volume of a cube",
    downIcon: downIcon,
    navBar: navBar,
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__.default, {
      images: [cube_red, cube_lwh, cube_s],
      activeIndex: activeIndex
    }),
    isLastSlide: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "1vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: "If the length, width, and height of a rectangular prism are equal, it forms a cube"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "3vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume of a rectangular prism =", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        textDecoration: "underline",
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        children: "l x w x h"
      }), " ", "cubic units"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: "For l = w = h = s,"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume of a cube =", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        id: 2,
        onHover: onHover,
        onHoverOut: onHoverOut,
        textDecoration: "underline",
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        children: ["s", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "3"
        })]
      }), " ", "cubic units"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide13);

/***/ })

};
;