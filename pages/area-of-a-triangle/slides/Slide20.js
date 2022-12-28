import MathElement from "components/MathElement";
import EquationTable from "components/MathElement/EquationTable";
import TransitionImage from "components/media/TransitionImage";
import Pill from "components/Pill";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { Paragraph, TextLine, TextSpan, TextSpanBg } from "components/text";
import React, { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title={
            <p
               style={{
                  color: "inherit",
                  fontWeight: "inherit",
                  fontSize: "inherit",
                  marginTop: "30px",
               }}
            >
               Derivation
            </p>
         }
         bg={"LIGHT"}
         diagram={
            <TransitionImage
               images={[image_1, image_2]}
               activeIndex={activeIndex}
               altTexts={[
                  "Diagram of a scalene triangle of height h",
                  "Diagram of a scalene triangle highlighting one of its part including height",
               ]}
            />
         }
         downIcon={downIcon}
         isLastSlide
      >
         <Paragraph>
            Apply the &quot;Sine&quot; formula in the{" "}
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
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area\\ of\\ triangle\\ (\\Delta ABC)"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2} \\times Base \\times Height"],
                        type: "latex",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2}\\times c\\times h"],
                        type: "latex",
                     },
                  },
                  {
                     lhsLatex: {
                        value: [""],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2}\\times c\\times b\\ Sin A"],
                        type: "latex",
                     },
                  },
               ]}
            />
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
