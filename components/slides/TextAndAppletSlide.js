import React, { useEffect, useRef, useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
   SlideWrap,
   Flex,
   LeftWrap,
   RightWrap,
} from "components/StyledElements";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";
import { SlideSecondaryTitle, SlideTitle, FillerNavBar } from "./common";
import Button from "components/Button";
import { colors } from "utils/colors";

const fit_to_width = "assets/fit_to_width.svg";
const fullscreen_exit = "assets/fullscreen_exit.svg";

const IFrame = styled.iframe`
   width: 650px;
   height: 650px;
   border-radius: 20px;
   transition: all 0.2s;

   // Mobile
   @media only screen and (min-width: 200px) and (max-width: 600px) {
      width: ${(props) => (props.isFitToWidth ? "100vw" : "250px")};
      height: ${(props) => (props.isFitToWidth ? "100vw" : "250px")};
   }

   // Large mobile + iPad mini
   @media only screen and (min-width: 601px) and (max-width: 820px) {
      width: ${(props) => (props.isFitToWidth ? "100vw" : "400px")};
      height: ${(props) => (props.isFitToWidth ? "100vw" : "400px")};
   }

   // Tablet
   @media (min-width: 821px) and (max-width: 992px) {
      width: 500px;
      height: 500px;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 800px) and (min-width: 900px) {
      width: 500px;
      height: 500px;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      width: 100vh;
      height: 100vh;
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
   bottom: 15px;
   right: 10px;
`;

const TextAndAppletSlide = ({
   title,
   bg = "LIGHT",
   isLastSlide,
   downIcon,
   secondaryTitle,
   children,
   appletSrc,
}) => {
   const ref = useRef(null);
   const [isFitToWidth, setIsFitToWidth] = useState(false);
   const toggleFitToWidth = () => {
      setIsFitToWidth(!isFitToWidth);
   };
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   return (
      <div style={{ height: "100%", width: "100%" }}>
         <MobileComponent>
            <SlideWrap
               bg={bg}
               ref={ref}
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
                     <IFrame
                        src={appletSrc}
                        isFitToWidth={isFitToWidth}
                        allowFullScreen
                        frameBorder="0"
                     />
                     <FullScreenIcon
                        src={isFitToWidth ? fullscreen_exit : fit_to_width}
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
               padding={"20px 30px"}
               isLastSlide={isLastSlide}
               hideFillerForLandscapeMode
            >
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
                  maxHeight="50%"
               >
                  <FillerNavBar
                     desktopNavBarWidth={global.desktopNavBarWidth}
                  />
                  <LeftWrap marginRight="20px">
                     <div>
                        <SlideSecondaryTitle
                           bg={bg}
                           secondaryTitle={secondaryTitle}
                        />
                        <SlideTitle bg={bg}>{title}</SlideTitle>
                     </div>
                     {children}
                  </LeftWrap>
                  <RightWrap>
                     <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
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
   appletSrc: PropTypes.string.isRequired,
   children: PropTypes.node,
};

export default TextAndAppletSlide;
