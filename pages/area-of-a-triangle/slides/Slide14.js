import MathElement from "components/MathElement";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap, SlideWrap } from "components/StyledElements";
import {
   Paragraph,
   TextLine,
   TextSpan,
   TextSpanBg,
   Title,
} from "components/text";
import HyperLink from "components/text/HyperLink";
import { DEVICE_TYPES, useDeviceType } from "hooks/useDeviceType";
import React, { useState } from "react";
import { colors } from "utils/colors";
import { fontSizes } from "utils/fontStyles";

const image_1 = "assets/area-of-triangle/isos_deri_1.svg";
const image_2 = "assets/area-of-triangle/isos_deri_2.svg";

// Derivation of isosceles triangle
const Slide14 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const isMobile = useDeviceType() === DEVICE_TYPES.MOBILE;
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         secondaryTitle={"Area of an Isosceles triangle"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            Apply the{" "}
            <HyperLink
               href={"https://byjus.com/us/math/pythagorean-theorem-formulas/"}
               color={colors.DARK_BLUE}
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
         <Paragraph>
            <Flex direction="column">
               <TextSpan>
                  <MathElement
                     htmlString={"a^2 = h^2 + \\Big( \\dfrac{b}{2}\\Big)^2"}
                  />
               </TextSpan>
               <TextSpan>
                  <MathElement htmlString={"h^2 = a^2 - \\dfrac{b^2}{4}"} />
               </TextSpan>
               <TextSpan>
                  <MathElement
                     htmlString={
                        "h = \\sqrt{a^2 - \\Big(\\dfrac{b}{2}\\Big)^2}"
                     }
                  />
               </TextSpan>
            </Flex>
         </Paragraph>
         {/* <span>
            <Flex>
               <Paragraph>
                  <TextLine>Area of triangle </TextLine>
                  <TextLine textAlign={"right"}>A</TextLine>
               </Paragraph>
               <Paragraph>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2} \\times Base \\times Height"
                        }
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2} \\times b \\times \\sqrt{a^2 - (\\frac{b^2}{4})}"
                        }
                     />
                  </TextLine>
               </Paragraph>
            </Flex>
         </span> */}
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={{
                  lhsLatex: [`Area\\ of\\ triangle`, "A"],
                  rhsLatex: [
                     {
                        eqLatex: "\\dfrac{1}{2} \\times Base \\times Height",
                        hint: "",
                     },
                     {
                        eqLatex:
                           "\\dfrac{1}{2} \\times b \\times \\sqrt{a^2 - \\Big(\\dfrac{b^2}{4}\\Big)}",
                        hint: "",
                     },
                  ],
               }}
            />
         </Paragraph>
         <Paragraph>
            <Pill>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\dfrac{1}{4}b \\sqrt{4a^2 - b^2}"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide14;
