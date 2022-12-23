import { useEffect, useRef } from "react";
import styled from "styled-components";
import { SlideWrap, Flex } from "components/StyledElements";
import { Paragraph, TextSpan } from "components/text";
import { Media } from "utils/media";
import { SlideTitle, SlideSecondaryTitle, FillerNavBar } from "./common";
import React from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const ImageWrap = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   margin: 0;

   @media (min-width: 200px) and (max-width: 810px) {
      margin: 0 auto;
   }
`;

const MultipleDiagramSlide = ({
   title,
   secondaryTitle,
   isLastSlide,
   children,
   images,
   bg,
   downIcon,
}) => {
   const ref = useRef(null);
   useEffect(() => {
      if (ref.current && bg === "DARK") {
         ref.current.parentNode.classList.add("dark");
      }
   }, [bg, ref.current]);
   return (
      <>
         <Media lessThan="md">
            <SlideWrap
               bg={bg}
               ref={ref}
               padding="0 0 10px 0"
               gap="10px"
               justifyContent="space-between"
               isLastSlide={isLastSlide}
            >
               {/* NavBar */}
               <Flex direction="column" gap="2vh">
                  <FillerNavBar
                     isMobile
                     mobileNavBarHeight={global.mobileNavBarHeight}
                  />
                  <div>
                     <SlideSecondaryTitle
                        bg={bg}
                        secondaryTitle={secondaryTitle}
                        isMobile
                     />
                     <SlideTitle bg={bg} isMobile>
                        {title}
                     </SlideTitle>
                  </div>
               </Flex>
               {/* Body */}
               <Flex
                  direction="column"
                  padding="0 20px"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
               >
                  {children}
                  <Flex
                     direction="row"
                     flexFlow={"wrap"}
                     width="100%"
                     justifyContent="space-evenly"
                     alignItems="center"
                     alignSelf="flex-start"
                  >
                     {images.map((image, idx) => (
                        <ImageWrap key={idx}>
                           {image.diagram
                              ? React.cloneElement(image.diagram, {
                                   smallMobileSize: "130px",
                                   mobileSize: "150px",
                                   tabletSize: "250px",
                                })
                              : image.diagram}
                           <Paragraph
                              color={
                                 bg === "LIGHT" ? colors.BLACK : colors.WHITE
                              }
                              fontWeight={400}
                              textAlign="center"
                              fontSize={fontSizes.LARGE}
                           >
                              {image.caption}
                           </Paragraph>
                        </ImageWrap>
                     ))}
                  </Flex>
               </Flex>
               {/* DownIcon */}
               {downIcon
                  ? React.cloneElement(downIcon, { noMargin: true })
                  : downIcon}
            </SlideWrap>
         </Media>
         <Media greaterThanOrEqual="md">
            <SlideWrap bg={bg} padding={"20px 30px"}>
               <Flex
                  alignItems="center"
                  justifyContent="flex-start"
                  width="100%"
               >
                  <FillerNavBar />
                  <Flex
                     direction="column"
                     justifyContent="space-between"
                     alignItems="center"
                     flexGrow={1}
                  >
                     <div>
                        <SlideSecondaryTitle
                           bg={bg}
                           secondaryTitle={secondaryTitle}
                        />
                        <SlideTitle bg={bg}>{title}</SlideTitle>
                     </div>
                     {children}
                     <Flex
                        flexFlow={"wrap"}
                        width="100%"
                        justifyContent="space-evenly"
                        alignItems="center"
                        alignSelf="flex-start"
                     >
                        {images.map((image, idx) => (
                           <ImageWrap key={idx}>
                              {image.diagram
                                 ? React.cloneElement(image.diagram, {
                                      tabletSize: "250px",
                                      smallDesktopSize: "300px",
                                      width: "400px",
                                   })
                                 : image.diagram}
                              <TextSpan
                                 color={
                                    bg === "LIGHT" ? colors.BLACK : colors.WHITE
                                 }
                                 textAlign="center"
                              >
                                 {image.caption}
                              </TextSpan>
                           </ImageWrap>
                        ))}
                     </Flex>
                  </Flex>
               </Flex>
               {downIcon}
            </SlideWrap>
         </Media>
      </>
   );
};

export default MultipleDiagramSlide;
