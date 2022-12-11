"use strict";
exports.id = 9285;
exports.ids = [9285];
exports.modules = {

/***/ 9285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ volume_of_cube_Slide4)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/StyledElements.js
var StyledElements = __webpack_require__(6937);
// EXTERNAL MODULE: ./hooks/useDeviceType.js + 1 modules
var useDeviceType = __webpack_require__(9716);
// EXTERNAL MODULE: ./components/text/index.js + 5 modules
var components_text = __webpack_require__(5592);
// EXTERNAL MODULE: ./utils/fontStyles.js
var fontStyles = __webpack_require__(7605);
// EXTERNAL MODULE: ./utils/colors.js
var colors = __webpack_require__(9717);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/slides/AppletSlide.js








const IFrame = (external_styled_components_default()).iframe`
   width: 700px;
   height: 700px;

   @media only screen and (min-width: 200px) and (max-width: 399px) {
      width: 150px;
      height: 150px;
   }

   @media only screen and (min-width: 200px) and (max-width: 768px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-width: 768px) and (max-width: 992px) {
      width: 350px;
      height: 350px;
   }

   @media only screen and (min-height: 400px) and (max-height: 600px) and (min-width: 700px) {
      width: 250px;
      height: 250px;
   }

   @media only screen and (min-height: 600px) and (max-height: 800px) and (min-width: 700px) {
      width: 350px;
      height: 350px;
   }
`;

const AppletSlide = ({
  title,
  navBar,
  downIcon,
  description,
  isLastSlide,
  bg = "LIGHT",
  appletSrc = "./applets/triangle.html"
}) => {
  const isMobile = (0,useDeviceType/* useDeviceType */.h)() === useDeviceType/* DEVICE_TYPES.MOBILE */.W.MOBILE;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.SlideWrap, {
    bg: bg,
    isLastSlide: isLastSlide,
    padding: isMobile ? "0 0 20px 0" : "20px",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
      alignItems: "center",
      width: "100%",
      height: isMobile ? "70%" : "auto",
      justifyContent: isMobile ? "flex-start" : "center",
      gap: isMobile ? "30px" : "60px",
      direction: isMobile ? "column" : "row",
      children: [navBar, /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
        gap: isMobile ? "30px" : "0",
        margin: isMobile ? "auto 0" : "0",
        justifyContent: isMobile ? "flex-start" : "space-evenly",
        flex: "2",
        alignItems: "center",
        children: [title && /*#__PURE__*/jsx_runtime_.jsx(components_text.Title, {
          color: bg === "LIGHT" ? colors/* colors.BLACK */.O.BLACK : colors/* colors.WHITE */.O.WHITE,
          fontSize: fontStyles/* fontSizes.H2 */.C.H2,
          fontWeight: fontStyles/* fontWeights.BOLD */.v.BOLD,
          padding: "5%",
          small: true,
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
          direction: isMobile ? "column-reverse" : "row",
          gap: "30px",
          alignItems: "center",
          children: [description && /*#__PURE__*/jsx_runtime_.jsx(components_text.Paragraph, {
            color: bg === "LIGHT" ? colors/* colors.BLACK */.O.BLACK : colors/* colors.WHITE */.O.WHITE,
            children: description
          }), /*#__PURE__*/jsx_runtime_.jsx(IFrame, {
            src: appletSrc,
            allowFullScreen: true,
            frameBorder: "0"
          })]
        })]
      })]
    }), downIcon]
  });
};

/* harmony default export */ const slides_AppletSlide = (AppletSlide);
;// CONCATENATED MODULE: ./pages/volume-of-cube/Slide4.js



const Slide4 = ({
  downIcon,
  navBar
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(slides_AppletSlide, {
    downIcon: downIcon,
    navBar: navBar,
    description: "Applet description here"
  });
};

/* harmony default export */ const volume_of_cube_Slide4 = (Slide4);

/***/ })

};
;