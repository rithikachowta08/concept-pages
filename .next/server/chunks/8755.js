"use strict";
exports.id = 8755;
exports.ids = [8755];
exports.modules = {

/***/ 8755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6159);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8164);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6937);
/* harmony import */ var components_slides_MultipleDiagramSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2700);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5592);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9717);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const area_triangle_angles_1_1 = "assets/area-of-triangle/16.a.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/16.b.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/16.c.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/17.a.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/17.b.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/17.c.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/18.a.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/18.b.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/18.c.svg"; // General Formula base and height slide

const Slide5 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_slides_MultipleDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    bg: "LIGHT",
    title: "General formula",
    downIcon: downIcon,
    navBar: navBar,
    images: [{
      diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
        images: [area_triangle_angles_1_1, area_triangle_angles_1_2, area_triangle_angles_1_3],
        activeIndex: activeIndex
      }),
      caption: "Acute Angled Triangle"
    }, {
      diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
        images: [area_triangle_angles_2_1, area_triangle_angles_2_2, area_triangle_angles_2_3],
        activeIndex: activeIndex
      }),
      caption: "Right Angled Triangle"
    }, {
      diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
        images: [area_triangle_angles_3_1, area_triangle_angles_3_2, area_triangle_angles_3_3],
        activeIndex: activeIndex
      }),
      caption: "Obtuse Angled Triangle"
    }],
    hideFiller: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.Paragraph, {
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: "Let\u2019s observe the base and height of different types of triangles."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_4__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.BLACK */ .O.BLACK,
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: ["Area = ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        htmlString: "\\frac{1}{2}\\ \\times\\ "
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => setActiveIndex(1),
        onHoverOut: () => setActiveIndex(0),
        children: "Base (b)"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        htmlString: "\\ \\times\\ "
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => setActiveIndex(2),
        onHoverOut: () => setActiveIndex(0),
        children: "Height (h)"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide5);

/***/ })

};
;