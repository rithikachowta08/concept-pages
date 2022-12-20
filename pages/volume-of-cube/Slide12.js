import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Title, Paragraph, TextLine } from "components/text";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide12/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide12/2.svg";
const cube_3 = "assets/volume-of-cube/slide12/3.svg";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import EquationTable from "components/MathElement/EquationTable";

const Slide11 = ({ downIcon }) => {
   let EquationLatex0=[
      {
         lhsLatex:{
           value: ["{BD^2}"],
           type:'latex' 
         },
         rhsLatex:{
            value:["s^2 + s^2 = 2s^2"],
            type:'latex'
         },
         rhsHint:
         {
          value:['(Pythagoras Theorem)'],
          type:'text'
         }
      },
      {
         lhsLatex:{
           value: ["BD"],
           type:'latex' 
         },
         rhsLatex:{
            value:["s\\sqrt{2}"],
            type:'latex'
         },
         rhsHint:
         {
          value:['(Neglect -ve Value)'],
          type:'text'
         }
      },
   
      ]

   let EquationLatex1=[
         {
            lhsLatex:{
              value: ["{AD^2}"],
              type:'latex' 
            },
            rhsLatex:{
               value:["s^2 + (s\\sqrt{2})^2 =3S^2"],
               type:'latex'
            },
            rhsHint:
            {
             value:['(Pythagoras Theorem)'],
             type:'text'
            }
         },
         {
            lhsLatex:{
              value: ["AD"],
              type:'latex' 
            },
            rhsLatex:{
               value:["\\sqrt{3}s^2 = s\\sqrt{3}"],
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
               value:["\\dfrac{AD}{\\sqrt{3}} = \\dfrac{d}{\\sqrt{3}}"],
               type:'latex'
            },
            rhsHint:
            {
             value:['(Neglect -ve Value)'],
             type:'text'
            }
         },
      
      ]
   let EquationLatex2=[
            {
               lhsLatex:{
                 value: ["\\text{Volume of Cube}"],
                 type:'latex' 
               },
               rhsLatex:{
                  value:["s^3= \\dfrac{d^3}{3\\sqrt{3}} = \\dfrac{\\sqrt{3} d^3}{9}"],
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
   latexEquationContainer.push(EquationLatex0,EquationLatex1,EquationLatex2)
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
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal, cube_3]}
               activeIndex={activeIndex}
               // bottomOffset="65px"
            />
         }
         title="Proof"
         secondaryTitle="Volume of a Cube using Diagonal"
         downIcon={downIcon}
      >
         <Paragraph>
            <TextLine>
               In
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  // textDecoration="underline"
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
               >
                  △BCD
               </TextSpanBg>
            </TextLine>
            <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>

         </Paragraph>
         <Paragraph>
            <TextLine>
               In
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  color={colors.RED}
                  hoverColor={colors.DARK_BLUE}
               >
                  △ABD
               </TextSpanBg>
            </TextLine>
            <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>

         </Paragraph>
         <Paragraph>
         <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>

         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide11;
