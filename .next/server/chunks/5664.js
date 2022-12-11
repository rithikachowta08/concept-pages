"use strict";
exports.id = 5664;
exports.ids = [5664,9627];
exports.modules = {

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

/***/ 5664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StyledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6937);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8419);
/* harmony import */ var _Pill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9627);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const success = "assets/success.svg";
const error = "assets/error.svg";
const ImgContainer = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
   position: relative;
   background-color: white;
   border: 1px solid ${props => props.color};
   width: ${props => props.width};
   border-radius: 24px;
   padding: 40px 60px;
   @media (max-height: 600px) {
      height: 100px;
   }
   @media (max-height: 700px) {
      height: 150px;
   }
   @media (max-height: 900px) {
      height: 280px;
   }
`;
const StyledImg = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().img)`
   @media (max-height: 600px) {
      height: 100px;
   }
   @media (max-height: 700px) {
      height: 150px;
   }
   @media (max-height: 900px) {
      height: 200px;
   }
`; // export const ANSWER_TYPES = {
//   YES: "YES",
//   NO: "NO"
// };

const QuestionAnswerImage = ({
  defaultSrc,
  width,
  options,
  isCorrectAnswer: defaultIsCorrectAnswer = null,
  correctAnswer,
  wrongAnswerSrc,
  correctAnswerMsg,
  wrongAnswerMsg,
  correctAnswerSrc
}) => {
  const {
    0: isCorrectAnswer,
    1: setIsCorrectAnswer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIsCorrectAnswer); // const onClickNo = () => {
  //   setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.NO);
  // };
  // const onClickYes = () => {
  //   setIsCorrectAnswer(correctAnswer === ANSWER_TYPES.YES);
  // };

  const onClickOption = optionClicked => {
    setIsCorrectAnswer(correctAnswer === optionClicked);
  };

  let imageSrc = defaultSrc;
  let color = utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.DARK_BLUE */ .O.DARK_BLUE;

  let bottomActions = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: options === null || options === void 0 ? void 0 : options.map((itm, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Button__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      onClick: () => onClickOption(itm),
      bgColor: "white",
      color: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
      borderColor: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
      children: itm
    }, idx))
  });

  if (isCorrectAnswer !== null) {
    if (isCorrectAnswer) {
      imageSrc = correctAnswerSrc;
      color = utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.GREEN */ .O.GREEN;
      bottomActions = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Pill__WEBPACK_IMPORTED_MODULE_4__.default, {
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.GREEN */ .O.GREEN,
        color: "white",
        icon: success,
        children: correctAnswerMsg
      });
    } else {
      color = utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.RED */ .O.RED;
      imageSrc = wrongAnswerSrc;
      bottomActions = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Pill__WEBPACK_IMPORTED_MODULE_4__.default, {
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_5__/* .colors.RED */ .O.RED,
        color: "white",
        icon: error,
        children: wrongAnswerMsg
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ImgContainer, {
    color: color,
    width: width,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StyledImg, {
      src: imageSrc
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_StyledElements__WEBPACK_IMPORTED_MODULE_2__.Flex, {
      justifyContent: isCorrectAnswer !== null ? "center" : "space-between",
      position: "absolute",
      left: "50%",
      bottom: "0",
      transform: "translate(-50%,50%)",
      width: isCorrectAnswer !== null ? "70%" : "60%",
      children: bottomActions
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionAnswerImage);

/***/ })

};
;