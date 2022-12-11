"use strict";
exports.id = 6521;
exports.ids = [6521];
exports.modules = {

/***/ 7499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const TitleSlide = ({
  moveToSection,
  title,
  contentListItems,
  anchorIdxes
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.TitleSlideWrap, {
    bg: "DARK",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.Title, {
      marginBottom: "5%",
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(components_text__WEBPACK_IMPORTED_MODULE_1__.ContentList, {
      items: contentListItems,
      moveTo: moveToSection,
      anchorIdxes: anchorIdxes
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TitleSlide);

/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_slides_TitleSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7499);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // Title Slide



const Slide1 = ({
  moveToSection
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(components_slides_TitleSlide__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    title: "Area of a Triangle",
    anchorIdxes: [2, 4, 9, 10],
    contentListItems: ["Definition", "General Formula", "Heron's Formula", "Area of different types of triangle"],
    moveToSection: moveToSection
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide1);

/***/ })

};
;