import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide13/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide13/2.svg";
import MathElement from "components/MathElement/index.js";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import EquationTable from "components/MathElement/EquationTable";

const Slide13 = ({ downIcon }) => {
   let EquationLatex0=[
      {
         lhsLatex:{
           value: ["\\text{Volume of Cube}"],
           type:'latex' 
         },
         rhsLatex:{
            value:["\\sqrt{3} \\times {\\dfrac{d}{9}}^2"],
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
            value:["\\sqrt{3} \\times {\\dfrac{3}{9}}^2"],
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
            value:["\\sqrt{3}\\times \\dfrac{27}{9}"],
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
            value:["\\sqrt{3} \\times 3"],
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
            value:["3 \\sqrt{3}ft^3"],
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

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph>
            Find the volume of a cube whose diagonal{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
            >
               diagonal
            </TextSpanBg>{" "}
            is 3 feet long.
         </Paragraph>
         <Paragraph>
            <TextLine>Solution:</TextLine>
            <EquationTable equationLatex={latexEquationContainer[latexEquationCounter++]}></EquationTable>

         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide13;
