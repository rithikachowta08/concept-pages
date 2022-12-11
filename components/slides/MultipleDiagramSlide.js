import TransitionImage from "components/media/TransitionImage";
import { Flex, SlideWrap } from "components/StyledElements";
import { Paragraph, Title } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React from "react";
import { colors } from "utils/colors";
import { fontSizes, fontWeights } from "utils/fontStyles";

const area_triangle_angles_1_1 = "assets/area-of-triangle/16.a.svg";
const area_triangle_angles_2_1 = "assets/area-of-triangle/16.b.svg";
const area_triangle_angles_3_1 = "assets/area-of-triangle/16.c.svg";
const area_triangle_angles_1_2 = "assets/area-of-triangle/17.a.svg";
const area_triangle_angles_2_2 = "assets/area-of-triangle/17.b.svg";
const area_triangle_angles_3_2 = "assets/area-of-triangle/17.c.svg";
const area_triangle_angles_1_3 = "assets/area-of-triangle/18.a.svg";
const area_triangle_angles_2_3 = "assets/area-of-triangle/18.b.svg";
const area_triangle_angles_3_3 = "assets/area-of-triangle/18.c.svg";

// General Formula base and height slide
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
   return (
      <SlideWrap
         bg={bg}
         padding={isMobile ? "0 0 20px 0" : "20px"}
         isLastSlide={isLastSlide}
         hideFiller={hideFiller}
      >
         <Flex
            direction={isMobile ? "column" : "row"}
            alignItems="center"
            justifyContent={isMobile ? "flex-start" : "center"}
            height={isMobile ? "70%" : "auto"}
            width="100%"
            gap={isMobile ? "10px" : "60px"}
         >
            {navBar}
            <Flex
               direction="column"
               alignItems="center"
               justifyContent={isMobile ? "center" : "space-between"}
               flex={2}
            >
               {secondaryTitle ? (
                  <Title
                     opacity={0.5}
                     color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                     marginBottom="1vh"
                     small
                  >
                     {secondaryTitle}
                  </Title>
               ) : null}
               <Title
                  color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                  fontSize={fontSizes.H2}
                  fontWeight={fontWeights.BOLD}
                  marginBottom="1vh"
                  small
               >
                  {title}
               </Title>
               <Flex
                  direction={isMobile ? "column-reverse" : "column"}
                  alignItems="center"
                  width="100%"
                  padding="0 10px"
               >
                  <Paragraph
                     color={bg === "LIGHT" ? colors.BLACK : colors.WHITE}
                     fontSize={fontSizes.MEDIUM}
                  >
                     {children}
                  </Paragraph>
                  <Flex
                     flexFlow={isMobile ? "wrap" : "none"}
                     width="100%"
                     justifyContent="space-between"
                     alignItems="center"
                     alignSelf="flex-start"
                  >
                     {images.map((image) => (
                        <Flex
                           justifyContent="flex-start"
                           direction="column"
                           margin="0 auto"
                        >
                           {React.cloneElement(image.diagram, {
                              mobileSize: "150px",
                              tabletSize: "250px",
                              width: "450px",
                           })}
                           <Paragraph
                              color={
                                 bg === "LIGHT" ? colors.BLACK : colors.WHITE
                              }
                              fontWeight={400}
                              textAlign="center"
                              fontSize="1.4rem"
                           >
                              {image.caption}
                           </Paragraph>
                        </Flex>
                     ))}
                  </Flex>
               </Flex>
            </Flex>
         </Flex>
         {downIcon}
      </SlideWrap>
   );
};

export default MultipleDiagramSlide;
