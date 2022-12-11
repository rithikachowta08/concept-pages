"use strict";
exports.id = 6400;
exports.ids = [6400];
exports.modules = {

/***/ 6400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const StyledImg = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.StyledImg), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide10.js -> " + "components/StyledElements"]
  }
});
const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide10.js -> " + "components/StyledElements"]
  }
});
const Flex = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Flex), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide10.js -> " + "components/StyledElements"]
  }
});
const Title = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5592), __webpack_require__.e(9717)]).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Title), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide10.js -> " + "components/text"]
  }
});
const TextSpan = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5592), __webpack_require__.e(9717)]).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.TextSpan), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide10.js -> " + "components/text"]
  }
});
const bg = "assets/purple_bg.png";
const angle_sum = "assets/angle_sum.svg";
const triangle_inequality = "assets/triangle_inequality.svg";
const pythogoras = "assets/pythogoras.svg";

const Slide4 = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SlideWrap, {
    bg: "DARK",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Title, {
      marginBottom: "50px",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "white",
      small: true,
      children: "Properties of triangles"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Flex, {
      justifyContent: "space-between",
      alignItems: "center",
      width: "70%",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledImg, {
          src: angle_sum,
          marginBottom: "30px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TextSpan, {
          color: "white",
          fontWeight: 400,
          children: "Angle sum property"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledImg, {
          src: triangle_inequality,
          transform: "translateY(-8px)",
          marginBottom: "10px"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TextSpan, {
          color: "white",
          fontWeight: 400,
          children: "Triangle inequality property"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Flex, {
        direction: "column",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledImg, {
          src: pythogoras,
          transform: "translateY(-50px)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(TextSpan, {
          color: "white",
          transform: "translateY(-20px)",
          fontWeight: 400,
          children: "Pythogoras theorem"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide4);

/***/ })

};
;