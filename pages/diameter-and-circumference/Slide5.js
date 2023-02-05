import { useState } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { StyledImg } from "components/StyledElements";
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
            <StyledImg
               src={circleRelation}
               alt={"Diagram of a circle showing diameter (D)"}
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
         <span>
            <Paragraph color={colors.WHITE}>
               <EquationTable
                  align="center"
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
                           type: "latex",
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
            </Paragraph>
         </span>
      </TextAndDiagramSlide>
   );
};

export default Slide5;
