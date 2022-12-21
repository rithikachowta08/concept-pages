import { useState } from "react";
// import {c}
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph } from "components/text";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide6/1.svg";
const cube_d = "assets/volume-of-cube/slide6/2.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
import { TextLine } from "components/text";
import EquationTable from "components/MathElement/EquationTable";

const Slide6 = ({ downIcon, navBar }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\text{Volume}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["side \\times side \\times side"],
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
            type: "text",
         },
         rhsLatex: {
            value: ["s \\times s \\times s"],
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
            type: "text",
         },
         rhsLatex: {
            value: ["s^3"],
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
   let latex = [];
   latex.push(` = (side)^3`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_d]}
               activeIndex={activeIndex}
            />
         }
         title="Formula"
      >
         <Paragraph color={colors.WHITE}>
            <TextLine>
               {" "}
               For a cube with{" "}
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.AQUA}
                  color={colors.RED}
               >
                  side length ‘s’
               </TextSpanBg>{" "}
            </TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <div>
            <Pill
               width="fit-content"
               bgColor={colors.OCEAN_GREEN}
               color={colors.BLACK}
            >
               Volume of cube{" "}
               <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
               cubic units
            </Pill>
         </div>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
