"use strict";
exports.id = 4239;
exports.ids = [4239];
exports.modules = {

/***/ 4239:
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
const rectangle_length = "assets/area-of-rectangle/rectangle_length.svg";
const rectangle_width = "assets/area-of-rectangle/rectangle_width.svg";
const rectangle_square_units = "assets/area-of-rectangle/rectangle_square_units.svg";






const Slide8 = ({
  downIcon,
  navBar
}) => {
  const modalContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      marginBottom: "40px",
      fontSize: "1.22rem",
      children: "The area of a rectangle is measured in square units (square centimeters, square inches, square feet, and so on)."
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Title, {
      color: "white",
      fontSize: "1.22rem",
      children: "Example :"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.StyledImg, {
      src: rectangle_square_units,
      width: "-webkit-fill-available"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      fontSize: "1.22rem",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          children: "Area\xA0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: ["= 4 cm \xD7 3 cm", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("br", {}), "= 12 sq cm"]
        })]
      })
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
    setActiveIndex(e);
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: [rectangle_plain, rectangle_length, rectangle_width],
      activeIndex: activeIndex
    }),
    downIcon: downIcon,
    navBar: navBar,
    bg: "DARK",
    secondaryTitle: "Area of Rectangle",
    title: "General Formula",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_layout_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      isOpen: isModalOpen,
      title: "Square Units",
      content: modalContent,
      onDismiss: onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "50px",
      color: "white",
      children: ["Area of a rectangle =", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        onHover: () => onHover(1),
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "Length"
      }), "\xD7", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        onHover: () => onHover(2),
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.AQUA */ .O.AQUA,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "Width"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      children: ["The area obtained is measured in\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
        style: {
          cursor: "pointer"
        },
        onClick: onClick,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("u", {
          children: "square units"
        })
      }), "."]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide8);

/***/ })

};
;