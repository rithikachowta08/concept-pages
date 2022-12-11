"use strict";
exports.id = 3265;
exports.ids = [3265];
exports.modules = {

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5592);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


const error = "assets/error.svg";
const success = "assets/success.svg";





const Slide5 = ({
  downIcon,
  navBar
}) => {
  const triggerToast = isRightAngled => {
    if (isRightAngled) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("That is correct! ABC is a right angled triangle", {
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          src: success,
          width: "20px"
        })
      });
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("A right angled triangle has one angle equal to 90°", {
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          src: error,
          width: "20px"
        })
      });
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    window.triggerToast = triggerToast;
    return () => {
      window.triggerToast = undefined;
    };
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_slides_TextAndAppletSlide__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: "Area using Unit Squares",
    appletSrc: "./applets/triangle.html",
    downIcon: downIcon,
    navBar: navBar,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.Paragraph, {
      children: "Move the sliders to create a rectangle occupying an area of 54 unit squares."
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide5);

/***/ })

};
;