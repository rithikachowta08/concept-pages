import { PropTypes } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SlideWrap, Flex } from "components/StyledElements";
import { FillerNavBar, SlideSecondaryTitle, SlideTitle } from "./common";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";

const IFrame = styled.iframe`
   aspect-ratio: 1/1;
   height: 650px;
   border-radius: 20px;
   border: 1px solid #444;

   // Mobile
   @media (min-width: 200px) and (max-width: 500px) and (min-height: 500px) {
      margin: auto 0;
      height: 100vw;
      border: none;
   }

   // Tablet
   @media (min-width: 501px) and (max-width: 992px) {
      margin: auto 0;
      height: 100vw;
      border: none;
   }

   // Low res desktop
   @media (min-width: 993px) and (max-width: 1224px) {
      max-height: 600px;
      height: 100%;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      height: 100vh;
      border: none;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 800px) and (min-width: 900px) {
      max-width: 500px;
      max-height: 500px;
      height: 100%;
   }
`;

const AppWrapper = styled.div`
   aspect-ratio: 1/1;
   height: 650px;
   border-radius: 20px;
   border: 1px solid #444;

   // Mobile
   @media (min-width: 200px) and (max-width: 500px) and (min-height: 500px) {
      margin: auto 0;
      height: 100vw;
      border: none;
   }

   // Tablet
   @media (min-width: 501px) and (max-width: 992px) {
      margin: auto 0;
      height: 100vw;
      border: none;
   }

   // Low res desktop
   @media (min-width: 993px) and (max-width: 1224px) {
      max-height: 600px;
      height: 100%;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      height: 100vh;
      border: none;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 800px) and (min-width: 900px) {
      max-width: 500px;
      max-height: 500px;
      height: 100%;
   }
`;

const ContentWrap = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   height: 100%;
   justify-content: flex-start;

   // Mobile
   @media (orientation: portrait) {
      flex-direction: column;
      gap: 20px;
   }
`;

const TitleAndAppletWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   margin: 0 auto;
   justify-content: space-evenly;

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      flex-direction: row;
      width: 100%;
      justify-content: flex-end;
   }
`;

const TitleWrap = styled.div`
   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      margin: 0 auto;
      max-width: 30%;
   }
`;

const AppletSlide = ({
   title,
   secondaryTitle,
   downIcon,
   isLastSlide,
   bg = "LIGHT",
   currentPageIdx,
   appletSrc,
   AppletComponent,
}) => {
   const ref = useRef(null);
   const [src, setSrc] = useState(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);

   useEffect(() => {
      console.log("src", src);
      if (currentPageIdx !== 0 && !src) {
         setSrc(appletSrc);
      }
   }, [currentPageIdx, appletSrc, src]);
   return (
      <div style={{ height: "100%", width: "100%" }} ref={ref}>
         <MobileComponent>
            <SlideWrap bg={bg} padding="0 0 10px 0" isLastSlide={isLastSlide}>
               <ContentWrap>
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
                  <Flex
                     direction="column"
                     height="100%"
                     width="100%"
                     margin="0 auto"
                     alignItems="center"
                     justifyContent="center"
                  >
                     {AppletComponent != null ? (
                        <AppletComponent
                           isFitToWidth={true}
                           maxWidth={"650px"}
                        />
                     ) : (
                        <IFrame src={src} allowFullScreen frameBorder="0" />
                     )}
                  </Flex>
               </ContentWrap>
               {downIcon}
            </SlideWrap>
         </MobileComponent>
         <DesktopComponent>
            <SlideWrap
               bg={bg}
               padding="0 30px"
               isLastSlide={isLastSlide}
               hideFiller
               noVerticalPaddingInLandscapeMode
            >
               <ContentWrap>
                  <FillerNavBar />
                  <TitleAndAppletWrap>
                     <TitleWrap>
                        <SlideSecondaryTitle
                           bg={bg}
                           marginBottom="15px"
                           secondaryTitle={secondaryTitle}
                           centerAlign
                        />
                        <SlideTitle bg={bg} centerAlign>
                           {title}
                        </SlideTitle>
                     </TitleWrap>
                     {AppletComponent != null ? (
                        <AppletComponent
                           isFitToWidth={true}
                           maxWidth={"650px"}
                        />
                     ) : (
                        <IFrame src={src} allowFullScreen frameBorder="0" />
                     )}
                     {downIcon
                        ? React.cloneElement(downIcon, {
                             noMargin: true,
                             hideInMobileLandscapeMode: true,
                          })
                        : downIcon}
                  </TitleAndAppletWrap>
               </ContentWrap>
            </SlideWrap>
         </DesktopComponent>
      </div>
   );
};

AppletSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
   appletSrc: PropTypes.string.isRequired,
   AppletComponent: PropTypes.element,
};

export default AppletSlide;
