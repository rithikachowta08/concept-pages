"use strict";
exports.id = 7787;
exports.ids = [7787];
exports.modules = {

/***/ 7787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6937);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_layout_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5758);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9717);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5592);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8164);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3185);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7605);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










const area_triangle_modal = "assets/area-of-triangle/slide_2_modal.svg";
const area_triangle = "assets/area-of-triangle/slide_2_normal.svg";
const area_triangle_shaded = "assets/area-of-triangle/slide_2_shaded.svg"; // Definition

const Slide2 = ({
  downIcon,
  navBar
}) => {
  const modalContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    direction: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.Paragraph, {
      color: "white",
      marginBottom: "50px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: "A triangle is a closed shape that has three sides, three angles, and three vertices."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.StyledImg, {
      src: area_triangle_modal,
      alignSelf: "center"
    })]
  });

  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDismiss = () => {
    setIsModalOpen(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(activeIndex);
  }, [activeIndex]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
    title: "Definition",
    secondaryTitle: "Area of a triangle",
    downIcon: downIcon,
    navBar: navBar,
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_0__.LeftWrap, {
      padding: "40px",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_5__.default, {
        images: [area_triangle, area_triangle_shaded],
        activeIndex: activeIndex
      })
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_layout_Modal__WEBPACK_IMPORTED_MODULE_2__.default, {
      isOpen: isModalOpen,
      title: "What is a triangle?",
      content: modalContent,
      onDismiss: onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_4__.Paragraph, {
      marginBottom: "70px",
      fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
      children: ["The area of a", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.BLACK */ .O.BLACK,
        textDecoration: "underline",
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        cursor: "pointer",
        fontWeight: 700,
        marginBottom: "16px",
        onClick: onClick,
        children: "triangle"
      }), " ", "is the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(components_text__WEBPACK_IMPORTED_MODULE_4__.TextSpan, {
        color: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.WHITE */ .O.WHITE,
        fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_7__/* .fontSizes.MEDIUM */ .C.MEDIUM,
        fontWeight: 400,
        marginBottom: "16px",
        onHover: () => setActiveIndex(1),
        onHoverOut: () => setActiveIndex(0),
        bgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.RED */ .O.RED,
        hoverBgColor: utils_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        children: "region enclosed"
      }), " ", "within its three sides."]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide2);

/***/ })

};
;