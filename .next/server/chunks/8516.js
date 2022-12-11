"use strict";
exports.id = 8516;
exports.ids = [8516];
exports.modules = {

/***/ 8516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_MathElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6159);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8164);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9627);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3185);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5592);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9717);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const image_1 = "assets/area-of-triangle/equi_ex_1.svg";
const image_2 = "assets/area-of-triangle/equi_ex_2.svg"; // Example of equilateral triangle

const Slide18 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Find the area of a triangle with the given dimensions.",
    secondaryTitle: "Illustrative Example",
    bg: "LIGHT",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
      images: [image_1, image_2],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.BLACK */ .O.BLACK,
      marginBottom: "30px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => {
          setActiveIndex(1);
        },
        onHoverOut: () => {
          setActiveIndex(0);
        },
        children: "a"
      }), " ", "= 4 in"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        children: ["Area of the triangle", " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{\\sqrt{3}}{4} \\times a^2"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{\\sqrt{3}}{4} \\times 4^2"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{16 \\ \\sqrt{3}}{4}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = 4 \\sqrt{3}\\ in^2"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide18);

/***/ })

};
;