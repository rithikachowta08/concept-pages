"use strict";
exports.id = 6603;
exports.ids = [6603,9627];
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

/***/ 9627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7605);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Pill = ({
  children,
  icon,
  width,
  position,
  bottom,
  alignSelf,
  marginBottom,
  color,
  bgColor,
  fontSize = utils_fontStyles__WEBPACK_IMPORTED_MODULE_1__/* .fontSizes.SMALL */ .C.SMALL
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    bgColor: bgColor,
    bottom: bottom,
    padding: "0.7rem",
    alignItems: "center",
    marginBottom: marginBottom,
    alignSelf: alignSelf,
    borderRadius: "8px",
    position: position,
    color: color,
    width: width,
    children: [icon ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      src: icon,
      marginRight: "6px"
    }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(components_text__WEBPACK_IMPORTED_MODULE_3__.TextSpan, {
      color: color,
      fontSize: fontSize,
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pill);

/***/ }),

/***/ 6603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3185);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9627);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8164);
/* harmony import */ var components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6159);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
 // import {c}




const cube_red = "assets/volume-of-cube/slide6/cube-1.png";
const cube_d = "assets/volume-of-cube/slide6/cube-2.png";






const Slide6 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const onHover = e => {
    setActiveIndex(Number(e.target.id));
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  let latex = [];
  latex.push(`= side \\times side \\times side`);
  latex.push(`= s \\times s \\times s`);
  latex.push(`= (side)^3`);
  latex.push(` = (side)^3`);
  let mathjaxCounter = 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    bg: "DARK",
    downIcon: downIcon,
    navBar: navBar,
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__.default, {
      images: [cube_red, cube_d],
      activeIndex: activeIndex
    }),
    title: "Formula",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "2vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["For a cube with", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.RED */ .O.RED,
        children: "side length \u2018s\u2019"
      }), " "]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "1vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "1vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "2vh",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_Pill__WEBPACK_IMPORTED_MODULE_3__.default, {
      width: "fit-content",
      fontSize: "2.2rem",
      bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.GREEN */ .O.GREEN,
      color: utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.WHITE */ .O.WHITE,
      children: ["Volume of cube", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_MathElement_index_js__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        htmlString: latex[mathjaxCounter++]
      }), " ", "cubic units"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide6);

/***/ })

};
;