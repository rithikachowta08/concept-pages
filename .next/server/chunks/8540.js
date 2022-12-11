"use strict";
exports.id = 8540;
exports.ids = [8540,9717];
exports.modules = {

/***/ 2150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_media_QuestionAnswerImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5664);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const Icon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Icon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide3.js -> " + "components/StyledElements"]
  }
});
const SlideWrap = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.SlideWrap), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide3.js -> " + "components/StyledElements"]
  }
});
const Flex = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6937)).then(mod => mod.Flex), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6937)],
    modules: ["triangles/Slide3.js -> " + "components/StyledElements"]
  }
});
const Title = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Title), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide3.js -> " + "components/text"]
  }
});
const Paragraph = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5592)).then(mod => mod.Paragraph), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5592)],
    modules: ["triangles/Slide3.js -> " + "components/text"]
  }
});
const Modal = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 5758).then(__webpack_require__.bind(__webpack_require__, 5758)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5758)],
    modules: ["triangles/Slide3.js -> " + "components/layout/Modal"]
  }
});
const bg = "assets/white_bg.png";
const info = "assets/info.svg";
const boat = "assets/boat.svg";
const tent_with_triangle = "assets/tent_with_triangle.svg";
const boat_correct_answer = "assets/boat_correct_answer.svg";
const boat_wrong_answer = "assets/boat_wrong_answer.svg";

const Slide3 = () => {
  const modalContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Flex, {
    direction: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Paragraph, {
      color: "white",
      marginBottom: "50px",
      fontSize: "1.5rem",
      children: "If the object has a triangular surface present within itself, then choose 'Yes'"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
      fontSize: "1.8rem",
      marginBottom: "20px",
      color: "white",
      fontWeight: 700,
      small: true,
      children: "Example"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_media_QuestionAnswerImage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      width: "fit-content",
      correctAnswerSrc: tent_with_triangle,
      correctAnswerMsg: "Yes",
      isCorrectAnswer: true
    })]
  });

  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDismiss = () => {
    setIsModalOpen(false);
  };

  const ANSWER_TYPES = {
    YES: "YES",
    NO: "NO"
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(SlideWrap, {
    bg: "LIGHT",
    alignItems: "center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Modal, {
      isOpen: isModalOpen,
      content: modalContent,
      onDismiss: onDismiss
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Title, {
      opacity: 0.5,
      small: true,
      children: "Identify the triangles"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Flex, {
      marginBottom: "40px",
      alignItems: "center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Paragraph, {
        marginRight: "10px",
        children: "Does this object have a triangle in it?"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Icon, {
        src: info,
        onClick: onClick
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(components_media_QuestionAnswerImage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
      options: Object.values(ANSWER_TYPES),
      defaultSrc: boat,
      correctAnswer: ANSWER_TYPES.YES,
      correctAnswerMsg: "Great job!",
      wrongAnswerMsg: "This object has a triangle",
      correctAnswerSrc: boat_correct_answer,
      wrongAnswerSrc: boat_wrong_answer
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide3);

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