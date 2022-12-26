import { StyledImg } from "components/StyledElements";
import { Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
const square_1 = "assets/area-of-square/slide8_1.svg";
const square_2 = "assets/area-of-square/slide8_2.svg";
const square_3 = "assets/area-of-square/slide8_3.svg";
import { TextLine } from "components/text";
import EquationTable from "components/MathElement/EquationTable";
import { colors } from "utils/colors";
import { useState, useEffect } from "react";
import { addTransitionToKatex } from "utils/domutils";
import TransitionImage from "components/media/TransitionImage";


const Slide8 = ({ downIcon }) => {
   let EquationLatex0 = [
      {
         lhsLatex: {
            value: ["\\: \\htmlId{1}{\\htmlClass{textSpanBg slide-8 }{Side}} \\: of Square"],
            type: "latex",
         },
         rhsLatex: {
            value: ["7ft"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: ["\\: \\htmlId{2}{\\htmlClass{textSpanBg slide-8 }{Area}} \\: of Square"],
            type: "latex",
         },
         rhsLatex: {
            value: ["Side \\times Side"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["7ft \\times 7ft"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "text",
         },
         rhsLatex: {
            value: ["49\\: sq \\: ft"],
            type: "latex",
         },
      },
   ];
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
   
   useEffect(
      addTransitionToKatex(".textSpanBg.slide-8", onHoverKatex, onHoverOut),
      []
   );
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;
   return (
      <TextAndDiagramSlide
         secondaryTitle=""
         title="Illustrative Example"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[square_1,square_2,square_3]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph>
        <TextLine  fontWeight={"Bold"}> Find the area of a square whose side length is 7 ft.</TextLine> 
         </Paragraph>
         <Paragraph>
            <TextLine fontWeight={"Bold"} color={colors.DARK_GREY} >Solution:</TextLine>
            <Paragraph><EquationTable
               equationLatex={latexEquationContainer[latexEquationCounter++]}
            ></EquationTable>
            </Paragraph>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide8;
