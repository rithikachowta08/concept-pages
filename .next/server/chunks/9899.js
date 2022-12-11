"use strict";
exports.id = 9899;
exports.ids = [9899];
exports.modules = {

/***/ 9899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5592);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9717);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8164);
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





const cube_red = "assets/volume-of-cube/slide9/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide9/cube-2.png";




const Slide9 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const onHover = e => {
    setActiveIndex(Number(e.target.id));
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`= (side)^3`);
  latex.push(` (A)=(side)^2`);
  latex.push(` \\sqrt{A} = side`);
  latex.push(`=(\\sqrt{A})^3 `);
  latex.push(`=(\\sqrt {16} m^2)^3 `);
  latex.push(`= (4m)^3`);
  latex.push(`= {64m}^3`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_4__.default, {
      images: [cube_red, cube_diagonal],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    mobileLayoutGap: "0px",
    secondaryTitle: "Volume of a Cube using Area",
    title: "Illustrative Example",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      marginBottom: "2vh",
      children: ["What is the volume of a cube, when the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.RED */ .O.RED,
        children: "area"
      }), " ", "of one of the faces is 16 sq m?"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: "Solution:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: ["Volume of a cube", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: ["Area of the square face,", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          htmlString: latex[mathjaxCounter++]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: ["Volume, V", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors.BLACK */ .O.BLACK,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_0__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide9);

/***/ })

};
;