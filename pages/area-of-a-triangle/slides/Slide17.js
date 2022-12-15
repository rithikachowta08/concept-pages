import MathElement from "components/MathElement";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import HyperLink from "components/text/HyperLink";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_deri_1.svg";
const image_2 = "assets/area-of-triangle/equi_deri_2.svg";

// Derivation of equilateral triangle
const Slide17 = ({ downIcon, navBar }) => {
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         secondaryTitle={"Area of an Equilateral triangle"}
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
         <Paragraph>
            <TextLine>
               Apply the{" "}
               <HyperLink
                  href={
                     "https://byjus.com/us/math/pythagorean-theorem-formulas/"
                  }
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
               .<br />
            </TextLine>
         </Paragraph>
         <span>
            <Paragraph>
               <Flex direction="column">
                  <TextLine>
                     <MathElement htmlString={"a^2 = h^2 + (\\frac{a}{2})^2"} />
                  </TextLine>
                  <TextLine>
                     <MathElement htmlString={"h^2 = a^2 - (\\frac{a^2}{4})"} />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"h = \\frac{1}{2} (\\sqrt{3} a)"}
                     />
                  </TextLine>
               </Flex>
            </Paragraph>
         </span>
         <span>
            <Flex>
               <Paragraph>
                  <TextLine textAlign={"right"}>Area of triangle =</TextLine>
                  <TextLine textAlign={"right"}>A =</TextLine>
               </Paragraph>
               <Paragraph>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ \\frac{1}{2} \\times Base \\times Height"
                        }
                     />
                  </TextLine>
                  <TextLine>
                     {" "}
                     <MathElement
                        htmlString={
                           "\\ \\frac{1}{2} \\times a \\times \\frac{1}{2} (\\sqrt{3} a)"
                        }
                     />
                  </TextLine>
               </Paragraph>
            </Flex>
         </span>
         <Paragraph>
            <Pill>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\frac{\\sqrt{3}}{4} \\times a^2"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide17;
