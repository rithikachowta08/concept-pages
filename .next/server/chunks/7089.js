"use strict";
exports.id = 7089;
exports.ids = [7089];
exports.modules = {

/***/ 6159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MathElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _matejmazur_react_katex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2288);
/* harmony import */ var _matejmazur_react_katex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_matejmazur_react_katex__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


// import { elementFromString } from "../utils/domutils";
// import DOMPurify from "dompurify";




function MathElement({
  htmlString
}) {
  console.log("html strong prop", htmlString);

  if (htmlString == "" || htmlString == "undefined") {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      children: "EMPTY"
    });
  } else {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((_matejmazur_react_katex__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: htmlString
      })
    });
  }
}

/***/ }),

/***/ 7089:
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












const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg"; // Derivation of isosceles triangle

const Slide14 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
  const isMobile = (0,hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_6__/* .useDeviceType */ .h)() === hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_6__/* .DEVICE_TYPES.MOBILE */ .W.MOBILE;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Derivation",
    secondaryTitle: "Area of an Isosceles triangle",
    bg: "LIGHT",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.LeftWrap, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_1__.default, {
        images: [image_1, image_2],
        activeIndex: activeIndex
      })
    }),
    mobileLayoutGap: "0px",
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
      color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.BLACK */ .O.BLACK,
      marginBottom: isMobile ? "0px" : "20px",
      margin: "0px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
        marginBottom: "5px",
        margin: "0px",
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        children: ["Apply the Pythagoras Theorem in the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
          bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.RED */ .O.RED,
          color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.WHITE */ .O.WHITE,
          hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
          onHover: () => {
            setActiveIndex(1);
          },
          onHoverOut: () => {
            setActiveIndex(0);
          },
          children: "triangle"
        }), "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
        direction: "column",
        height: "fit-content",
        padding: "0 0 0 2rem",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
          marginBottom: "10px",
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "a^2 = h^2 + (\\frac{b}{2})^2"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
          marginBottom: "10px",
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "h^2 = a^2 - (\\frac{b^2}{4})"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.TextSpan, {
          marginBottom: "10px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "h = \\sqrt{a^2 - (\\frac{b}{2})^2}"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_4__.Flex, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
        margin: "0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          marginBottom: isMobile ? "16px" : "25px",
          children: ["Area of triangle", " "]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          textAlign: "right",
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: "A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
        margin: "0",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{2} \\times Base \\times Height"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_text__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes.MEDIUM */ .C.MEDIUM,
          marginBottom: "10px",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            htmlString: "\\ = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_2__.default, {
      width: "fit-content",
      fontSize: "1.8rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.GREEN */ .O.GREEN,
      color: utils_colors__WEBPACK_IMPORTED_MODULE_8__/* .colors.WHITE */ .O.WHITE,
      children: ["Area of an isosceles triangle =", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(components_MathElement__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        htmlString: "\\frac{1}{4}b \\sqrt{4a^2 - b^2}"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide14);

/***/ })

};
;