"use strict";
exports.id = 9606;
exports.ids = [9606];
exports.modules = {

/***/ 9606:
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
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





const cube_red = "assets/volume-of-cube/slide11/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide11/cube-2.png";




const Slide11 = ({
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
  latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
  latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
  latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
  latex.push(`= \\sqrt{3} \\times 3`);
  latex.push(`= 3 \\sqrt{3}ft^3 `);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_4__.default, {
      images: [cube_red, cube_diagonal],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    title: "Illustrative Example",
    secondaryTitle: "Volume of a Cube using Diagonal",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      marginBottom: "2vh",
      children: ["Find the volume of a cube whose diagonal", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "diagonal"
      }), " ", "is 3 feet long."]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: "Solution:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: ["Volume", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide11);

/***/ })

};
;