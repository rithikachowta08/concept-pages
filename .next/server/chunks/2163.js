"use strict";
exports.id = 2163;
exports.ids = [2163];
exports.modules = {

/***/ 2163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide1.js -> " + "components/StyledElements"]
  }
});
const Title = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5592), __webpack_require__.e(9717)]).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Title), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide1.js -> " + "components/text"]
  }
});
const ContentList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5592), __webpack_require__.e(9717)]).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.ContentList), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide1.js -> " + "components/text"]
  }
});

const Slide1 = ({
  moveToSection
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(SlideWrap, {
    bg: "DARK_PATTERNED",
    paddingLeft: "200px",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Title, {
      marginBottom: "50px",
      children: "Triangles"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ContentList, {
      items: ["What is a triangle?", "Types of triangles", "Properties of triangles"],
      moveTo: moveToSection,
      anchorIdxes: [2, 4, 10]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide1);

/***/ })

};
;