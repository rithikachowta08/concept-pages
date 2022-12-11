"use strict";
exports.id = 2242;
exports.ids = [2242];
exports.modules = {

/***/ 2242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Slide7 = ({
  downIcon,
  navBar
}) => {
  let latex = [];
  latex.push(` = s^2`);
  latex.push(` = s^3`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    secondaryTitle: "Volume of a Cube Formula",
    title: "Derivation",
    appletSrc: "./applets/triangle.html",
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      marginBottom: "2vh",
      children: "If we stack square sheets of side length \u2018s\u2019 one over the other, a cube is formed."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: "Volume of the cube = (Area of the base) x Height"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: "= (Area of the square sheet) x (Height)"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Paragraph, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide7);

/***/ })

};
;