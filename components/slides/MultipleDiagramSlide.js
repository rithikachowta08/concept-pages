import { Flex, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import { SlideTitle, SlideSecondaryTitle } from "./common";
import React from "react";
import { colors } from "utils/colors";
import { fontSizes, fontWeights } from "utils/fontStyles";

const MultipleDiagramSlide = ({
   title,
   secondaryTitle,
   isLastSlide,
   children,
   images,
   bg,
   downIcon,
   navBar,
   hideFiller = false,
}) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   if (isMobile) {
      return (
         <SlideWrap
            bg={bg}
            padding="0 0 10px 0"
            gap="10px"
            justifyContent="space-between"
            isLastSlide={isLastSlide}
         >
            {/* NavBar */}
            {navBar}
            {/* Body */}
            <Flex
               direction="column"
               padding="0 20px"
               justifyContent="space-between"
               alignItems="center"
               width="100%"
            >
               <div>
                  <SlideSecondaryTitle
                     bg={bg}
                     secondaryTitle={secondaryTitle}
                     isMobile
                  />
                  <SlideTitle bg={bg} isMobile>
                     {title}
                  </SlideTitle>
                  {children}
               </div>
               <Flex
                  flexFlow={"wrap"}
                  width="100%"
                  justifyContent="space-evenly"
                  alignItems="center"
                  alignSelf="flex-start"
               >
                  {images.map((image, idx) => (
                     <Flex
                        justifyContent="flex-start"
                        direction="column"
                        margin={isMobile ? "0 auto" : "0"}
                        key={idx}
                     >
                        {React.cloneElement(image.diagram, {
                           smallMobileSize: "130px",
                           mobileSize: "150px",
                           tabletSize: "400px",
                        })}
                        <Paragraph
                           color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                           fontWeight={400}
                           textAlign="center"
                           fontSize={fontSizes.LARGE}
                        >
                           {image.caption}
                        </Paragraph>
                     </Flex>
                  ))}
               </Flex>
            </Flex>
            {/* DownIcon */}
            {React.cloneElement(downIcon, { noMargin: true })}
         </SlideWrap>
      );
   }
   return (
      <SlideWrap bg={bg} padding={"20px 30px"}>
         <Flex alignItems="center" justifyContent="flex-start" width="100%">
            {navBar}
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
                     <Flex
                        justifyContent="flex-start"
                        direction="column"
                        margin={isMobile ? "0 auto" : "0"}
                        key={idx}
                     >
                        {React.cloneElement(image.diagram, {
                           tabletSize: "250px",
                           smallDesktopSize: "300px",
                           width: "400px",
                        })}
                        <TextSpan
                           color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                           textAlign="center"
                        >
                           {image.caption}
                        </TextSpan>
                     </Flex>
                  ))}
               </Flex>
            </Flex>
         </Flex>
         {downIcon}
      </SlideWrap>
   );
};

export default MultipleDiagramSlide;
