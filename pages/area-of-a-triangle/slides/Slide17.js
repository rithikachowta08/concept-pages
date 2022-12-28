import MathElement from "components/MathElement";
import EquationTable from "components/MathElement/EquationTable";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Flex, LeftWrap } from "components/StyledElements";
import { Paragraph, TextLine, TextSpanBg } from "components/text";
import HyperLink from "components/text/HyperLink";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/equi_deri_1.svg";
const image_2 = "assets/area-of-triangle/equi_deri_2.svg";

// Derivation of equilateral triangle
const Slide17 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={"Derivation"}
         secondaryTitle={"Area of an Equilateral triangle"}
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of an equilateral triangle showing equal sides, angles and height",
                  "Diagram of an equilateral triangle highlighting one of its congruent half",
               ]}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               Apply the{" "}
               <HyperLink
                  href={
                     "https://byjus.com/us/math/pythagorean-theorem-formulas/"
                  }
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
               .<br />
            </TextLine>
         </Paragraph>
         <span>
            <Paragraph>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["a^2"],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["h^2 + \\Big(\\dfrac{a}{2}\\Big)^2"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: ["h^2"],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["a^2 - \\Big(\\dfrac{a^2}{4}\\Big)"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: ["h"],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{2} (\\sqrt{3} a)"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                  ]}
               />
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["Area\\ of\\ triangle"],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: ["\\dfrac{1}{2} \\times Base \\times Height"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: ["A"],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [
                              "\\dfrac{1}{2} \\times a \\times \\dfrac{1}{2} \\sqrt{3}a",
                           ],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                  ]}
               />
            </Paragraph>
         </span>
         <Paragraph>
            <Pill>
               Area of an isosceles triangle =
               <MathElement htmlString={"\\dfrac{\\sqrt{3}}{4} \\times a^2"} />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide17;
