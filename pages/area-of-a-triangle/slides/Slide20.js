import MathElement from "components/MathElement";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex } from "components/StyledElements";
import { Paragraph, TextLine, TextSpan, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         isLastSlide
      >
         <Paragraph>
            Apply the "Sine" formula in the{" "}
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
            <br />
         </Paragraph>
         <Paragraph>
            <TextLine>
               <MathElement htmlString={"Sin\\ A = \\dfrac{h}{b}"} />
            </TextLine>
            <TextLine>
               <MathElement htmlString={"h = b.Sin \\ A"} />
            </TextLine>
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={{
                  lhsLatex: ["Area\\ of\\ triangle\\ (\\Delta ABC)"],
                  rhsLatex: [
                     {
                        eqLatex: " \\dfrac{1}{2} \\times Base \\times Height",
                        hint: "",
                     },
                     {
                        eqLatex: "\\dfrac{1}{2}\\times c\\times h",
                        hint: "",
                     },
                     {
                        eqLatex: "\\dfrac{1}{2}\\times c\\times b\\ Sin A",
                        hint: "",
                     },
                  ],
               }}
            />
            {/* <Flex>
               <TextLine>
                  Area of triangle (<MathElement htmlString={"\\Delta"} />
                  ABC)
               </TextLine>
               <Flex direction="column">
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2} \\times Base \\times Height"
                        }
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={"\\ = \\frac{1}{2}\\times c\\times h"}
                     />
                  </TextLine>
                  <TextLine>
                     <MathElement
                        htmlString={
                           "\\ = \\frac{1}{2}\\times c\\times b\\ Sin A"
                        }
                     />
                  </TextLine>
               </Flex>
            </Flex> */}
         </Paragraph>
         <Paragraph>
            <Pill>
               Area =
               <MathElement htmlString={"\\dfrac{1}{2}\\ bc\\ Sin\\ A"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide20;
