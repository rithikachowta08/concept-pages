import dynamic from "next/dynamic";
import { useState } from "react";

import MathElement from "components/MathElement";
import { colors } from "utils/colors";


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
const square_1 = "assets/area-of-square/slide9_a.svg";
const square_2 = "assets/area-of-square/slide9_b.svg";

const Slide9 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      console.log(e.target);
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\: \\htmlId{1}{\\htmlClass{textSpanBg slide-8 }{Area}} \\: of Square"],
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
      bg="DARK"
         diagram={
            <TransitionImage
               images={[square_1,square_2]}
               altTexts={[
                  "Diagram of a square with one diagonal and sides shown.",
                  "Diagram of a square with one diagonal highlighted.",
               ]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle=""
         title="Area Using Diagonal"
      >
         <Paragraph color={colors.WHITE}>
         <TextLine>The  <TextSpanBg
                  key={0}
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
               >
                 length of a Diagonal
               </TextSpanBg> can be calculated using  the Pythagorean theorem.
 </TextLine>

 <Paragraph color={colors.WHITE}>
    <MathElement htmlString={"d^2 = s^2+ s^2"}></MathElement>
 </Paragraph>
 <Paragraph color={colors.WHITE}>
    <MathElement htmlString={"s^2 = \\dfrac{d^2}{2}"}></MathElement>
 </Paragraph>
 </Paragraph>
 <Paragraph color={colors.WHITE}>
 
 Area = <MathElement htmlString={"s \\times s = s^2 = \\dfrac{d^2}{2}"}></MathElement>
 </Paragraph>
 <Paragraph color={colors.WHITE}>
 and,{" "}<MathElement htmlString={"s = \\dfrac{d}{\\sqrt{2}}"}></MathElement>
 (taking only the positive root)  
 </Paragraph>


         
      </TextAndDiagramSlide>
   );
};
export default Slide9;
