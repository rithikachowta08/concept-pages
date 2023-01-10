import dynamic from "next/dynamic";

import { useEffect, useState } from "react";

const cube_red = "assets/volume-of-cube/slide11/1.svg";
const cube_d = "assets/volume-of-cube/slide11/2.svg";
const cube_s = "assets/volume-of-cube/slide11/3.svg";
import { colors } from "utils/colors";
import { addTransitionToKatex } from "utils/domutils";



const EquationTable = dynamic(() =>
  import("components/MathElement/EquationTable")
);
const TransitionImage = dynamic(() =>
  import("components/media/TransitionImage")
);
const Pill = dynamic(() => import("components/Pill"));

const TextAndDiagramSlide = dynamic(() =>
  import("components/slides/TextAndDiagramSlide")
);
const Paragraph = dynamic(() =>
  import("components/text").then((mod) => mod.Paragraph)
);
const TextSpanBg = dynamic(() =>
  import("components/text").then((mod) => mod.TextSpanBg)
);

const Slide11 = ({ downIcon }) => {
   let EquationLatex0=[
      {
         lhsLatex: {
            value: [
               `Volume of cube`,
            ],
            type: "text",
         },
         rhsLatex: {
            value: [
               "\\sqrt{3} \\times \\dfrac{d^3}{9} \\: cubic \\: units",
            ],
            type: "latex",
         },
      },
   ]
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: [
               "Here, \\htmlId{1}{\\htmlClass{textSpanBg slide-11 darkBg}{diagonal}} \\medspace",
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\sqrt{3} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-11 darkBg}{side}} \\medspace units",
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
   const onHover = (e) => {
      setActiveIndex(Number(e.currentTarget.parentNode.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(
      addTransitionToKatex(".slide-11.textSpanBg", onHover, onHoverOut),
      []
   );
   let latex = [];
   latex.push(`= \\sqrt{3} \\times \\dfrac{{d}^3}{9} \\:cubic \\: units`);
   latex.push(`= \\sqrt{3}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_d, cube_s]}
               altTexts={["Diagram of a cube with body diagonal","Diagram of a cube with body diagonal highlighted"," Diagram of a cube with body diagonal, where side is highlighted"]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         bg="DARK"
         secondaryTitle="Volume of a cube using diagonal"
         title="Diagonal of a Cube"
      >
         <Paragraph color={colors.WHITE}>
            Given the diagonal length of a cube:
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Pill>
         <Paragraph color={colors.WHITE}>
            <EquationTable align="middle"
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
