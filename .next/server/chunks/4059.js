"use strict";
exports.id = 4059;
exports.ids = [4059];
exports.modules = {

/***/ 4059:
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
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9716);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9717);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












const image_1 = "assets/area-of-triangle/isos_ex_1.svg";
const image_2 = "assets/area-of-triangle/isos_ex_2.svg";
const image_3 = "assets/area-of-triangle/isos_ex_3.svg"; // Example of isosceles triangle

const Slide15 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_6__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_6__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    bg: "LIGHT",
    title: "Find the area of a triangle with the given dimensions.",
    secondaryTitle: "Illustrative Example",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
      images: [image_1, image_2, image_3],
      activeIndex: activeIndex
    }),
    mobileLayoutGap: "0px",
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.BLACK */ .O.BLACK,
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => {
          setActiveIndex(1);
        },
        onHoverOut: () => {
          setActiveIndex(0);
        },
        children: "a"
      }), " ", "= 5 cm", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.WHITE */ .O.WHITE,
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => {
          setActiveIndex(2);
        },
        onHoverOut: () => {
          setActiveIndex(0);
        },
        children: "b"
      }), " ", "= 8 cm"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        children: "Area of triangle "
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{4}b \\sqrt{4a^2 - b^2}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          margin: isMobile ? "5px 0" : "10px 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{4}\\times 8 \\sqrt{4(5)^2 - (8)^2}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          margin: isMobile ? "5px 0" : "10px 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{4}\\times 8 \\sqrt{100 - 64}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          margin: isMobile ? "5px 0" : "10px 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{4}\\times 8 \\sqrt{36}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          margin: isMobile ? "5px 0" : "10px 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{8\\ \\times\\ 6}{4}"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          margin: isMobile ? "5px 0" : "10px 0",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = 12 \\ cm^2"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide15);

/***/ })

};
;