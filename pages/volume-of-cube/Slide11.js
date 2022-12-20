import { useState } from "react";

import { TextSpanBg, Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide11/1.svg";
const cube_d = "assets/volume-of-cube/slide11/2.svg";
const cube_s = "assets/volume-of-cube/slide11/3.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
import EquationTable from "components/MathElement/EquationTable";

const Slide11 = ({ downIcon }) => {
   let EquationLatex0=[
      {
         lhsLatex:{
           value: ["Here, \\htmlClass{textSpanBg hoverTransition}{diagonal}"],
           type:'latex' 
         },
         rhsLatex:{
            value:["\\sqrt{3} \\times \\htmlClass{textSpanBg hoverTransition}{side} units"],
            type:'latex'
         },
         rhsHint:
         {
          value:[''],
          type:'text'
         }
      },
   
      ]
      
      let latexEquationContainer=[]
      latexEquationContainer.push(EquationLatex0)
      let latexEquationCounter=0;
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let latex = [];
   latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
   latex.push(`= \\sqrt{3}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_d, cube_s]}
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
            Volume of a cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Pill>
         <Paragraph color={colors.WHITE}>
         <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide11;
