"use strict";
exports.id = 4872;
exports.ids = [4872,9717];
exports.modules = {

/***/ 4872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9717);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const TransitionImage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 8164).then(__webpack_require__.bind(__webpack_require__, 8164)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8164)],
    modules: ["triangles/Slide4.js -> " + "components/media/TransitionImage"]
  }
});
const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide4.js -> " + "components/StyledElements"]
  }
});
const Flex = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Flex), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide4.js -> " + "components/StyledElements"]
  }
});
const Title = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Title), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide4.js -> " + "components/text"]
  }
});
const Paragraph = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Paragraph), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide4.js -> " + "components/text"]
  }
});
const TextSpan = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.TextSpan), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide4.js -> " + "components/text"]
  }
});
const bg = "assets/purple_bg.png";
const triangle_acute = "assets/triangle_acute.svg";
const triangle_acute_yellow = "assets/triangle_acute_yellow.svg";
const triangle_obtuse = "assets/triangle_obtuse.svg";
const triangle_obtuse_yellow = "assets/triangle_obtuse_yellow.svg";
const triangle_right = "assets/triangle_right.svg";
const triangle_right_yellow = "assets/triangle_right_yellow.svg";

const Slide4 = () => {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SlideWrap, {
    bg: "DARK",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
      marginBottom: "20px",
      opacity: 0.5,
      color: "white",
      small: true,
      children: "Types of triangles"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Paragraph, {
      textAlign: "center",
      maxWidth: "60%",
      color: "white",
      marginBottom: "40px",
      children: ["Triangles can be classified into three types with respect to their", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TextSpan, {
        color: "white",
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.YELLOW */ .O.YELLOW,
        onHover: onHover,
        onHoverOut: onHoverOut,
        textDecoration: "underline",
        fontSize: "2.2rem",
        fontWeight: 700,
        children: "interior angles"
      }), " ", "which are"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Flex, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TransitionImage, {
        marginRight: "50px",
        images: [triangle_acute, triangle_acute_yellow],
        activeIndex: activeIndex
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TransitionImage, {
        marginRight: "120px",
        images: [triangle_obtuse, triangle_obtuse_yellow],
        activeIndex: activeIndex
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TransitionImage, {
        images: [triangle_right, triangle_right_yellow],
        activeIndex: activeIndex
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide4);

/***/ }),

/***/ 9717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  GREEN: "#4DCB88",
  RED: "#EA6560",
  WHITE: "#ffffff",
  DARK_BLUE: "#4A33F5",
  DARK_GREY: "#333333",
  BLACK: "#000000",
  AQUA: "#67DBE8",
  YELLOW: "#fec429",
  PURPLE: "#4A33F5"
};

/***/ })

};
;