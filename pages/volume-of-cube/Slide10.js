import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import { useState } from "react";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide10/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide10/2.svg";
import EquationTable from "components/MathElement/EquationTable";

const Slide10 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      console.log(e.target);
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\text{Volume of a cube}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["(side)^3"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   let EquationLatex1 = [
      {
         lhsLatex: {
            value: [
               <TextSpanBg
                  key={0}
                  id={1}
                  color={colors.RED}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  Area of square face, (A)
               </TextSpanBg>,
            ],
            type: "text",
         },
         rhsLatex: {
            value: ["(side)^2"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
      {
         lhsLatex: {
            value: ["\\sqrt{A}"],
            type: "latex",
         },
         rhsLatex: {
            value: ["side"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   let EquationLatex2 = [
      {
         lhsLatex: {
            value: ["\\text{Volume}, V"],
            type: "latex",
         },
         rhsLatex: {
            value: ["(\\sqrt{A})^3 = (\\sqrt {16}m^2)^3"],
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
            value: ["(4m)^3 = {64m}^3"],
            type: "latex",
         },
         rhsHint: {
            value: [""],
            type: "text",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0, EquationLatex1, EquationLatex2);
   let latexEquationCounter = 0;

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle="Volume of a Cube using Area"
         title="Illustrative Example"
      >
         <Paragraph>
            What is the volume of a cube, when the area of one of the faces is
            16 sq m?
         </Paragraph>
         <Paragraph>
            <TextLine>Solution:</TextLine>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>

         <Paragraph>
            <EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide10;
