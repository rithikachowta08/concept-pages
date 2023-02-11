import dynamic from "next/dynamic";
import { colors } from "utils/colors";
import { useState,useEffect } from "react";

const image_1 = "assets/surface-area-of-cylinder/slide7_a.svg";
const image_2 = "assets/surface-area-of-cylinder/slide7_b.svg";
const image_3 = "assets/surface-area-of-cylinder/slide7_c.svg";
import { addTransitionToKatex } from "utils/domutils";


const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
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
const Slide7 = ({ downIcon }) => {
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
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(".textSpanBg.slide-7", onHoverKatex, onHoverOut),
      []
   );

   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [" "],
            type: "text",
         },
         rhsLatex: {
            value: ["\\htmlId{1}{\\htmlClass{textSpanBg slide-7 lightBg}{\\text{Area of curved surface}}} +\\htmlId{2}{\\htmlClass{textSpanBg slide-7 lightBg}{\\text{Area of curved surface}}} "],
            type: "latex",
         }
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times \\pi \\times r \\times h + \\pi \\times r^2 + \\pi \\times r^2"],
            type: "latex",
         }
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times \\pi \\times r \\times h + 2 \\times \\pi \\times r^2 "],
            type: "latex",
         }
         
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["2 \\times \\pi \\times r \\times (h+r) \\:sq \\:units  "],
            type: "latex",
         }
         
      },
   ];
   
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   let latex = [];
   latex.push(` length(2 \\times \\pi \\times r)`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle="Total Surface Area of Cylinder"
         title="Derivation"
         downIcon={downIcon}
         diagram={<TransitionImage
            images={[image_1,image_2,image_3]}
            altTexts={[
               "Diagram of a net of a cylinder with radius and height highlighted.",
               "Diagram of a net of a cylinder with area of curved surface highlighted",
               "Diagram of a net of a cylinder with area of circular bases highlighted."
            ]}
            activeIndex={activeIndex}
         />}
      >
         <Paragraph>
         
         <TextLine>
         The total surface area of a cylinder is equal to the sum of the area of the curved surface and the area of the circular bases of the cylinder.
         </TextLine>
         </Paragraph>
         <div>
         <Paragraph>
            <TextLine>
               Total surface area
            </TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         </div>
      </TextAndDiagramSlide>
   );
};
export default Slide7;

