import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import { Paragraph, TextSpan, TextSpanBg, Title } from "components/text";
import HyperLink from "components/text/HyperLink";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg";

// Derivation of isosceles triangle
const Slide14 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         secondaryTitle={"Area of an Isosceles triangle"}
         bg={"LIGHT"}
         diagram={
            <LeftWrap>
               <TransitionImage
                  images={[image_1, image_2]}
                  activeIndex={activeIndex}
               />
            </LeftWrap>
         }
         downIcon={downIcon}
         navBar={navBar}
      >
         <Paragraph
            color={colors.BLACK}
            marginBottom={isMobile ? "0px" : "20px"}
            margin="0px"
            fontSize={fontSizes.MEDIUM}
         >
            <Paragraph
               margin="0px"
               marginBottom={"10px"}
               fontSize={fontSizes.MEDIUM}
            >
               Apply the{" "}
               <HyperLink
                  href={
                     "https://byjus.com/us/math/pythagorean-theorem-formulas/"
                  }
                  color={colors.PURPLE}
               >
                  Pythagoras Theorem
               </HyperLink>{" "}
               in the{" "}
               <TextSpanBg
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
                  onHover={() => {
                     setActiveIndex(1);
                  }}
                  onHoverOut={() => {
                     setActiveIndex(0);
                  }}
               >
                  triangle
               </TextSpanBg>
               .
            </Paragraph>
            <Flex direction="column" height="fit-content" padding="0 0 0 2rem">
               <TextSpan marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
                  <MathElement htmlString={"a^2 = h^2 + (\\frac{b}{2})^2"} />
               </TextSpan>
               <TextSpan marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
                  <MathElement htmlString={"h^2 = a^2 - (\\frac{b^2}{4})"} />
               </TextSpan>
               <TextSpan marginBottom={"10px"} fontSize={fontSizes.MEDIUM}>
                  <MathElement
                     htmlString={"h = \\sqrt{a^2 - (\\frac{b}{2})^2}"}
                  />
               </TextSpan>
            </Flex>
         </Paragraph>
         <span>
            <Flex key={"flex-1"} id="flex-1">
               <div>
                  <Paragraph
                     fontSize={fontSizes.MEDIUM}
                     marginBottom={"2.2rem"}
                  >
                     Area of triangle{" "}
                  </Paragraph>
                  <Paragraph textAlign={"right"} fontSize={fontSizes.MEDIUM}>
                     A
                  </Paragraph>
               </div>
               <div>
                  <Paragraph fontSize={fontSizes.MEDIUM}>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2} \\times Base \\times Height"
                        }
                     />
                  </Paragraph>
                  <Paragraph fontSize={fontSizes.MEDIUM} marginBottom="10px">
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
                        }
                     />
                  </Paragraph>
               </div>
            </Flex>
         </span>
         <span>
            <Pill
               id="pill-1"
               key={"pill-1"}
               width="fit-content"
               fontSize="1.8rem"
               bgColor={colors.GREEN}
               color={colors.WHITE}
            >
               Area of an isosceles triangle =
               <MathElement htmlString={"\\frac{1}{4}b \\sqrt{4a^2 - b^2}"} />
            </Pill>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide14;
