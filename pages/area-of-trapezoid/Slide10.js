import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const MathElement = dynamic(() => import("components/MathElement/index.js"));
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

import { lineHeightProp, fontWeights } from "utils/fontStyles";
const slide10= "assets/area-of-trapezoid/slide10.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);

   let latex = [];
   latex.push(` = \\sqrt{} s (s - a)(s - b)(s - c)`);
   latex.push(` = \\dfrac{5 + 5 + 6}{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[
                  slide10
               ]}
               altTexts={[
                  "Diagram of a trapezoid with triangle highlighted in it",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp} >
            <TextLine>
            Step 2 (b): Area (<MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement>) of the triangle using General formula
            </TextLine>
        </Paragraph>
        
        <Paragraph >
            <TextLine color={colors.BLACK}>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area \\thinspace of \\thinspace ΔBFD \\thinspace A\\scriptscriptstyle 2"],
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
                       value: [""],
                       type: "latex",
                    },
                    rhsLatex: {
                       value: ["\\dfrac{1}{2} \\times FD \\times BE"],
                       type: "latex",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 },
                  {
                    lhsLatex: {
                       value: [""],
                       type: "text",
                    },
                    rhsLatex: {
                       value: ["\\dfrac{1}{2} \\times 6 \\times h"],
                       type: "latex",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 },
                  {
                    lhsLatex: {
                       value: [""],
                       type: "text",
                    },
                    rhsLatex: {
                       value: ["3 \\times h \\thinspace sq \\thinspace in"],
                       type: "latex",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 },
               ]}
            />
            </TextLine>
        </Paragraph>


         
      </TextAndDiagramSlide>
   );
};

export default Slide10;
