import dynamic from "next/dynamic";

import { useState, useEffect } from "react";
import { colors } from "utils/colors";
const cube_red = "assets/volume-of-cube/slide14_a.svg";
const cube_f = "assets/volume-of-cube/slide14_b.svg";
const cube_s = "assets/volume-of-cube/slide14_c.svg";
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
const Pill = dynamic(() => import("components/Pill"));

const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);

const Slide14 = ({ downIcon }) => {
   let EquationLatex0=[
      {
         lhsLatex: {
            value: [
               `Volume of a cube`,
            ],
            type: "text",
         },
         rhsLatex: {
            value: [
               "\\sqrt{2} \\times \\dfrac{f}{4}^3",
            ],
            type: "latex",
         },
      },
   ]
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: [
               `\\htmlId{1}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{length of diagonal(f)}}}`,
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\sqrt{2} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{length of sides(s)}}}",
            ],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0,EquationLatex1);
   let latexEquationCounter = 0;
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
      addTransitionToKatex(".textSpanBg.slide-14", onHoverKatex, onHoverOut),
      []
   );
   let latex = [];
   latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
   latex.push(`= \\sqrt{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Diagonal of a Face"
         secondaryTitle="Volume of a Cube using Diagonal"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_f, cube_s]}
               altTexts={["Diagram of a cube with face diagonal","Diagram of a cube with face diagonal highlighted","Diagram of a cube with side length highlighted"]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
            <TextLine>
               {" "}
               Given the{" "}
                  diagonal length(f)
              {" "}
               of a face of a cube:
            </TextLine>
         </Paragraph>
         <Paragraph>
            <Pill
               width="fit-content"
               darkbg={false}
            >
             <EquationTable align="middle" equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>
            </Pill>
         </Paragraph>
         <Paragraph>
            <TextLine>Here,</TextLine>
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide14;
