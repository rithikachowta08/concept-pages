"use strict";
exports.id = 2408;
exports.ids = [2408];
exports.modules = {

/***/ 2408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9717);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8164);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9627);
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);





const cube_red = "assets/volume-of-cube/slide13/cube-1.png";
const cube_f = "assets/volume-of-cube/slide12/cube-2.png";
const cube_s = "assets/volume-of-cube/slide12/cube-3.png";





const Slide12 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);

  const onHover = e => {
    setActiveIndex(Number(e.target.id));
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
  latex.push(`= \\sqrt{2}`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    title: "Diagonal of a Face",
    secondaryTitle: "Volume of a Cube using Diagonal",
    downIcon: downIcon,
    navBar: navBar,
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_4__.default, {
      images: [cube_red, cube_f, cube_s],
      activeIndex: activeIndex
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      marginBottom: "2vh",
      children: ["Given the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "diagonal length"
      }), " ", "of a face of a cube:"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_5__.default, {
      width: "fit-content",
      fontSize: "2.2rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.GREEN */ .O.GREEN,
      marginBottom: "2vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume of a cube", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      }), " ", "cubic units"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: ["Here, f", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      }), " x", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 2,
        onHover: onHover,
        onHoverOut: onHoverOut,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.RED */ .O.RED,
        children: "s"
      }), " ", "cubic units"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide12);

/***/ })

};
;