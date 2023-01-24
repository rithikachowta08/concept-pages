import MathElement from "components/MathElement";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { addTransitionToKatex } from "utils/domutils";

const cube_red = "assets/volume-of-cube/slide8_a.svg";
const StyledImg = dynamic(() =>
   import("components/StyledElements").then((mod) => mod.StyledImg)
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TextLine = dynamic(() =>
   import("components/text").then((mod) => mod.TextLine)
);
const TextSpanBg = dynamic(() =>
   import("components/text").then((mod) => mod.TextSpanBg)
);
const Pill = dynamic(() => import("components/Pill"));
const TransitionImage = dynamic(() =>
   import("components/media/TransitionImage")
);

const image_1 = "assets/area-of-pgm/slide10_a.svg";
const image_2 = "assets/area-of-pgm/slide10_b.svg";
const image_3 = "assets/area-of-pgm/slide10_c.svg";

const Slide10 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Area \\: of \\: \\htmlId{1}{\\htmlClass{textSpanBg slide-10 darkBg}{∆AOB}}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times Base \\times Height"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{1}{2} \\times \\dfrac{d_{1}}{d_{2}}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["\\dfrac{d_{1} \\times d_{2}}{8} \\times Sin(\\theta)"],
            type: "latex",
         },
      },
   ];
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: ["Area of the parallelogram "],
            type: "text",
         },
         rhsLatex: {
            value: ["4 \\times Area \\: of \\: ∆AOB "],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["4 \\times \\dfrac{d_{1} \\times d_{2}}{8} \\times Sin(\\theta)"],
            type: "latex",
         },
      },
   ];
   const [activeIndex, setActiveIndex] = useState(0);

   const onHover = (e) => {
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
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0,EquationLatex1);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Area of a Parallelogram"
         title="Proof"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[image_1,image_2]}
               altTexts={[
                  "Diagram of a parallelogram showing its two diagonals and included angle between them",
                  "Diagram of a parallelogram with one of the 4 triangles highlighted",
               ]}
               activeIndex={activeIndex}
            />
         }
      >

         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <div>
            <Paragraph>
           
         Diagonals of a parallelogram divide it into 4 triangles of equal area

         
            </Paragraph>
            <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <Pill darkbg={false}
            width="fit-content"
         >
            Area of a parallelogram{" "} = <MathElement htmlString={"\\dfrac{1}{2} \\times d_{1} \\times d_{2} \\times Sin(\\theta)"}></MathElement>
            
         </Pill>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide10;
