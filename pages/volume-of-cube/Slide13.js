import dynamic from "next/dynamic";

import { useState } from "react";
import { colors } from "utils/colors";
const cube_red = "assets/volume-of-cube/slide13/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide13/2.svg";


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
const Slide13 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["Volume of cube"],
            type: "text",
         },
         rhsLatex: {
            value: ["\\sqrt{3} \\times {\\dfrac{d}{9}}^2"],
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
            value: ["\\sqrt{3} \\times {\\dfrac{3}{9}}^2"],
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
            value: ["\\sqrt{3}\\times \\dfrac{27}{9}"],
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
            value: ["\\sqrt{3} \\times 3"],
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
            value: ["3 \\sqrt{3}\\: cu \\:ft "],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];

   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               altTexts={["A cube with body diagonal equal to 3 feet.","A cube with body diagonal highlighted and equal to 3 feet."]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph>
            Find the volume of a cube whose{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_LAVENDER}
            >
               diagonal
            </TextSpanBg>{" "}
            is 3 ft long.
         </Paragraph>
         <Paragraph>
            <TextLine>Solution:</TextLine>
            <EquationTable
               align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide13;
