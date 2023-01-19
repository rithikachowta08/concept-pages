import { useState } from "react";
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
const slide11= "assets/area-of-trapezoid/slide11.svg";
import { useDeviceType, DEVICE_TYPES } from "hooks/useDeviceType";

const Slide11 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   let latex = [];
   latex.push(` = 3 \\times h`);
   latex.push(` = \\dfrac{5 + 5 + 6}{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Find the area of the trapezoid with the given dimensions."
         secondaryTitle="Illustrative Example"
         diagram={
            <TransitionImage
               images={[
                  slide11
               ]}
               altTexts={[
                  "Diagram of a trapezoid with given sides",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph lineHeight={lineHeightProp} >
            <TextLine>
            Step 3: Equate <MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>{" "}
             and <MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement> to find the height of the trapezoid.
            </TextLine>
            <TextLine>
            <MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>{" "}={" "}<MathElement htmlString={`A\\scriptscriptstyle 2`}></MathElement>
            </TextLine>
            <TextLine>
            12{" "}<MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
            </TextLine>
            <TextLine>
            h{" "}={" "}4{" "}in
            </TextLine>
        </Paragraph>
        
        <Paragraph >
            <TextLine>
            Step 4: Apply the trapezoid area formula.
            </TextLine>
            <TextLine >
            <TextLine >
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area of the trapezoid "],
                        type: "text",
                     },
                     rhsLatex: {
                        value: ["\\dfrac{1}{2} \\times (a+b) \\times h"],
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
                       value: ["\\dfrac{1}{2} \\times (14+8) \\times 4"],
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
                       value: ["\\dfrac{1}{2} \\times 22 \\times 4"],
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
                       value: ["44 sq in"],
                       type: "text",
                    },
                    rhsHint: {
                       value: [""],
                       type: "text",
                    },
                 },
               ]}
            />
            </TextLine>
            </TextLine>
        </Paragraph>


         
      </TextAndDiagramSlide>
   );
};

export default Slide11;
