"use strict";
exports.id = 7635;
exports.ids = [7635];
exports.modules = {

/***/ 7635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3185);
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



const cube_red = "assets/volume-of-cube/slide8/cube-1.png";




const Slide8 = ({
  downIcon,
  navBar
}) => {
  let latex = [];
  latex.push(`= (side)^3`);
  latex.push(` = (7 cm)^3`);
  latex.push(`= 7cm \\times 7cm \\times 7cm`);
  latex.push(`= 343 cm^3`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    secondaryTitle: "Volume of a Cube Formula",
    title: "Illustrative Example",
    downIcon: downIcon,
    navBar: navBar,
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.StyledImg, {
      src: cube_red
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      marginBottom: "2vh",
      children: "What is the volume of a cube of side length 7 cm?"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: "Solution:"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: ["Volume of a cube", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide8);

/***/ })

};
;