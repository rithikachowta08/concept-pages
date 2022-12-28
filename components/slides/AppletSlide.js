import { PropTypes } from "prop-types";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { SlideWrap, Flex } from "components/StyledElements";
import { FillerNavBar, SlideSecondaryTitle, SlideTitle } from "./common";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";

const IFrame = styled.iframe`
   width: 650px;
   height: 650px;
   border-radius: 20px;

   // Mobile
   @media (min-width: 200px) and (max-width: 820px) and (min-height: 500px) {
      margin: auto 0;
      width: 100vw;
      height: 100vw;
   }

   // Tablet
   @media (min-width: 821px) and (max-width: 992px) {
      width: 500px;
      height: 500px;
   }

   // Low res desktop
   @media (min-width: 993px) and (max-width: 1224px) {
      width: 600px;
      height: 600px;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      width: 100vh;
      height: 100vh;
   }

   // Small height desktop
   @media (min-height: 400px) and (max-height: 800px) and (min-width: 900px) {
      width: 500px;
      height: 500px;
   }
`;

const ContentWrap = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   justify-content: flex-start;

   // Mobile
   @media (min-width: 200px) and (max-width: 820px) and (min-height: 500px) {
      flex-direction: column;
      height: 100%;
      gap: 20px;
   }

   // Mobile landscape mode
   @media (min-height: 300px) and (max-height: 450px) and (max-width: 950px) {
      max-height: 40%;
   }
`;

const TitleAndAppletWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;

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
   appletSrc = "./applets/triangle.html",
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   return (
      <>
         <MobileComponent>
            <SlideWrap
               bg={bg}
               ref={ref}
               padding="0 0 10px 0"
               isLastSlide={isLastSlide}
            >
               <ContentWrap>
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
                  <Flex
                     direction="column"
                     height="100%"
                     width="100%"
                     margin="0 auto"
                     alignItems="center"
                  >
                     <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
                  </Flex>
               </ContentWrap>
               {downIcon}
            </SlideWrap>
         </MobileComponent>
         <DesktopComponent>
            <SlideWrap
               bg={bg}
               ref={ref}
               padding="20px 30px"
               isLastSlide={isLastSlide}
               hideFillerForLandscapeMode
            >
               <ContentWrap>
                  <FillerNavBar
                     desktopNavBarWidth={global.desktopNavBarWidth}
                  />
                  <TitleAndAppletWrap>
                     <TitleWrap>
                        <SlideSecondaryTitle
                           bg={bg}
                           secondaryTitle={secondaryTitle}
                           centerAlign
                        />
                        <SlideTitle bg={bg} centerAlign>
                           {title}
                        </SlideTitle>
                     </TitleWrap>
                     <IFrame src={appletSrc} allowFullScreen frameBorder="0" />
                  </TitleAndAppletWrap>
               </ContentWrap>
               {downIcon
                  ? React.cloneElement(downIcon, {
                       hideInMobileLandscapeMode: true,
                    })
                  : downIcon}
            </SlideWrap>
         </DesktopComponent>
      </>
   );
};

AppletSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
   appletSrc: PropTypes.string.isRequired,
};

export default AppletSlide;
