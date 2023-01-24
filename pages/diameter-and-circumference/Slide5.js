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
const EquationTable = dynamic(() =>
   import("components/MathElement/EquationTable")
);

const circleRelation = "assets/diameter-and-circumference/circleRelation.svg";

const Slide5 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   let latex = [];
   latex.push(` \\dfrac{Circumference}{Diameter} = `);
   latex.push(` \\dfrac{C}{D} = `);
   latex.push(` = \\dfrac{θ}{360} \\times 2\\pi r`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         title="Relation between Circumference and Diameter "
         diagram={
            <TransitionImage
               images={[circleRelation]}
               activeIndex={activeIndex}
            />
         }
         altTexts={["Diagram of a circle showing diameter (D)"]}
         downIcon={downIcon}
      >
         <Paragraph color={colors.WHITE}>
            <TextLine>
               The ratio of circumference to diameter is equal to π (pi), i.e.,
            </TextLine>
         </Paragraph>

         <Paragraph>
            <TextLine color={colors.WHITE}>
               <EquationTable
                  align="middle"
                  equationLatex={[
                     {
                        lhsLatex: {
                           value: ["\\dfrac{Circumference}{Diameter} "],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [" \\pi"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: ["\\dfrac{C}{D} "],
                           type: "latex",
                        },
                        rhsLatex: {
                           value: [" \\pi"],
                           type: "latex",
                        },
                        rhsHint: {
                           value: [""],
                           type: "text",
                        },
                     },
                     {
                        lhsLatex: {
                           value: ["C"],
                           type: "text",
                        },
                        rhsLatex: {
                           value: ["\\pi\\times D"],
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

export default Slide5;
