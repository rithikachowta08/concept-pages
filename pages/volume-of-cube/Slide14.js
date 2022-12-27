import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide14/1.svg";
const cube_f = "assets/volume-of-cube/slide14/2.svg";
const cube_s = "assets/volume-of-cube/slide14/3.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import EquationTable from "components/MathElement/EquationTable";
import { addTransitionToKatex } from "utils/domutils";

const Slide14 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: [
               `Here, \\htmlId{1}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{length of diagonal(f)}}}`,
            ],
            type: "latex",
         },
         rhsLatex: {
            value: [
               "\\sqrt{2} \\times \\htmlId{2}{\\htmlClass{textSpanBg slide-14 lightBg}{\\text{length of side(s)}}}",
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
   latexEquationContainer.push(EquationLatex0);
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
                  diagonal length
              {" "}
               of a face of a cube:
            </TextLine>
         </Paragraph>
         <Paragraph>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
            >
               Volume of a cube{" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               cubic units
            </Pill>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide14;
