"use strict";
exports.id = 6028;
exports.ids = [6028];
exports.modules = {

/***/ 6028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3185);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8164);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




const cube_red = "assets/volume-of-cube/slide1/cube-1.png";
const cube_faces = "assets/volume-of-cube/slide1/cube-2.png";
const cube_vertices = "assets/volume-of-cube/slide1/cube-3.png";
const cube_edges = "assets/volume-of-cube/slide1/cube-4.png";




const Slide2 = ({
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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    title: "What is a cube?",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: [cube_red, cube_faces, cube_vertices, cube_edges],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: ["A cube is a three-dimensional shape that has 6", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "square faces"
      }), ", 8", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 2,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "vertices"
      }), " ", "and 12", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 3,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "edges"
      }), " ", "of equal length"]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide2);

/***/ })

};
;