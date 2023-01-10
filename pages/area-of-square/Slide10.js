import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import { useState,useEffect } from "react";
import { addTransitionToKatex } from "utils/domutils";

const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
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

const square_1 = "assets/area-of-square/slide10_1.svg";
const square_2 = "assets/area-of-square/slide10_2.svg";
const square_3 = "assets/area-of-square/slide10_3.svg";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      console.log(e.target);
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   const onHoverKatex = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };

   useEffect(
      addTransitionToKatex(".textSpanBg.slide-10", onHoverKatex, onHoverOut),
      []
   );
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\: \\htmlId{2}{\\htmlClass{textSpanBg slide-10 }{Area}} \\: of Square"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{d^2}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{6^2}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "latex",
         },
         rhsLatex: {
            value: ["18\\:sq\\:ft"],
            type: "latex",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[square_1, square_2,square_3]}
               altTexts={[
                  "Diagram of a square with diagonal of 6 ft shown.",
                  "Diagram of a square with diagonal of 6 ft highlighted.",
                  "Diagram of a square with bounded area highlighted"
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle=""
         title="Illustrative Example"
      >
         <Paragraph>
         <TextLine fontWeight={'Bold'}>Find the area of a square whose diagonal is 6 ft. </TextLine>
         </Paragraph>
         <Paragraph>
            <TextLine color={colors.DARK_GREY} fontWeight={'Bold'}>Solution:</TextLine>
   <Paragraph>            <TextSpanBg
                  key={0}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  Diagonal
               </TextSpanBg>{" "} of the square = 6ft
               </Paragraph>   

          <Paragraph>  
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide10;
