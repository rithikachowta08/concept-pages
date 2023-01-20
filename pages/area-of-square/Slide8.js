
import dynamic from "next/dynamic";

import { colors } from "utils/colors";
import { useState, useEffect } from "react";
import { addTransitionToKatex } from "utils/domutils";

const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);

const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const square_1 = "assets/area-of-square/slide8_a.svg";
const square_2 = "assets/area-of-square/slide8_b.svg";
const square_3 = "assets/area-of-square/slide8_c.svg";


const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\: \\htmlId{1}{\\htmlClass{textSpanBg slide-8 }{Side \\: of \\: the\\: Square}}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["7ft"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["\\: \\htmlId{2}{\\htmlClass{textSpanBg slide-8 }{Area \\: of \\: the\\: Square}} "],
            type: "latex",
         },
         rhsLatex: {
            value: ["Side \\times Side"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["7ft \\times 7ft"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["49\\: sq \\: ft"],
            type: "latex",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   
   useEffect(
      addTransitionToKatex(".textSpanBg.slide-8", onHoverKatex, onHoverOut),
      []
   );
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle=""
         title="Illustrative Example"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[square_1,square_2,square_3]}
               altTexts={[
                  "Diagram of a square of side 7 ft",
                  "Diagram of a square of side 7 ft highlighted",
                  "Diagram of a square with bounded area highlighted"
               ]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
        <TextLine  fontWeight={"Bold"}> Find the area of a square whose side length is 7 ft.</TextLine> 
         </Paragraph>
         <Paragraph>
            <TextLine fontWeight={"Bold"} color={colors.DARK_GREY} >Solution:</TextLine>
            <Paragraph><EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
