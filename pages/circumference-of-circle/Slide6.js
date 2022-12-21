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
const diameter_value = "assets/circumference-of-circle/diameter_value.svg";
const diameter_formula_value =
   "assets/circumference-of-circle/diameter_formula_value.svg";
const radius = "assets/circumference-of-circle/radius.svg";

import { lineHeightProp, fontWeights } from "utils/fontStyles";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";

const Slide6 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `\\htmlId{1}{\\htmlClass{textSpanBg lightBg slide-6}{\\text{Radius (r)}}}`,
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\htmlId{2}{\\htmlClass{textSpanBg lightBg slide-6}{\\text{Diameter (d)}}} \\div 2",
            ],
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
            value: ["12 \\div 2 \\ cm"],
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
            value: ["6 \\ cm"],
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
      addTransitionToKatex(".textSpanBg.slide-6", onHoverKatex, onHoverOut),
      []
   );
   return (
      <TextAndDiagramSlide
         title="Illustrative Example"
         diagram={
            <TransitionImage
               images={[diameter_value, radius, diameter_formula_value]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine fontWeight={fontWeights.BOLD}>
               Find the radius of a circle of diameter 12 cm.
            </TextLine>
         </Paragraph>
         <div>
            <Paragraph lineHeight={lineHeightProp}>
               <TextLine fontWeight={fontWeights.BOLD}>Solution:</TextLine>
               <TextLine>Diameter (d) of the circle = 12 cm</TextLine>
               <TextLine>Diameter = 2 &times; Radius (r)</TextLine>
               <EquationTable equationLatex={EquationLatex0}></EquationTable>
            </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
