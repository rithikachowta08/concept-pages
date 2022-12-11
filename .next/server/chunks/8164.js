"use strict";
exports.id = 8164;
exports.ids = [8164];
exports.modules = {

/***/ 8164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Img = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
   opacity: ${props => props.activeIndex === props.index ? "1" : "0"};
   grid-row-start: 1;
   grid-column-start: 1;
   transition: opacity 0.2s;
   width: ${props => props.width || "550px"};
   height: ${props => props.width || "550px"};

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      width: ${props => props.mobileSize || "250px"};
      height: ${props => props.mobileSize || "250px"};
   }
   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: ${props => props.tabletSize || "350px"};
      height: ${props => props.tabletSize || "350px"};
   }
   @media only screen and (min-height: 300px) and (max-height: 600px) and (min-width: 700px) {
      width: ${props => props.mobileSize || "250px"};
      height: ${props => props.mobileSize || "250px"};
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 700px) {
      width: ${props => props.tabletSize || "350px"};
      height: ${props => props.tabletSize || "350px"};
   }
`;
const ImgContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   display: grid;
   grid-template-columns: 1fr;
   position: relative;
   bottom: ${props => props.bottomOffset || "0"};
   margin-right: ${props => props.marginRight};
   justify-items: center;
`;

const TransitionImage = ({
  images,
  marginRight,
  activeIndex,
  width,
  defaultSize,
  tabletSize,
  mobileSize
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ImgContainer, {
    marginRight: marginRight,
    children: images.map((image, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Img, {
      src: image,
      index: index,
      width: width,
      activeIndex: activeIndex,
      mobileSize: mobileSize,
      defaultSize: defaultSize,
      tabletSize: tabletSize,
      alt: "image"
    }, index))
  });
};

TransitionImage.defaultProps = {
  activeIndex: 0,
  bottomOffset: "0px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionImage);

/***/ })

};
;