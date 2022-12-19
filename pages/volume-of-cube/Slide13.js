import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide13/1.svg";
const cube_diagonal = "assets/volume-of-cube/slide13/2.svg";
import MathElement from "components/MathElement/index.js";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";

const Slide13 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(`= \\sqrt{3} \\times {\\frac{d}{9}}^2`);
   latex.push(`= \\sqrt{3} \\times {\\frac{3}{9}}^2`);
   latex.push(`= \\sqrt{3}\\times \\frac{27}{9}`);
   latex.push(`= \\sqrt{3} \\times 3`);
   latex.push(`= 3 \\sqrt{3}ft^3 `);
   let mathjaxCounter = 0;
   let EquationLatex = [
      {
         lhsLatex: [`Volume`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "\\sqrt{3} \\times {\\frac{d}{9}}^2",
               hint: "",
            },
            {
               eqLatex: "\\sqrt{3} \\times {\\frac{3}{9}}^2",
               hint: "",
            },
            {
               eqLatex: "\\sqrt{3}\\times \\frac{27}{9}",
               hint: "",
            },
            {
               eqLatex: "\\sqrt{3} \\times 3",
               hint: "",
            },
            {
               eqLatex: "3 \\sqrt{3}ft^3 ",
               hint: "",
            },
         ],
      },
   ];
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
            <MultiLhsEquationContainer
               lineHeight="2"
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide13;
