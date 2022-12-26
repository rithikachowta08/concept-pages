import { Paragraph, TextLine, TextSpanBg } from "components/text";
import { colors } from "utils/colors";
import { useState } from "react";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import TransitionImage from "components/media/TransitionImage";
const square_1 = "assets/area-of-square/slide9_1.svg";
const square_2 = "assets/area-of-square/slide9_2.svg";
import EquationTable from "components/MathElement/EquationTable";
import MathLine from "components/MathElement/MathLine";
import MathElement from "components/MathElement";

const Slide9 = ({ downIcon }) => {
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
            value: ["\\: \\htmlId{1}{\\htmlClass{textSpanBg slide-8 }{Area}} \\: of Square"],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{d^2}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "latex",
         },
         rhsLatex: {
            value: ["\\dfrac{6^2}{2}"],
            type: "latex",
         },
      },
      {
         lhsLatex: {
            value: [""],
            type: "latex",
         },
         rhsLatex: {
            value: ["18\\:sq\\:ft"],
            type: "latex",
         },
      },
   ];
   let latexEquationContainer = [];
   latexEquationContainer.push(EquationLatex0);
   let latexEquationCounter = 0;

   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[square_1,square_2]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         secondaryTitle=""
         title="Area Using Diagonal"
      >
         <Paragraph>
         <TextLine>The length of a <TextSpanBg
                  key={0}
                  id={1}
                  color={colors.RED}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.DARK_BLUE}
               >
                  Diagonal
               </TextSpanBg> can be calculated using  the <span style={{color:'#c49225'}}>Pythagorean</span> theorem.
 </TextLine>
 <TextLine>
    <MathElement htmlString={"d^2 = s^2+ s^2"}></MathElement>
 </TextLine>
 <TextLine>
    <MathElement htmlString={"s^2 = \\dfrac{d^2}{2}"}></MathElement>
 </TextLine>
 <TextLine>
 Area = <MathElement htmlString={"s \\times s = s^2 = \\dfrac{d^2}{2}"}></MathElement>
 </TextLine>
 <TextLine>
 and,<MathElement htmlString={"s = \\dfrac{d}{\\sqrt{2}}"}></MathElement>
 (taking only the positive root)  
 </TextLine>
         </Paragraph>
         
      </TextAndDiagramSlide>
   );
};
export default Slide9;
