"use strict";
exports.id = 7771;
exports.ids = [7771];
exports.modules = {

/***/ 7771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8164);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3185);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




const rectangle_full_diagonal = "assets/area-of-rectangle/s8_rectangle_full_diagonal.svg";
const rectangle_diagonal = "assets/area-of-rectangle/s8_rectangle_diagonal.svg";





const Slide10 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const onHover = e => {
    setActiveIndex(1);
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: [rectangle_full_diagonal, rectangle_diagonal],
      activeIndex: activeIndex
    }),
    bg: "DARK",
    title: "Area Using Diagonal",
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "20px",
      color: "white",
      children: ["The length of a", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "diagonal"
      }), " ", "can be calculated using the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        target: "_blank",
        href: "https://byjus.com/maths/pythagoras-theorem/#:~:text=Pythagoras%20theorem%20states%20that%20%E2%80%9CIn,named%20Perpendicular%2C%20Base%20and%20Hypotenuse.",
        style: {
          textDecoration: "none",
          color: "#FEC429"
        },
        rel: "noreferrer",
        children: "Pythagorean"
      }), " ", "theorem."]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i", {
        children: [" ", "d", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        }), " = l", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        }), " + w", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      children: "From this,"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      marginBottom: "20px",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i", {
        children: [" ", "w = \u221A d", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        }), " - l", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      marginBottom: "20px",
      children: ["Area =", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i", {
        children: ["l \xD7 w = l \xD7 \u221A d", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        }), " - l", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      children: "Similarly,"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      marginBottom: "20px",
      children: ["Area =", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("i", {
        children: ["w \xD7 \u221A d", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        }), " - l", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("sup", {
          children: "2"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide10);

/***/ })

};
;