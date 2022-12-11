"use strict";
exports.id = 5758;
exports.ids = [5758];
exports.modules = {

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5592);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6937);
/* harmony import */ var utils_fontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7605);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8419);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




const crossIcon = "assets/cross_icon.svg";



const Overlay = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
   background: rgba(0, 0, 0, 0.5);
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   visibility: ${props => props.isOpen ? "visible" : "hidden"};
   transition: all 0.5s;
   z-index: 7;
`;
const ModalBody = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
   width: 40vw;
   height: 100%;
   position: absolute;
   bottom: 0;
   background: #3c3281;
   color: white;
   transform: ${props => props.isOpen ? "translateX(0px)" : "translateX(-999px)"};
   border-radius: 0px 20px 20px 0px;
   padding: 65px 40px;
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   transition: transform 0.5s;

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      width: 100%;
      height: 80%;
      transform: ${props => props.isOpen ? "translateY(0px)" : "translateY(999px)"};
   }

   @media only screen and (min-width: 768px) and (max-width: 1284px) {
      width: 50vw;
   }
`;

const Modal = ({
  onDismiss,
  content,
  title,
  isOpen
}) => {
  const onClick = e => {
    if (e.target.id === "overlay") {
      onDismiss();
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Overlay, {
    isOpen: isOpen,
    id: "overlay",
    onClick: onClick,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ModalBody, {
      isOpen: isOpen,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        children: [title ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_text__WEBPACK_IMPORTED_MODULE_0__.Title, {
          fontWeight: utils_fontStyles__WEBPACK_IMPORTED_MODULE_2__/* .fontWeights.BOLD */ .v.BOLD,
          fontSize: utils_fontStyles__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes.LARGE */ .C.LARGE,
          color: "white",
          small: true,
          children: title
        }) : null, title ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          children: content
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_StyledElements__WEBPACK_IMPORTED_MODULE_1__.Icon, {
          alignSelf: title ? "center" : "start",
          src: crossIcon,
          onClick: onDismiss
        })]
      }), title ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        children: content
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(components_Button__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        position: "fixed",
        bottom: "40px",
        width: "130px",
        onClick: onDismiss,
        children: "Got it!"
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ })

};
;