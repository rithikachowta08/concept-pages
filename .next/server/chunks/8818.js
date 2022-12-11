"use strict";
exports.id = 8818;
exports.ids = [8818];
exports.modules = {

/***/ 8818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const Icon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Icon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide8.js -> " + "components/StyledElements"]
  }
});
const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide8.js -> " + "components/StyledElements"]
  }
});
const Flex = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 6937).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Flex), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide8.js -> " + "components/StyledElements"]
  }
});
const Paragraph = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(5592), __webpack_require__.e(9717)]).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Paragraph), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide8.js -> " + "components/text"]
  }
});
const bg = "assets/white_bg.png";
const error = "assets/error.svg";
const success = "assets/success.svg";
const IFrame = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().iframe)`
   width: 750px;
   height: 700px;
   @media (max-height: 600px) {
      width: 500px;
      height: 550px;
   }
   @media (max-height: 700px) {
      width: 550px;
      height: 600px;
   }
   @media (max-height: 900px) {
      width: 600px;
      height: 650px;
   }
`;

const Slide8 = () => {
  const triggerToast = isRightAngled => {
    if (isRightAngled) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("That is correct! ABC is a right angled triangle", {
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Icon, {
          src: success,
          width: "20px"
        })
      });
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("A right angled triangle has one angle equal to 90°", {
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Icon, {
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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(SlideWrap, {
    bg: "LIGHT",
    padding: "100px",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Flex, {
      alignItems: "center",
      justifyContent: "space-around",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Paragraph, {
        maxWidth: "30%",
        children: "Move the vertices to form a right angled triangle"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IFrame, {
        src: "./applets/triangle.html",
        allowFullScreen: true,
        frameBorder: "0"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide8);

/***/ })

};
;