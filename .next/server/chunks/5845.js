"use strict";
exports.id = 5845;
exports.ids = [5845];
exports.modules = {

/***/ 5845:
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
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6159);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3185);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);





const area_triangle_sides_3_1 = "assets/area-of-triangle/slide_13.svg";


 // Scalene triangle




const Slide11 = ({
  downIcon,
  navBar
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: "Scalene triangle",
    secondaryTitle: "Area of Different types of Triangles",
    paddingLeft: "160px",
    bg: "LIGHT",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.StyledImg, {
      src: area_triangle_sides_3_1
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.BLACK */ .O.BLACK,
      marginBottom: "50px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: "Given the length of the three sides (a, b, c) of a scalene triangle, its area can be calculated using the Heron's formula."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_4__.default, {
      width: "fit-content",
      fontSize: "1.8rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.GREEN */ .O.GREEN,
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
      children: ["Area of a scalene triangle =", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: "\\sqrt{s (s - a)(s - b)(s - c)}"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.BLACK */ .O.BLACK,
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      marginBottom: "20px",
      children: "Here, s is the semiperimeter of the triangle."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.BLACK */ .O.BLACK,
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.LARGE */ .C.LARGE,
      fontWeight: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontWeights.BOLD */ .v.BOLD,
      marginBottom: "20px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        htmlString: "s = \\frac{a\\ +\\ b\\ + c}{2}"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide11);

/***/ })

};
;