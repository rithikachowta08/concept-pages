"use strict";
exports.id = 3573;
exports.ids = [3573];
exports.modules = {

/***/ 3573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5592);
/* harmony import */ var components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8164);
/* harmony import */ var components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3185);
/* harmony import */ var components_layout_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5758);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9717);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




const rectangle_plain = "assets/area-of-rectangle/rectangle_plain.svg";
const rectangle_shaded = "assets/area-of-rectangle/rectangle_shaded.svg";
const unit_square = "assets/area-of-rectangle/unit_square.svg";






const Slide3 = ({
  downIcon,
  navBar
}) => {
  const modalContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      fontSize: "1.5rem",
      children: "A unit square is a square with side length equal to 1 unit."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.StyledImg, {
      src: unit_square
    })]
  });

  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
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

  const onHover = e => {
    setActiveIndex(1);
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    title: "What is the area of a Rectangle?",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: [rectangle_plain, rectangle_shaded],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_layout_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      isOpen: isModalOpen,
      title: "Unit Square",
      content: modalContent,
      onDismiss: onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "50px",
      children: ["The area of a rectangle is the\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.PURPLE */ .O.PURPLE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "region enclosed"
      }), "\xA0within its four sides."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      children: ["It is also the number of\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
        style: {
          cursor: "pointer"
        },
        onClick: onClick,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("u", {
          children: "unit squares"
        })
      }), "\xA0that can fit into a rectangle."]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide3);

/***/ })

};
;