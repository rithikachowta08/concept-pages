import dynamic from "next/dynamic";

const MathElement = dynamic(() => import("components/MathElement"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Pill = dynamic(() => import("components/Pill"));

import { Paragraph, TextLine, TextSpan, TextSpanBg } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";

const image_1 = "assets/area-of-triangle/sidesAngles_deri_1.svg";
const image_2 = "assets/area-of-triangle/sidesAngles_deri_2.svg";

const Slide20 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   return (
      <TextAndDiagramSlide
         title="Derivation"
         downIcon={downIcon}
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
      >
         <Paragraph>
            Apply the &quot;Sine&quot; formula in the{" "}
            <TextSpanBg
               hoverColor={colors.DARK_LAVENDER}
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
            <TextLine marginBottom="10px">
               <MathElement htmlString={"Sin\\ A = \\dfrac{h}{b}"} />
            </TextLine>
            <TextLine>
               <MathElement htmlString={"h = b\\times Sin\\ A"} />
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
                        value: [
                           "\\dfrac{1}{2}\\times c\\times b\\times Sin\\ A",
                        ],
                        type: "latex",
                     },
                  },
               ]}
            />
         </Paragraph>
         <Paragraph>
            <Pill darkbg={false}>
               Area =
               <MathElement
                  htmlString={
                     "\\dfrac{\\ 1}{2}\\times b\\times c\\times Sin\\ A"
                  }
               />
            </Pill>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide20;
