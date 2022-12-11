import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, Title } from "components/text";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useDebugValue, useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/isos_ex_1.svg";
const image_2 = "assets/area-of-triangle/isos_ex_2.svg";
const image_3 = "assets/area-of-triangle/isos_ex_3.svg";

// Example of isosceles triangle
const Slide15 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <TextAndDiagramSlide
         bg={"LIGHT"}
         title={"Find the area of a triangle with the given dimensions."}
         secondaryTitle={"Illustrative Example"}
         diagram={
            <TransitionImage
               images={[image_1, image_2, image_3]}
               activeIndex={activeIndex}
            />
         }
         mobileLayoutGap="0px"
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph color={colors.BLACK} fontSize={fontSizes.MEDIUM}>
            <TextSpan
               color={colors.WHITE}
               bgColor={colors.RED}
               hoverBgColor={colors.DARK_BLUE}
               onHover={() => {
                  setActiveIndex(1);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               a
            </TextSpan>{" "}
            = 5 cm
            <br />
            <TextSpan
               color={colors.WHITE}
               bgColor={colors.RED}
               hoverBgColor={colors.DARK_BLUE}
               onHover={() => {
                  setActiveIndex(2);
               }}
               onHoverOut={() => {
                  setActiveIndex(0);
               }}
            >
               b
            </TextSpan>{" "}
            = 8 cm
         </Paragraph>
         <Flex>
            <Paragraph fontSize={fontSizes.MEDIUM}>Area of triangle </Paragraph>
            <Flex direction="column">
               <Paragraph fontSize={fontSizes.MEDIUM}>
                  <MathElement
                     htmlString={"\\ = \\frac{1}{4}b \\sqrt{4a^2 - b^2}"}
                  />
               </Paragraph>
               <Paragraph
                  fontSize={fontSizes.MEDIUM}
                  margin={isMobile ? "5px 0" : "10px 0"}
               >
                  <MathElement
                     htmlString={
                        "\\ = \\frac{1}{4}\\times 8 \\sqrt{4(5)^2 - (8)^2}"
                     }
                  />
               </Paragraph>
               <Paragraph
                  fontSize={fontSizes.MEDIUM}
                  margin={isMobile ? "5px 0" : "10px 0"}
               >
                  <MathElement
                     htmlString={"\\ = \\frac{1}{4}\\times 8 \\sqrt{100 - 64}"}
                  />
               </Paragraph>
               <Paragraph
                  fontSize={fontSizes.MEDIUM}
                  margin={isMobile ? "5px 0" : "10px 0"}
               >
                  <MathElement
                     htmlString={"\\ = \\frac{1}{4}\\times 8 \\sqrt{36}"}
                  />
               </Paragraph>
               <Paragraph
                  fontSize={fontSizes.MEDIUM}
                  margin={isMobile ? "5px 0" : "10px 0"}
               >
                  <MathElement htmlString={"\\ = \\frac{8\\ \\times\\ 6}{4}"} />
               </Paragraph>
               <Paragraph
                  fontSize={fontSizes.MEDIUM}
                  margin={isMobile ? "5px 0" : "10px 0"}
               >
                  <MathElement htmlString={"\\ = 12 \\ cm^2"} />
               </Paragraph>
            </Flex>
         </Flex>
      </TextAndDiagramSlide>
   );
};

export default Slide15;
