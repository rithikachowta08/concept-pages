"use strict";
exports.id = 6266;
exports.ids = [6266];
exports.modules = {

/***/ 6266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3185);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9627);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8164);
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




const cube_red = "assets/volume-of-cube/slide10/cube-1.png";
const cube_d = "assets/volume-of-cube/slide10/cube-2.png";
const cube_s = "assets/volume-of-cube/slide10/cube-3.png";






const Slide10 = ({
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

  let latex = [];
  latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
  latex.push(`= \\sqrt{3}`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__.default, {
      images: [cube_red, cube_d, cube_s],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    bg: "DARK",
    secondaryTitle: "Volume of a cube using diagonal",
    title: "Diagonal of a Cube",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      marginBottom: "2vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Given the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        children: "diagonal length"
      }), " ", "of a cube:"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_3__.default, {
      width: "fit-content",
      fontSize: "2.2rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.GREEN */ .O.GREEN,
      marginBottom: "2vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume of a cube", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Here, d", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      }), " x", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 2,
        onHover: onHover,
        onHoverOut: onHoverOut,
        textDecoration: "underline",
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        children: [" ", "s"]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide10);

/***/ })

};
;