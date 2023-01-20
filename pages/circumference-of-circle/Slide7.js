import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);
const TextAndDiagramSlide = dynamic(() =>
   import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
   import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const plain_d = "assets/circumference-of-circle/plain_d.svg";
const circumference_value =
   "assets/circumference-of-circle/circumference_value.svg";
import { fontWeights } from "utils/fontStyles";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";

const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `\\htmlId{1}{\\htmlClass{textSpanBg lightBg slide-7}{\\text{Circumference}}}`,
            ],
            type: "latex",
         },
         rhsLatex: {
            value: ["28 \\times \\pi \\text{ ft}"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
      {
         lhsLatex: {
            value: ["\\pi \\times d"],
            type: "latex",
         },
         rhsLatex: {
            value: ["28 \\times \\pi"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
      {
         lhsLatex: {
            value: ["d"],
            type: "latex",
         },
         rhsLatex: {
            value: ["28 \\text{ ft}"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);
   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   useEffect(
      addTransitionToKatex(".textSpanBg.slide-7", onHoverKatex, onHoverOut),
      []
   );
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[plain_d, circumference_value]}
               altTexts={[
                  "Image of a circle with diameter d",
                  "Image of a circle with circumference 28 pi highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               What is the diameter of a circle whose circumference is (28
               &times; &pi;) ft?
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>Circumference of a circle = &pi; &times; d</TextLine>
               <EquationTable equationLatex={EquationLatex0}></EquationTable>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
