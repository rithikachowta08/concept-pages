"use strict";
exports.id = 8176;
exports.ids = [8176];
exports.modules = {

/***/ 8176:
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











const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Derivation",
    paddingLeft: "160px",
    bg: "LIGHT",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.LeftWrap, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
        images: [image_1, image_2],
        activeIndex: activeIndex
      })
    }),
    downIcon: downIcon,
    navBar: navBar,
    isLastSlide: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.BLACK */ .O.BLACK,
      marginBottom: "20px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: ["Apply the \"Sine\" formula in the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.RED */ .O.RED,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.WHITE */ .O.WHITE,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        onHover: () => {
          setActiveIndex(1);
        },
        onHoverOut: () => {
          setActiveIndex(0);
        },
        children: "triangle"
      }), ".", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      margin: "0 0 0 40px",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        marginBottom: "10px",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
          htmlString: "Sin\\ A = \\frac{h}{b}"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
          htmlString: "h = b.Sin \\ A"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: ["Area of triangle (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\Delta"
          }), "ABC)"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{2} \\times Base \\times Height"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{2}\\times c\\times h)"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_8__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{2}\\times c\\times b\\ Sin A)"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_2__.default, {
      width: "fit-content",
      fontSize: "1.8rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.GREEN */ .O.GREEN,
      color: utils_colors__WEBPACK_IMPORTED_MODULE_7__/* .colors.WHITE */ .O.WHITE,
      children: ["Area =", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        htmlString: "\\frac{1}{2}\\ bc\\ Sin\\ A"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide20);

/***/ })

};
;