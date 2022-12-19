import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Title, Paragraph, TextLine } from "components/text";
import { useState, useEffect } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide12/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide12/2.svg";
const cube_3 = "assets/volume-of-cube/slide12/3.svg";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide11 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [mathjaxRespStrings, setMathjaxRespStrings] = useState([]);

   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let EquationLatex = [
      {
         lhsLatex: [`{BD^2}`, "BD"],
         rhsLatex: [
            {
               eqLatex: "s^2 + s^2 = 2s^2",
               hint: "(Pythagoras Theorem)",
            },
            {
               eqLatex: "s\\sqrt{2}",
               hint: "(Neglect -ve Value)",
            },
         ],
      },
      {
         lhsLatex: [`{AD^2}`, "AD", "s"],
         rhsLatex: [
            {
               eqLatex: "s^2 + (s\\sqrt{2})^2 =3S^2 ",
               hint: "(Pythagoras Theorem)",
            },
            {
               eqLatex: "\\sqrt{3}s^2 = s\\sqrt{3} ",
               hint: "",
            },
            {
               eqLatex: "\\frac{AD}{\\sqrt{3}} = \\frac{d}{\\sqrt{3}} ",
               hint: "(Neglect -ve Value)",
            },
         ],
      },
      {
         lhsLatex: [`Volume \\: of \\: Cube`],
         rhsLatex: [
            {
               eqLatex:
                  "s^3= \\frac{d^3}{3\\sqrt{3}} = \\frac{\\sqrt{3} d^3}{9}",
               hint: "",
            },
         ],
      },
   ];
   let eq1Latex = EquationLatex[0];
   let eq2Latex = EquationLatex[1];
   let eq3Latex = EquationLatex[2];
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

            <MultiLhsEquationContainer
               lineHeight="1.5"
               color={colors.BLACK}
               equationLatex={eq1Latex}
            ></MultiLhsEquationContainer>
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
            <MultiLhsEquationContainer
               equationLatex={eq2Latex}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <Paragraph>
            <MultiLhsEquationContainer
               equationLatex={eq3Latex}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide11;
