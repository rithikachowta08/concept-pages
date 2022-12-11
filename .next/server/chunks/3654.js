"use strict";
exports.id = 3654;
exports.ids = [3654];
exports.modules = {

/***/ 8514:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_StyledElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6937);
/* harmony import */ var components_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5592);
/* harmony import */ var utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9717);
/* harmony import */ var hooks_useDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9716);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8419);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const VideoSlideWrap = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
   background-color: ${utils_colors__WEBPACK_IMPORTED_MODULE_4__/* .colors.BLACK */ .O.BLACK};
   height: 100%;
   width: 100%;
   padding: 20px;
   gap: 20px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   box-sizing: border-box;
`;

const VideoSlide = ({
  title,
  downIcon,
  navBar,
  src
}) => {
  const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
  const {
    0: isRotated,
    1: setIsRotated
  } = useState(false);

  function onFullScreen() {
    const isFullscreenNow = document.webkitFullscreenElement !== null;
    console.log("isFullscreenNow", isFullscreenNow);
    setIsRotated(isFullscreenNow);
  }

  function makeLandscape() {
    // this works on android, not iOS
    window.screen.orientation.lock("landscape").then(success => console.log(success), failure => console.log(failure));
  }

  useEffect(() => {
    document.getElementById("video-element").addEventListener("webkitfullscreenchange", onFullScreen);
    document.getElementById("video-element").addEventListener("fullscreenchange", onFullScreen);
  }, []);

  const toggleFullScreen = () => {
    const div = document.getElementById("video-element");

    if (div.requestFullscreen) {
      div.requestFullscreen();
      setIsRotated(!isRotated);
      makeLandscape();
    } else if (div.webkitRequestFullscreen) {
      div.webkitRequestFullscreen();
      setIsRotated(!isRotated);
      makeLandscape();
    } else if (div.msRequestFullScreen) {
      div.msRequestFullScreen();
      setIsRotated(!isRotated);
      makeLandscape();
    }
  };

  return /*#__PURE__*/_jsxs(VideoSlideWrap, {
    children: [/*#__PURE__*/React.cloneElement(navBar, {
      isAbsolute: true
    }), /*#__PURE__*/_jsx(Video, {
      id: "video-element",
      src: src,
      isRotated: isRotated,
      controls: true,
      muted: true,
      autoPlay: true
    }), title && /*#__PURE__*/_jsx(TextSpan, {
      color: colors.WHITE,
      children: title
    }), isMobile && /*#__PURE__*/_jsx(Button, {
      onClick: toggleFullScreen,
      children: "Rotate screen"
    }), /*#__PURE__*/React.cloneElement(downIcon, {
      isVideoSlide: true
    })]
  });
};

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (VideoSlide)));

/***/ })

};
;