import { useState } from "react";
// import {c}
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide6/1.svg";
const cube_d = "assets/volume-of-cube/slide6/2.svg";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";
import MultiLhsEquationContainer from "components/MathElement/MultiLhsEquationContainer";
import { TextLine } from "components/text";

const Slide6 = ({ downIcon }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   // latex.push(`= side \\times side \\times side`);
   // latex.push(`= s \\times s \\times s`);
   // latex.push(`= (side)^3`);
   latex.push(` = (side)^3`);

   let EquationLatex = [
      {
         lhsLatex: [`{Volume}`, "", "", ""],
         rhsLatex: [
            {
               eqLatex: "Side \\times Side \\times Side",
               hint: "",
            },
            {
               eqLatex: "s \\times s \\times s",
               hint: "",
            },
            {
               eqLatex: "s^3",
               hint: "",
            },
         ],
      },
   ];
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         downIcon={downIcon}
         diagram={
            <TransitionImage
               images={[cube_red, cube_d]}
               activeIndex={activeIndex}
            />
         }
         title="Formula"
      >
         <Paragraph color={colors.WHITE}>
            <TextLine>
               {" "}
               For a cube with{" "}
               <TextSpanBg
                  id={1}
                  onHover={onHover}
                  onHoverOut={onHoverOut}
                  hoverColor={colors.AQUA}
                  color={colors.RED}
               >
                  side length ‘s’
               </TextSpanBg>{" "}
            </TextLine>
            <MultiLhsEquationContainer
               color={colors.WHITE}
               equationLatex={EquationLatex[0]}
            ></MultiLhsEquationContainer>
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            Volume of cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            cubic units
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
