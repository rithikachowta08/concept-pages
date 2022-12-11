"use strict";
exports.id = 7004;
exports.ids = [7004,9717];
exports.modules = {

/***/ 7004:
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
    modules: ["triangles/Slide6.js -> " + "components/media/TransitionImage"]
  }
});
const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide6.js -> " + "components/StyledElements"]
  }
});
const Flex = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Flex), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide6.js -> " + "components/StyledElements"]
  }
});
const LeftWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.LeftWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide6.js -> " + "components/StyledElements"]
  }
});
const Title = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Title), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide6.js -> " + "components/text"]
  }
});
const Paragraph = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Paragraph), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide6.js -> " + "components/text"]
  }
});
const TextSpan = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5592).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.TextSpan), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide6.js -> " + "components/text"]
  }
});
const obtuse_red = "assets/obtuse_red.svg";
const obtuse_angles_blue = "assets/obtuse_angles_blue.svg";

const Slide6 = () => {
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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(SlideWrap, {
    bg: "LIGHT",
    paddingLeft: "200px",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Flex, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(LeftWrap, {
        width: "60%",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
          opacity: 0.5,
          marginBottom: "16px",
          small: true,
          children: "Types of triangles"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
          fontSize: "2.5rem",
          fontWeight: 700,
          marginBottom: "16px",
          small: true,
          children: "Obtuse angled triangle"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Paragraph, {
          marginBottom: "70px",
          children: ["One of the angles of the triangle is", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TextSpan, {
            onHover: onHover,
            onHoverOut: onHoverOut,
            color: utils_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.RED */ .O.RED,
            hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
            fontWeight: 700,
            fontSize: "2.2rem",
            children: "greater than 90\xB0"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(TransitionImage, {
        images: [obtuse_red, obtuse_angles_blue],
        activeIndex: activeIndex,
        bottomOffset: "65px"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide6);

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