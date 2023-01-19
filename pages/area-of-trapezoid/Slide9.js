import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
const bullet = "assets/bullet.svg";
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
const slide9= "assets/area-of-trapezoid/slide9.svg";

const Slide9 = ({ downIcon }) => {
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
                  slide9
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
            Step 2 (a) :
            </TextLine>
            <TextLine>
            Area of the triangle using Heron’s formula (<MathElement htmlString={`A\\scriptscriptstyle 1`}></MathElement>){" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            </TextLine>
            <TextLine>
            Semiperimeter (s){" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               = 8 in
            </TextLine>
        </Paragraph>
        
        <Paragraph >
            <TextLine>
            <EquationTable
               align="middle"
               equationLatex={[
                  {
                     lhsLatex: {
                        value: ["Area \\thinspace of \\thinspace the \\thinspace trapezoid \\thinspace A\\scriptscriptstyle 1"],
                        type: "latex",
                     },
                     rhsLatex: {
                        value: ["\\sqrt{} 8 (8 - 5)(8 - 5)(8 - 6) \\thinspace sq \\thinspace in"],
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
                       value: ["\\sqrt{} 8\\thinspace (3)\\thinspace(3)\\thinspace(2)\\thinspace sq \\thinspace in"],
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
                       value: ["\\sqrt{} 144 \\thinspace sq \\thinspace in"],
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
                       value: ["12 \\thinspace sq \\thinspace in"],
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

export default Slide9;
