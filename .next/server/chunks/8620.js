"use strict";
exports.id = 8620;
exports.ids = [8620];
exports.modules = {

/***/ 8620:
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






const cube_red = "assets/volume-of-cube/slide2/cube-1.png";
const cube_spaces = "assets/volume-of-cube/slide2/cube-2.png";
const cube_unit = "assets/volume-of-cube/slide2/cube-3.png";




const Slide3 = ({
  downIcon,
  navBar
}) => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: isModalOpen,
    1: setIsModalOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const modalContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      color: "white",
      marginBottom: "1vh",
      fontSize: "1.5rem",
      children: "Unit cube is a cube whose sides are 1 unit long"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.StyledImg, {
      src: cube_unit,
      alignSelf: "center",
      marginBottom: "50px"
    })]
  });

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onDismiss = () => {
    setIsModalOpen(false);
  };

  const onHover = e => {
    setActiveIndex(Number(e.target.id));
  };

  const onHoverOut = e => {
    setActiveIndex(0);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_slides_TextAndDiagramSlide__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
    downIcon: downIcon,
    navBar: navBar,
    title: "What is the volume of a cube?",
    diagram: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_media_TransitionImage__WEBPACK_IMPORTED_MODULE_3__.default, {
      images: [cube_red, cube_spaces],
      activeIndex: activeIndex
    }),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_layout_Modal__WEBPACK_IMPORTED_MODULE_5__.default, {
      isOpen: isModalOpen,
      title: "Unit Cube",
      content: modalContent,
      onDismiss: onDismiss
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(components_text__WEBPACK_IMPORTED_MODULE_2__.Paragraph, {
      marginBottom: "70px",
      children: ["The volume of a cube is the", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpanBg, {
        id: 1,
        onHover: onHover,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.RED */ .O.RED,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        fontSize: "2.2rem",
        children: "space"
      }), " ", "occupied by it. It is also the total number of", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(components_text__WEBPACK_IMPORTED_MODULE_2__.TextSpan, {
        id: 2,
        onHoverOut: onHoverOut,
        color: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.BLACK */ .O.BLACK,
        hoverColor: utils_colors__WEBPACK_IMPORTED_MODULE_6__/* .colors.DARK_BLUE */ .O.DARK_BLUE,
        fontWeight: 700,
        textDecoration: "underline",
        cursor: "pointer",
        onClick: onClick,
        fontSize: "2.2rem",
        children: "unit cubes"
      }), " ", "that the cube can accomodate."]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide3);

/***/ })

};
;