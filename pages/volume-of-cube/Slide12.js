import dynamic from "next/dynamic";

import { useState } from "react";
import { colors } from "utils/colors";
const cube_red = "assets/volume-of-cube/slide12_a.svg";
const cube_diagonal = "assets/volume-of-cube/slide12_b.svg";
const cube_3 = "assets/volume-of-cube/slide12_c.svg";


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
const Slide11 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["{BD^2}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["s^2 + s^2 = 2s^2"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["BD"],
            type: "latex",
         },
         rhsLatex: {
            value: ["s\\sqrt{2}"],
            type: "latex",
         },
      },
   ];

   let EquationLatex1 = [
      {
         lhsLatex: {
            value: ["{AD^2}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["s^2 + (s\\sqrt{2})^2 =3s^2"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["AD"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\sqrt{3}s^2 = s\\sqrt{3}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["s"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{AD}{\\sqrt{3}} = \\dfrac{d}{\\sqrt{3}}"],
            type: "latex",
         },
      },
   ];
   let EquationLatex2 = [
      {
         lhsLatex: {
            value: ["\\text{Volume of cube}"],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "s^3= \\dfrac{d^3}{3\\sqrt{3}} = \\dfrac{\\sqrt{3} d^3}{9}",
            ],
            type: "latex",
         },
      },
   ];

   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0, EquationLatex1, EquationLatex2);
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
               images={[cube_red, cube_diagonal, cube_3]}
               altTexts={["Diagram of a cube with body diagonal and face diagonal","Diagram of a cube highlighting a triangle formed by the face diagonal.","Diagram of a cube highlighting a triangle formed by the face diagonal."]}
               activeIndex={activeIndex}
               // bottomOffset="65px"
            />
         }
         title="Proof"
         secondaryTitle="Volume of a Cube Using Diagonal"
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               In{" "}
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}

               >
                  △BCD
               </TextSpanBg>
            </TextLine>
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <Paragraph>
            <TextLine>
               In{" "}
               <TextSpanBg
                  id={2}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_LAVENDER}
               >
                  △ABD
               </TextSpanBg>
            </TextLine>
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <Paragraph>
            <EquationTable
               align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide11;
