"use strict";
exports.id = 3885;
exports.ids = [3885];
exports.modules = {

/***/ 3885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ area_of_rectangle_Slide6)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/StyledElements.js
var StyledElements = __webpack_require__(6937);
// EXTERNAL MODULE: ./components/text/index.js + 5 modules
var components_text = __webpack_require__(5592);
// EXTERNAL MODULE: ./components/media/QuestionAnswerImage.js
var QuestionAnswerImage = __webpack_require__(5664);
// EXTERNAL MODULE: ./components/layout/Modal.js
var Modal = __webpack_require__(5758);
// EXTERNAL MODULE: ./hooks/useDeviceType.js + 1 modules
var useDeviceType = __webpack_require__(9716);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/slides/ActivitySlide.js







const info = "assets/info.svg";
const tent_with_triangle = "assets/tent_with_triangle.svg";

const ActivitySlide = ({
  activity,
  content,
  title,
  downIcon,
  children,
  navBar
}) => {
  const isMobile = (0,useDeviceType/* useDeviceType */.h)() === useDeviceType/* DEVICE_TYPES.MOBILE */.W.MOBILE;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.SlideWrap, {
    bg: "LIGHT",
    alignItems: "center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
      children: [children, /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
        children: [navBar, /*#__PURE__*/jsx_runtime_.jsx(components_text.Title, {
          opacity: 0.5,
          small: true,
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
          direction: isMobile ? "column-reverse" : "column",
          children: [/*#__PURE__*/jsx_runtime_.jsx(StyledElements.Flex, {
            marginBottom: "40px",
            alignItems: "center",
            children: content
          }), activity]
        })]
      })]
    }), downIcon]
  });
};

/* harmony default export */ const slides_ActivitySlide = (ActivitySlide);
;// CONCATENATED MODULE: ./pages/area-of-rectangle/Slide6.js








const Slide6_info = "assets/info.svg";
const boat = "assets/boat.svg";
const Slide6_tent_with_triangle = "assets/tent_with_triangle.svg";
const boat_correct_answer = "assets/boat_correct_answer.svg";
const boat_wrong_answer = "assets/boat_wrong_answer.svg";

const Slide6 = ({
  downIcon,
  navBar
}) => {
  const modalContent = /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
    direction: "column",
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_text.Paragraph, {
      color: "white",
      marginBottom: "50px",
      fontSize: "1.5rem",
      children: "If the object has a triangular surface present within itself, then choose 'Yes'"
    }), /*#__PURE__*/jsx_runtime_.jsx(components_text.Title, {
      fontSize: "1.8rem",
      marginBottom: "20px",
      color: "white",
      fontWeight: 700,
      small: true,
      children: "Example"
    }), /*#__PURE__*/jsx_runtime_.jsx(QuestionAnswerImage/* default */.Z, {
      width: "fit-content",
      correctAnswerSrc: Slide6_tent_with_triangle,
      correctAnswerMsg: "Yes",
      isCorrectAnswer: true
    })]
  });

  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,external_react_.useState)(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDismiss = () => {
    setIsModalOpen(false);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(slides_ActivitySlide, {
    bg: "LIGHT",
    title: "Identify the triangles",
    activity: /*#__PURE__*/jsx_runtime_.jsx(QuestionAnswerImage/* default */.Z, {
      defaultSrc: boat,
      options: ["Fig. A", "Fig. B"],
      correctAnswer: "Fig. A",
      correctAnswerMsg: "Great job!",
      wrongAnswerMsg: "This object has a triangle",
      correctAnswerSrc: boat_correct_answer,
      wrongAnswerSrc: boat_wrong_answer
    }),
    content: /*#__PURE__*/(0,jsx_runtime_.jsxs)(components_text.Paragraph, {
      marginRight: "10px",
      children: ["Does this object have a triangle in it?", /*#__PURE__*/jsx_runtime_.jsx(StyledElements.Icon, {
        src: Slide6_info,
        onClick: onClick
      })]
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: /*#__PURE__*/jsx_runtime_.jsx(Modal.default, {
      isOpen: isModalOpen,
      content: modalContent,
      onDismiss: onDismiss
    })
  });
};

/* harmony default export */ const area_of_rectangle_Slide6 = (Slide6);

/***/ })

};
;