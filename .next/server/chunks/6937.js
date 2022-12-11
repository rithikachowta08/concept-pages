"use strict";
exports.id = 6937;
exports.ids = [6937];
exports.modules = {

/***/ 6937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideWrap": () => (/* binding */ SlideWrap),
/* harmony export */   "TitleSlideWrap": () => (/* binding */ TitleSlideWrap),
/* harmony export */   "LeftWrap": () => (/* binding */ LeftWrap),
/* harmony export */   "Flex": () => (/* binding */ Flex),
/* harmony export */   "StyledImg": () => (/* binding */ StyledImg),
/* harmony export */   "Icon": () => (/* binding */ Icon),
/* harmony export */   "PageWrap": () => (/* binding */ PageWrap),
/* harmony export */   "Video": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const lightBg = "assets/white_bg.webp";
const darkBg = "assets/purple_bg.webp";
const darkWithTrianglesBg = "assets/purple_bg_triangles.webp";
const bgToImageMap = {
  LIGHT: lightBg,
  DARK: darkBg,
  DARK_PATTERNED: darkWithTrianglesBg
};
const SlideWrap = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   background: url(${props => props.bg ? bgToImageMap[props.bg] : "none"});
   background-color: ${props => props.bgColor};
   height: 100%;
   width: 100%;
   padding: ${props => props.padding};
   gap: ${props => props.gap};
   display: flex;
   flex-direction: column;
   justify-content: center;
   box-sizing: border-box;
   background-size: cover;
   background-repeat: no-repeat;
   align-items: center;

   ${props => props.isLastSlide || props.hideFiller ? "" : `&::before {
      content: "D";
      margin: 1px 1px auto 1px;
      visibility: hidden;
      padding: 5px;
      background: #ddd;
   }`}

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      &::before {
         display: none;
      }
      justify-content: ${props => props.isLastSlide ? "flex-start" : "center"};
   }
`;
const TitleSlideWrap = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   background: url(${props => props.bg ? bgToImageMap[props.bg] : "none"});
   padding-left: 10%;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: ${props => props.justifyContent || "center"};
   box-sizing: border-box;
   background-size: cover;
   background-repeat: no-repeat;
   align-items: ${props => props.alignItems};

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      padding-left: 5%;
   }
`;
const LeftWrap = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   width: 50%;
   @media only screen and (min-width: 200px) and (max-width: 768px) {
      width: 90%;
   }
`;
const Flex = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   display: flex;
   flex-direction: ${props => props.direction || "row"};
   width: ${props => props.width};
   height: ${props => props.height};
   gap: ${props => props.gap};
   flex: ${props => props.flex};
   padding: ${props => props.padding};
   color: ${props => props.color};
   background-color: ${props => props.bgColor};
   border-radius: ${props => props.borderRadius};
   position: ${props => props.position};
   left: ${props => props.left};
   bottom: ${props => props.bottom};
   transform: ${props => props.transform};
   justify-content: ${props => props.justifyContent};
   align-items: ${props => props.alignItems};
   align-self: ${props => props.alignSelf};
   flex-flow: ${props => props.flexFlow};
   cursor: ${props => props.cursor};
   margin: ${props => props.margin};
   margin-bottom: ${props => props.marginBottom};
   margin-right: ${props => props.marginRight};
`;
const StyledImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
   margin-right: ${props => props.marginRight || "0"};
   margin-bottom: ${props => props.marginBottom || "0"};
   align-self: ${props => props.alignSelf || "center"};
   transform: ${props => props.transform || "none"};
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
   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 700px) {
      width: ${props => props.mobileSize || "250px"};
      height: ${props => props.mobileSize || "250px"};
   }
   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 700px) {
      width: ${props => props.tabletSize || "350px"};
      height: ${props => props.tabletSize || "350px"};
   }
`;
const Icon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
   width: ${props => props.width || "15px"};
   height: ${props => props.height || props.width || "15px"};
   cursor: pointer;
   margin-right: ${props => props.marginRight};
   align-self: ${props => props.alignSelf};
`;
const PageWrap = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
   height: 100%;
   width: 100%;
`;
const Video = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().video)`
   display: block;
   width: 100%;
   height: ${props => props.isRotated ? "100vh" : "75vh"};

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      height: ${props => props.isRotated ? "100vh" : "60vh"};
   }
   position: ${props => props.isRotated ? "absolute" : "static"};
   transform: ${props => props.isRotated ? "rotate(90deg) !important" : "none"};
   transform-origin: ${props => props.isRotated ? "bottom left" : "none"};
   margin-top: ${props => props.isRotated ? "-100vw" : "none"};
   object-fit: ${props => props.isRotated ? "cover" : "none"};

   z-index: 4;
   visibility: visible;
`;

/***/ })

};
;