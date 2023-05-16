import { PropTypes } from "prop-types";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { SlideWrap, Flex } from "components/StyledElements";
import { FillerNavBar, SlideSecondaryTitle, SlideTitle } from "./common";
import MobileComponent from "components/layout/MobileComponent";
import DesktopComponent from "components/layout/DesktopComponent";

const AppWrapper = styled.div`
   aspect-ratio: 1/1;
   height: 650px;
   border-radius: 20px;

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

const overlay = "assets/pencil.json";
const PracticeElementWrap = styled.div`
   display: ${(props) => (props.isVisible ? "block" : "none")};
   grid-row-start: 1;
   grid-column-start: 1;
   width: 100%;
   border: 1px solid silver;
   border-radius: 4px;
`;

const PracticeContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   justify-items: center;
   height: 100%;
`;

const PracticeSlide = ({
   title,
   secondaryTitle,
   downIcon,
   isLastSlide,
   equations,
   bg = "LIGHT",
   isPreview,
   colorTheme = "BUBBLEGUM",
   index,
   currentPageIdx,
}) => {
   const filteredEquations = equations.filter((equation) => Boolean(equation));
   const ref = useRef(null);
   const [curInputIndex, setCurInputIndex] = useState(0);
   const curInputIndexRef = useRef(curInputIndex);
   const onSolved = () => {
      if (curInputIndexRef.current !== filteredEquations.length - 1) {
         setTimeout(() => {
            curInputIndexRef.current = curInputIndexRef.current + 1;
            setCurInputIndex(curInputIndexRef.current);
         }, 2000);
      } else {
         setTimeout(() => {
            curInputIndexRef.current = 0;
            setCurInputIndex(0);
         }, 2000);
      }
   };
   useEffect(() => {
      let timer;
      if (filteredEquations.length && currentPageIdx === index) {
         timer = setTimeout(() => {
            if (document.getElementById("lottie-overlay-desktop")) {
               document.getElementById("lottie-overlay-desktop").style.height =
                  "0px";
            }
            if (document.getElementById("lottie-overlay-mobile")) {
               document.getElementById("lottie-overlay-mobile").style.height =
                  "0px";
            }
         }, 4500);
         if (document.querySelectorAll(".practice-element")) {
            document
               .querySelectorAll(".practice-element")
               .forEach((elem) => elem.addEventListener("solved", onSolved));
         }
      }
      return () => {
         clearTimeout(timer);
      };
   }, [currentPageIdx, index, filteredEquations.length]);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
         ref.current.parentNode.classList.add(colorTheme);
      }
   }, [bg, ref.current]);

   return (
      <div style={{ height: "100%", width: "100%" }} ref={ref}>
         <MobileComponent>
            <SlideWrap
               bg={bg}
               colorTheme={colorTheme}
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
                     <AppWrapper>
                        {!isPreview && (
                           <lottie-player
                              id="lottie-overlay-mobile"
                              src={overlay}
                              speed="1"
                              autoplay
                           ></lottie-player>
                        )}
                        {filteredEquations.length && (
                           <PracticeContainer>
                              {filteredEquations.map((input, idx) => (
                                 <PracticeElementWrap
                                    key={`practice-element-${idx}`}
                                    isVisible={idx === curInputIndex}
                                 >
                                    <algebra-practice
                                       class={`practice-element`}
                                       latex={input}
                                       hints="on"
                                       drag-eq="fast"
                                       // style={{
                                       //    height: "600px",
                                       //    width: "600px",
                                       //    border: "1px solid silver",
                                       // }}
                                    ></algebra-practice>
                                 </PracticeElementWrap>
                              ))}
                           </PracticeContainer>
                        )}
                     </AppWrapper>
                  </Flex>
               </ContentWrap>
               {downIcon}
            </SlideWrap>
         </MobileComponent>
         <DesktopComponent>
            <SlideWrap
               bg={bg}
               colorTheme={colorTheme}
               padding="0 30px"
               isLastSlide={isLastSlide}
               hideFiller
               noVerticalPaddingInLandscapeMode
            >
               <ContentWrap>
                  <FillerNavBar />
                  <TitleAndAppletWrap
                     onScroll={() => console.log("scrolling..")}
                  >
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
                     <AppWrapper>
                        {!isPreview && (
                           <lottie-player
                              id="lottie-overlay-desktop"
                              src={overlay}
                              speed="1"
                              autoplay
                           ></lottie-player>
                        )}
                        {filteredEquations.length && (
                           <PracticeContainer>
                              {filteredEquations.map((input, idx) => (
                                 <PracticeElementWrap
                                    key={`practice-element-${idx}`}
                                    isVisible={idx === curInputIndex}
                                 >
                                    <algebra-practice
                                       class={`practice-element`}
                                       latex={input}
                                       hints="on"
                                       drag-eq="fast"
                                       // style={{
                                       // height: "600px",
                                       // width: "600px",
                                       //    border: "1px solid silver",
                                       // }}
                                    ></algebra-practice>
                                 </PracticeElementWrap>
                              ))}
                           </PracticeContainer>
                        )}
                     </AppWrapper>
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

PracticeSlide.propTypes = {
   title: PropTypes.string,
   bg: PropTypes.string,
};

export default PracticeSlide;
