import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import dynamic from "next/dynamic";
import { fontSizes } from "utils/fontStyles";
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
import { lineHeightProp, fontWeights } from "utils/fontStyles";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";

const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `\\htmlId{1}{\\htmlClass{textSpanBg lightBg slide-7}{\\text{Circumference}}}\\ \\text{of the given circle}`,
            ],
            type: "latex",
         },
         rhsLatex: {
            value: ["28 \\pi \\text{ units}"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
      {
         lhsLatex: {
            value: ["\\pi d"],
            type: "latex",
         },
         rhsLatex: {
            value: ["28\\pi"],
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
            value: ["28 \\text{ units}"],
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
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               What is the diameter of a circle whose circumference is 28 &pi;
               units?
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph lineHeight={lineHeightProp}>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>Circumference of a circle = &pi;d</TextLine>
               <EquationTable equationLatex={EquationLatex0}></EquationTable>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide8;
