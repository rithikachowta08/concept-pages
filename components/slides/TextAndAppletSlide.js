import React, { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { SlideWrap, Flex, LeftWrap } from "components/StyledElements";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";
import { SlideSecondaryTitle, SlideTitle, FillerNavBar } from "./common";
import Button from "components/Button";
import { colors } from "utils/colors";
import { onAppletInteraction } from "utils/analytics";

const fit_to_width = "assets/fit_to_width.svg";
const fullscreen_exit = "assets/fullscreen_exit.svg";

const IFrame = styled.iframe`
   aspect-ratio: 1/1;
   height: 650px;
   border-radius: 20px;
   border: 1px solid #444;
   transition: all 0.2s;

   // Mobile
   @media only screen and (min-width: 200px) and (max-width: 600px) {
      height: ${(props) => (props.isFitToWidth ? "100vw" : "250px")};
      border: ${(props) => (props.isFitToWidth ? "none" : "1px solid #444")};
   }

   // Large mobile + iPad mini
   @media only screen and (min-width: 601px) and (max-width: 820px) {
      height: ${(props) => (props.isFitToWidth ? "100vw" : "500px")};
      border: ${(props) => (props.isFitToWidth ? "none" : "1px solid #444")};
   }

   // Tablet
   @media (min-width: 821px) and (max-width: 992px) {
      max-height: 500px;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 820px) and (min-width: 900px) {
      max-height: 500px;
      height: 100%;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      height: 100%;
      margin-bottom: 0;
   }
`;

const AppWrapper = styled.div`
   aspect-ratio: 1/1;
   height: 650px;
   border-radius: 20px;
   /* border: 1px solid #444; */
   transition: all 0.2s;

   // Mobile
   @media only screen and (min-width: 200px) and (max-width: 600px) {
      height: ${(props) => (props.isFitToWidth ? "100vw" : "250px")};
      // border: ${(props) => (props.isFitToWidth ? "none" : "1px solid #444")};
   }

   // Large mobile + iPad mini
   @media only screen and (min-width: 601px) and (max-width: 820px) {
      height: ${(props) => (props.isFitToWidth ? "100vw" : "500px")};
      // border: ${(props) => (props.isFitToWidth ? "none" : "1px solid #444")};
   }

   // Tablet
   @media (min-width: 821px) and (max-width: 992px) {
      max-height: 500px;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 820px) and (min-width: 900px) {
      max-height: 500px;
      height: 100%;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      height: 100%;
      margin-bottom: 0;
   }
`;

const LeftAlignDiv = styled.div`
   align-self: center;
   width: fit-content;
   height: ${(props) => (props.isFitToWidth ? "0" : "auto")};
   overflow: ${(props) => (props.isFitToWidth ? "hidden" : "unset")};
   opacity: ${(props) => (props.isFitToWidth ? "0" : "1")};
   transition: height 0ms 400ms, opacity 400ms 0ms;
`;

const IframeWrap = styled.div`
   position: relative;
   margin-bottom: 20px;
`;

const FullScreenIcon = styled.img`
   position: absolute;
   right: ${(props) => props.right || "10px"};
   bottom: 15px;
`;

const RightWrap = styled.div`
   height: 100%;
   text-align: center;
   display: flex;
   align-items: center;
`;

const TextAndAppletSlide = ({
   title,
   bg = "LIGHT",
   colorTheme = "BUBBLEGUM",
   isLastSlide,
   downIcon,
   secondaryTitle,
   children,
   currentPageIdx,
   appletSrc,
   AppletComponent,
   fullScreenRightOffset,
}) => {
   const ref = useRef(null);
   const [src, setSrc] = useState(null);
   const [isFitToWidth, setIsFitToWidth] = useState(false);
   const toggleFitToWidth = () => {
      setIsFitToWidth(!isFitToWidth);
   };
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   useEffect(() => {
      if (currentPageIdx !== 0 && !src) {
         setSrc(appletSrc);
      }
   }, [currentPageIdx, appletSrc, src]);

   function onWheel(e) {
      e.preventDefault();
      e.stopPropagation();
   }

   function disableScrolling(e) {
      fullpage_api.setAllowScrolling(false);
   }

   function enableScrolling(e) {
      fullpage_api.setAllowScrolling(true);
   }

   return (
      <div style={{ height: "100%", width: "100%" }} ref={ref}>
         <MobileComponent>
            <SlideWrap
               bg={bg}
               colorTheme={colorTheme}
               padding="0 0 10px 0"
               gap="10px"
               justifyContent="space-between"
               isLastSlide={isLastSlide}
            >
               {/* Navbar and title */}
               <Flex direction="column" gap="2vh">
                  <FillerNavBar
                     mobileNavBarHeight={global.mobileNavBarHeight}
                  />
                  <div>
                     <SlideSecondaryTitle
                        bg={bg}
                        marginBottom="10px"
                        secondaryTitle={secondaryTitle}
                        centerAlign
                     />
                     <SlideTitle bg={bg} centerAlign>
                        {title}
                     </SlideTitle>
                  </div>
               </Flex>
               {/* Body */}
               <Flex
                  direction="column"
                  padding="0 30px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  width="100%"
                  flex="1"
               >
                  <IframeWrap>
                     {AppletComponent != null ? (
                        <AppWrapper
                           isFitToWidth={isFitToWidth}
                           onTouchMove={disableScrolling}
                           onTouchMoveCapture={disableScrolling}
                           onTouchEnd={enableScrolling}
                        >
                           <AppletComponent onEvent={onAppletInteraction} />
                        </AppWrapper>
                     ) : (
                        <IFrame
                           src={src}
                           isFitToWidth={isFitToWidth}
                           allowFullScreen
                           frameBorder="0"
                        />
                     )}
                     <FullScreenIcon
                        src={isFitToWidth ? fullscreen_exit : fit_to_width}
                        right={fullScreenRightOffset}
                        onClick={toggleFitToWidth}
                     ></FullScreenIcon>
                  </IframeWrap>
                  <LeftAlignDiv isFitToWidth={isFitToWidth}>
                     {children}
                  </LeftAlignDiv>
                  {isFitToWidth && (
                     <Button
                        onClick={toggleFitToWidth}
                        height="30px"
                        bgColor={colors.DARK_GREY}
                     >
                        Click to exit full screen mode
                     </Button>
                  )}
               </Flex>
               {/* DownIcon */}
               {downIcon
                  ? React.cloneElement(downIcon, { noMargin: true })
                  : downIcon}
            </SlideWrap>
         </MobileComponent>
         <DesktopComponent>
            <SlideWrap
               bg={bg}
               colorTheme={colorTheme}
               padding={"20px 30px"}
               isLastSlide={isLastSlide}
               hideFillerForLandscapeMode
               noVerticalPaddingInLandscapeMode
            >
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
                  height="100%"
               >
                  <FillerNavBar />
                  <LeftWrap marginRight="20px">
                     <div>
                        <SlideSecondaryTitle
                           marginBottom="15px"
                           bg={bg}
                           secondaryTitle={secondaryTitle}
                        />
                        <SlideTitle marginBottom="30px" bg={bg}>
                           {title}
                        </SlideTitle>
                     </div>
                     {children}
                  </LeftWrap>
                  <RightWrap>
                     {AppletComponent != null ? (
                        <AppWrapper
                           isFitToWidth={isFitToWidth}
                           onWheel={onWheel}
                           onTouchMove={disableScrolling}
                           onTouchStart={disableScrolling}
                           onTouchMoveCapture={disableScrolling}
                           onTouchEnd={enableScrolling}
                        >
                           <AppletComponent onEvent={onAppletInteraction} />
                        </AppWrapper>
                     ) : (
                        <IFrame
                           src={src}
                           isFitToWidth={isFitToWidth}
                           allowFullScreen
                           frameBorder="0"
                        />
                     )}
                  </RightWrap>
               </Flex>
               {downIcon
                  ? React.cloneElement(downIcon, {
                       hideInMobileLandscapeMode: true,
                    })
                  : downIcon}
            </SlideWrap>
         </DesktopComponent>
      </div>
   );
};

TextAndAppletSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
   secondaryTitle: PropTypes.string,
   gap: PropTypes.string,
   AppletComponent: PropTypes.element,
   children: PropTypes.node,
};

export default TextAndAppletSlide;
