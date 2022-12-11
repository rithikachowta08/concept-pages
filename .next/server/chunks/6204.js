"use strict";
exports.id = 6204;
exports.ids = [6204];
exports.modules = {

/***/ 6204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FullPageCustomWrapper": () => (/* binding */ FullPageCustomWrapper)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./hooks/useDeviceType.js + 1 modules
var useDeviceType = __webpack_require__(9716);
// EXTERNAL MODULE: external "@fullpage/react-fullpage"
var react_fullpage_ = __webpack_require__(3164);
var react_fullpage_default = /*#__PURE__*/__webpack_require__.n(react_fullpage_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/colors.js
var colors = __webpack_require__(9717);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/DownArrowIcon.js





const IconWrap = (external_styled_components_default()).div`
   cursor: pointer;
   margin: ${props => props.isVideoSlide ? "0 auto" : "auto 0 0 0"};
`;

const DownArrowIcon = ({
  color = colors/* colors.DARK_GREY */.O.DARK_GREY,
  isVideoSlide,
  className,
  onClick
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(IconWrap, {
    onClick: onClick,
    isVideoSlide: isVideoSlide,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      width: "66",
      height: "66",
      viewBox: "0 0 66 66",
      fill: "none",
      className: className,
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
        cx: "33",
        cy: "33",
        r: "32",
        stroke: color,
        strokeWidth: "1.3",
        strokeLinecap: "round"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M23 31L32.6 40.2444L42.2 31",
        stroke: color,
        strokeWidth: "1.3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    })
  });
};

/* harmony default export */ const components_DownArrowIcon = (DownArrowIcon);
// EXTERNAL MODULE: ./components/StyledElements.js
var StyledElements = __webpack_require__(6937);
// EXTERNAL MODULE: ./components/text/index.js + 5 modules
var components_text = __webpack_require__(5592);
;// CONCATENATED MODULE: ./components/full-page-wrapper/MobileNavBar.js






const down_caret_light = "assets/down_caret.svg";
const up_caret_light = "assets/up_caret_light.svg";
const down_caret_dark = "assets/down_caret_dark.svg";
const up_caret_dark = "assets/up_caret.svg";
const MobileNavWrap = (external_styled_components_default()).div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   justify-content: center;
   background: rgba(231, 228, 248, 0.4);
   backdrop-filter: ${props => props.isExpanded ? "blur(15px)" : "blur(38px)"};
   border-radius: ${props => props.isExpanded ? "0px 0px 15px 15px" : "0px"};
   grid-row-start: 1;
   grid-column-start: 1;
`;
const SectionBar = (external_styled_components_default()).div`
   height: 0px;
   flex: ${props => props.flex};
   border: 2px solid
      ${props => props.darkTheme ? `rgba(255, 255, 255, 0.2)` : `rgba(74, 51, 245, 0.2)`};
`;
const SectionIndicator = (external_styled_components_default()).div`
   border-radius: 50%;
   position: relative;
   cursor: pointer;
   width: ${props => props.isMobile ? "6px" : "14px"};
   height: ${props => props.isMobile ? "6px" : "14px"};
   border: ${props => props.isMobile ? "2px" : "4px"} solid
      ${props => props.darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.PURPLE */.O.PURPLE};
   background: ${props => props.isComplete ? props.darkTheme ? `${colors/* colors.WHITE */.O.WHITE}` : `${colors/* colors.PURPLE */.O.PURPLE}` : `none`};
   box-shadow: ${props => props.isComplete ? props.darkTheme ? `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(255, 255, 255, 0.3)` : `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(74, 51, 245, 0.3)` : `none`};
   transition: all 0.3s;
`;
const BarFill = (external_styled_components_default()).div`
   height: 0px;
   width: ${props => props.percentage === 100 ? 105 : props.percentage}%;
   border: ${props => props.percentage ? `2px solid ${props.darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.PURPLE */.O.PURPLE}` : "none"};
   transform: translate(-2px, -2px);
   transition: all 0.3s;
`;

const MobileNavBar = ({
  toggleNav,
  currentPageIdx,
  onSectionClick,
  darkTheme,
  sections,
  isExpanded
}) => {
  const currentSection = sections.find(section => section.slides.includes(currentPageIdx)) || sections[0];
  let icon = darkTheme ? down_caret_light : down_caret_dark;

  if (isExpanded) {
    icon = darkTheme ? up_caret_light : up_caret_dark;
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MobileNavWrap, {
    isExpanded: isExpanded,
    darkTheme: darkTheme,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
      padding: isExpanded ? "20px" : "10px 20px 0px 20px",
      color: darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.BLACK */.O.BLACK,
      justifyContent: "space-between",
      children: [isExpanded ? /*#__PURE__*/jsx_runtime_.jsx(StyledElements.Flex, {
        gap: "10px",
        direction: "column",
        children: sections.map((section, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex // moveTo expects slide indices to start from 1
        , {
          "data-section-idx": section.slides[0] + 1,
          onClick: onSectionClick,
          cursor: "pointer",
          gap: "10px",
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(SectionIndicator, {
            isMobile: true,
            darkTheme: darkTheme,
            isComplete: currentPageIdx >= section.slides[0]
          }), /*#__PURE__*/jsx_runtime_.jsx(components_text.TextSpan, {
            color: darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.BLACK */.O.BLACK,
            children: section.title
          })]
        }, idx))
      }) : /*#__PURE__*/jsx_runtime_.jsx(components_text.TextSpan, {
        color: darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.BLACK */.O.BLACK,
        children: currentSection.title
      }), /*#__PURE__*/jsx_runtime_.jsx(StyledElements.Icon, {
        alignSelf: isExpanded ? "flex-start" : "center",
        src: icon,
        onClick: toggleNav
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(StyledElements.Flex, {
      justifyContent: "space-between",
      children: sections.map((section, idx) => {
        let percentage = 0;
        const slides = section.slides;

        if (currentPageIdx >= slides[slides.length - 1]) {
          percentage = 100;
        } else if (slides.includes(currentPageIdx)) {
          const slideIdx = slides.indexOf(currentPageIdx);
          percentage = (slideIdx + 1) / slides.length * 100;
        }

        return /*#__PURE__*/jsx_runtime_.jsx(SectionBar, {
          darkTheme: darkTheme,
          flex: 95 / sections.length / 100,
          children: /*#__PURE__*/jsx_runtime_.jsx(BarFill, {
            darkTheme: darkTheme,
            percentage: percentage
          })
        }, idx);
      })
    })]
  });
};

/* harmony default export */ const full_page_wrapper_MobileNavBar = (MobileNavBar);
// EXTERNAL MODULE: ./utils/fontStyles.js
var fontStyles = __webpack_require__(7605);
;// CONCATENATED MODULE: ./components/full-page-wrapper/DefaultNavBar.js







const left_caret_dark = "assets/left_caret.svg";
const left_caret_light = "assets/left_caret_light.svg";
const NavWrap = (external_styled_components_default()).div`
   background: rgba(231, 228, 248, 0.4);
   backdrop-filter: ${props => props.isExpanded ? "blur(15px)" : "blur(38px)"};
   padding: 70px 30px;
   border: ${props => props.darkTheme ? "none" : `1px solid ${colors/* colors.PURPLE */.O.PURPLE}`};
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   cursor: pointer;
   grid-row-start: 1;
   grid-column-start: 1;
   width: ${props => props.isExpanded ? "400px" : "100%"};
`;
const DefaultNavBar_SectionIndicator = (external_styled_components_default()).div`
   border-radius: 50%;
   position: relative;
   cursor: pointer;
   width: ${props => props.isMobile ? "6px" : "14px"};
   height: ${props => props.isMobile ? "6px" : "14px"};
   border: ${props => props.isMobile ? "2px" : "4px"} solid
      ${props => props.darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.PURPLE */.O.PURPLE};
   background: ${props => props.isComplete ? props.darkTheme ? `${colors/* colors.WHITE */.O.WHITE}` : `${colors/* colors.PURPLE */.O.PURPLE}` : `none`};
   box-shadow: ${props => props.isComplete ? props.darkTheme ? `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(255, 255, 255, 0.3)` : `0px 0px 0px ${props.isMobile ? "4" : "6"}px rgba(74, 51, 245, 0.3)` : `none`};
   transition: all 0.3s;
`;
const Connector = (external_styled_components_default()).div`
   width: 4px;
   height: 60px;
   background: ${props => props.darkTheme ? `rgba(255, 255, 255, ${props.isComplete ? 1 : 0.3})` : `rgba(74, 51, 245, ${props.isComplete ? 1 : 0.3})`};
   transition: all 0.3s;
   transform: translateX(5px);
`;
const Fill = (external_styled_components_default()).div`
   width: 4px;
   height: ${props => props.percentage}%;
   background: ${props => props.darkTheme ? `${colors/* colors.WHITE */.O.WHITE}` : `${colors/* colors.PURPLE */.O.PURPLE}`};
   transition: all 0.3s;
`;

const DefaultNavBar = ({
  isExpanded,
  sections,
  currentPageIdx,
  onSectionClick,
  darkTheme,
  showNav,
  hideNav
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavWrap, {
    isExpanded: isExpanded,
    onMouseEnter: showNav,
    onMouseLeave: hideNav,
    darkTheme: darkTheme,
    children: [isExpanded ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
      cursor: "pointer",
      onClick: hideNav,
      alignItems: "center",
      marginBottom: "40px",
      children: [/*#__PURE__*/jsx_runtime_.jsx(StyledElements.Icon, {
        src: darkTheme ? left_caret_light : left_caret_dark
      }), /*#__PURE__*/jsx_runtime_.jsx(components_text.TextSpan, {
        cursor: "pointer",
        marginLeft: "20px",
        color: darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.PURPLE */.O.PURPLE,
        fontSize: fontStyles/* fontSizes.SMALL */.C.SMALL,
        children: "Back to concepts"
      })]
    }) : null, sections.map((section, idx) => {
      let percentage = 0;
      const slides = section.slides;

      if (currentPageIdx >= slides[slides.length - 1]) {
        percentage = 100;
      } else if (slides.includes(currentPageIdx)) {
        const slideIdx = slides.indexOf(currentPageIdx);
        percentage = (slideIdx + 1) / slides.length * 100;
      }

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledElements.Flex, {
          alignItems: "center",
          cursor: "pointer",
          height: "14px" // moveTo expects slide indices to start from 1
          ,
          "data-section-idx": section.slides[0] + 1,
          onClick: onSectionClick,
          children: [/*#__PURE__*/jsx_runtime_.jsx(DefaultNavBar_SectionIndicator, {
            darkTheme: darkTheme,
            isComplete: currentPageIdx >= section.slides[0]
          }), isExpanded ? /*#__PURE__*/jsx_runtime_.jsx(components_text.TextSpan, {
            cursor: "pointer",
            color: darkTheme ? colors/* colors.WHITE */.O.WHITE : colors/* colors.BLACK */.O.BLACK,
            marginLeft: "20px",
            children: section.title
          }) : null]
        }, section.title), idx !== sections.length - 1 ? /*#__PURE__*/jsx_runtime_.jsx(Connector, {
          darkTheme: darkTheme,
          children: /*#__PURE__*/jsx_runtime_.jsx(Fill, {
            darkTheme: darkTheme,
            percentage: percentage
          })
        }) : null]
      }, idx);
    })]
  });
};

/* harmony default export */ const full_page_wrapper_DefaultNavBar = (DefaultNavBar);
;// CONCATENATED MODULE: ./components/full-page-wrapper/NavigationBar.js






const Wrapper = (external_styled_components_default()).div`
   width: ${props => props.isMobile ? "100%" : "60px"};
   z-index: 6;
   position: ${props => props.isAbsolute ? "absolute" : "static"};
   top: ${props => props.isMobile ? "0" : "50%"};
   left: 0;
   transform: ${props => props.isAbsolute && !props.isMobile ? "translateY(-50%)" : "none"};
   display: grid;
   grid-template-columns: 1fr;

   @media (min-width: 200px) and (max-width: 768px) {
      height: 45px;
   }

   @media (min-width: 768px) and (max-width: 992px) {
      scale: 0.8;
      transform: ${props => props.isAbsolute && !props.isMobile ? "translateY(-80%)" : "none"};
   }

   @media (min-height: 500px) and (max-height: 800px) and (min-width: 769px) {
      scale: 0.8;
      transform: ${props => props.isAbsolute && !props.isMobile ? "translateY(-80%)" : "none"};
   }
`;

const NavigationBar = ({
  darkTheme,
  deviceType,
  moveTo,
  sections,
  isAbsolute,
  currentPageIdx
}) => {
  const {
    0: isExpanded,
    1: setIsExpanded
  } = (0,external_react_.useState)(false);

  const showNav = () => {
    setIsExpanded(true);
  };

  const toggleNav = () => {
    setIsExpanded(!isExpanded);
  };

  const hideNav = () => {
    setIsExpanded(false);
  };

  const onSectionClick = e => {
    e.stopPropagation();
    setIsExpanded(false);
    moveTo(e.currentTarget.getAttribute("data-section-idx"));
  };

  let content;

  if (deviceType === useDeviceType/* DEVICE_TYPES.MOBILE */.W.MOBILE) {
    content = /*#__PURE__*/jsx_runtime_.jsx(full_page_wrapper_MobileNavBar, {
      toggleNav: toggleNav,
      sections: sections,
      isExpanded: isExpanded,
      darkTheme: darkTheme,
      onSectionClick: onSectionClick,
      currentPageIdx: currentPageIdx
    });
  } else {
    content = /*#__PURE__*/jsx_runtime_.jsx(full_page_wrapper_DefaultNavBar, {
      showNav: showNav,
      hideNav: hideNav,
      sections: sections,
      isExpanded: isExpanded,
      darkTheme: darkTheme,
      onSectionClick: onSectionClick,
      currentPageIdx: currentPageIdx
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    isExpanded: isExpanded,
    isAbsolute: isAbsolute,
    isMobile: deviceType === useDeviceType/* DEVICE_TYPES.MOBILE */.W.MOBILE,
    children: content
  });
};

/* harmony default export */ const full_page_wrapper_NavigationBar = (NavigationBar);
;// CONCATENATED MODULE: ./components/full-page-wrapper/FullPageCustomWrapper.js








let fullPage;
const FullPageCustomWrapper = ({
  slidesComponentList,
  darkBgIndices,
  navigationSections
}) => {
  const deviceType = (0,useDeviceType/* useDeviceType */.h)();
  const {
    0: currentPageIdx,
    1: setCurrentPageIdx
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((react_fullpage_default()) //fullpage options
    // licenseKey={"YOUR_KEY_HERE"}
    , {
      navigationTooltips: [],
      scrollBar: false,
      scrollingSpeed: 900,
      fitToSectionDelay: 900,
      afterLoad: () => {
        var _fullPage;

        setCurrentPageIdx(((_fullPage = fullPage) === null || _fullPage === void 0 ? void 0 : _fullPage.getActiveSection().index()) || 0);
      },
      render: ({
        state,
        fullpageApi
      }) => {
        const moveToSection = fullpageApi === null || fullpageApi === void 0 ? void 0 : fullpageApi.moveTo;
        fullPage = fullpageApi;
        return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/jsx_runtime_.jsx((react_fullpage_default()).Wrapper, {
            children: slidesComponentList.map((itm, idx) => {
              const navBar = idx ? /*#__PURE__*/jsx_runtime_.jsx(full_page_wrapper_NavigationBar, {
                deviceType: deviceType,
                sections: navigationSections,
                darkTheme: darkBgIndices.includes(idx),
                moveTo: moveToSection,
                currentPageIdx: currentPageIdx
              }) : null;
              const downIcon = idx === slidesComponentList.length - 1 ? null : /*#__PURE__*/jsx_runtime_.jsx(components_DownArrowIcon, {
                onClick: fullpageApi === null || fullpageApi === void 0 ? void 0 : fullpageApi.moveSectionDown,
                color: darkBgIndices.includes(idx) ? colors/* colors.WHITE */.O.WHITE : colors/* colors.DARK_GREY */.O.DARK_GREY
              });
              return /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "section",
                children: /*#__PURE__*/external_react_default().cloneElement(itm, {
                  downIcon,
                  navBar,
                  moveToSection
                })
              }, idx);
            })
          })
        });
      }
    })
  });
};

/***/ })

};
;