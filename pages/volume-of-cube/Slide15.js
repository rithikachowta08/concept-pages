import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpan, Title, Paragraph, TextSpanBg, TextLine } from "components/text";
// import inequality_slide from "assets/inequality_slide.svg";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide15/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide15/2.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";
import { fetchData } from "utils/networking";
import { Flex } from "components/StyledElements";
import SingleLHSMathEquationContainer from "components/MathElement/SingleLHSMathEquationContainer";
import { LHSContainer, RHSContainer } from "components/MathElement/LHSContainer";
import MathEquationLine from "components/MathElement/MathEquationLine";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import EquationTable from "components/MathElement/EquationTable";

const Slide15 = ({navBar,downIcon}) => {
  let EquationLatex0=[
    {
       lhsLatex:{
         value: ["{BD^2}"],
         type:'latex' 
       },
       rhsLatex:{
          value:["{BC}^2 + {CD}^2"],
          type:'latex'
       },
       rhsHint:
       {
        value:[''],
        type:'text'
       }
    },
    {
       lhsLatex:{
         value: [""],
         type:'latex' 
       },
       rhsLatex:{
          value:["s^2 + s^2 = 2s^2"],
          type:'latex'
       },
       rhsHint:
       {
        value:[''],
        type:'text'
       }
    },
    {
       lhsLatex:{
         value: ["BD(f)"],
         type:'latex' 
       },
       rhsLatex:{
          value:["s\\sqrt{2}"],
          type:'latex'
       },
       rhsHint:
       {
        value:[''],
        type:'text'
       }
    },
    {
       lhsLatex:{
         value: ["s"],
         type:'latex' 
       },
       rhsLatex:{
          value:["\\dfrac{f}{\\sqrt{2}}"],
          type:'latex'
       },
       rhsHint:
       {
        value:[''],
        type:'text'
       }
    },
 
    ]
    let EquationLatex1=[
      {
         lhsLatex:{
           value: ["\\text{Volume of Cube}"],
           type:'latex' 
         },
         rhsLatex:{
            value:["s^3 = \\dfrac{f^3}{2\\sqrt{2}}"],
            type:'latex'
         },
         rhsHint:
         {
          value:[''],
          type:'text'
         }
        },
      {
         lhsLatex:{
           value: [""],
           type:'latex' 
         },
         rhsLatex:{
            value:["\\dfrac{\\sqrt{2}f^3}{4}"],
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
    latexEquationContainer.push(EquationLatex0,EquationLatex1)
    let latexEquationCounter=0;
  const [activeIndex, setActiveIndex] = useState(0);
  const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

  const onHover = (e) => {
    setActiveIndex(Number(e.target.id));
  };
  const onHoverOut = (e) => {
    setActiveIndex(0);
  };

  return (
    <TextAndDiagramSlide
    navBar={navBar}
    downIcon={downIcon}
      diagram={
        <TransitionImage
          images={[cube_red, cube_diagonal]}
          activeIndex={activeIndex}
          bottomOffset="65px"
        />
      }
      title="Proof"
      secondaryTitle="Volume of a Cube using Diagonal">
      <Paragraph>
        <TextLine>
        In
        <TextSpanBg
          id={1}
          onHover={onHover}
          onHoverOut={onHoverOut}
          color={colors.RED}
          hoverColor={colors.DARK_BLUE}>
          △BCD
        </TextSpanBg>,
        </TextLine>
        <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>
        
      </Paragraph>
      <Paragraph>
      <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>

      </Paragraph>

    </TextAndDiagramSlide>
  );
};
export default Slide15;
