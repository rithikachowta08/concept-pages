"use strict";
exports.id = 2982;
exports.ids = [2982,9717];
exports.modules = {

/***/ 9716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ DEVICE_TYPES),
  "h": () => (/* binding */ useDeviceType)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./hooks/useMediaQuery.js


const useMediaQuery = query => {
  const {
    0: matches,
    1: setMatches
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

/* harmony default export */ const hooks_useMediaQuery = (useMediaQuery);
;// CONCATENATED MODULE: ./hooks/useDeviceType.js

const DEVICE_TYPES = {
  MOBILE: "MOBILE",
  TABLET: "TABLET",
  DESKTOP: "DESKTOP",
  HIGH_RES_DESKTOP: "HIGH_RES_DESKTOP"
};
const useDeviceType = () => {
  const isHighResDesktop = hooks_useMediaQuery("(min-width: 1224px)");
  const isDesktop = hooks_useMediaQuery("(min-width: 992px) and (max-width: 1224px)");
  const isTablet = hooks_useMediaQuery("(min-width: 768px) and (max-width: 992px)");
  const isMobile = hooks_useMediaQuery("(min-width: 200px) and (max-width: 768px)");

  if (isHighResDesktop) {
    return DEVICE_TYPES.HIGH_RES_DESKTOP;
  } else if (isDesktop) {
    return DEVICE_TYPES.DESKTOP;
  } else if (isMobile) {
    return DEVICE_TYPES.MOBILE;
  } else if (isTablet) {
    return DEVICE_TYPES.TABLET;
  }
};

/***/ }),

/***/ 9717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  GREEN: "#4DCB88",
  RED: "#EA6560",
  WHITE: "#ffffff",
  DARK_BLUE: "#4A33F5",
  DARK_GREY: "#333333",
  BLACK: "#000000",
  AQUA: "#67DBE8",
  YELLOW: "#fec429",
  PURPLE: "#4A33F5"
};

/***/ })

};
;