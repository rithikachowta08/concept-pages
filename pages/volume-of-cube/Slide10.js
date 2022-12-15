import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide10/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide10/2.svg";
import MathElement from "components/MathElement/index.js";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide10 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let latex = [];
   latex.push(`= (side)^3`);
   latex.push(` (A)=(side)^2`);
   latex.push(` \\sqrt{A} = side`);
   latex.push(`=(\\sqrt{A})^3 `);
   latex.push(`=(\\sqrt {16} m^2)^3 `);
   latex.push(`= (4m)^3`);
   latex.push(`= {64m}^3`);
   let mathjaxCounter = 0;
   let latexCounter=0
   
   let EquationLatex=[
      {
         lhsLatex:[`{Volume} \\: of cube`],
         rhsLatex:[
           {
             eqLatex:"(side)^3",
             hint:''
         },
       ]
       },
      {
         lhsLatex:["(A)","\\sqrt{A}"],
         rhsLatex:[
           {
             eqLatex:"(side)^2",
           hint:''
         },
         {
           eqLatex:"side",
         hint:''
       },
       ]
       },

      {
        lhsLatex:[`V`,"",""],
        rhsLatex:[
          {
            eqLatex:"(\\sqrt{A})^3 = (\\sqrt {16}m^2)^3 ",
          hint:''
        },
        {
          eqLatex:"(4m)^3 = {64m}^3",
        hint:''
      },
      ]
      },
    ]
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         secondaryTitle="Volume of a Cube using Area"
         title="Illustrative Example"
      >
         <Paragraph>
            What is the volume of a cube, when the area of one of the faces is 16 sq m?
         </Paragraph>
         <Paragraph>
          <TextLine>Solution:</TextLine>  
         <MultiLhsEquationContainer equationLatex={EquationLatex[latexCounter++]}></MultiLhsEquationContainer>
         </Paragraph>
         <Paragraph>
            <TextLine><TextSpanBg id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
               color={colors.RED}>Area of the square face</TextSpanBg></TextLine>
         <MultiLhsEquationContainer lineHeight="1.7" equationLatex={EquationLatex[latexCounter++]}></MultiLhsEquationContainer>
         </Paragraph>
         
         <Paragraph>
            <TextLine>
               Volume,
            </TextLine>
         <MultiLhsEquationContainer lineHeight="1.7" equationLatex={EquationLatex[latexCounter++]}></MultiLhsEquationContainer>

         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide10;
