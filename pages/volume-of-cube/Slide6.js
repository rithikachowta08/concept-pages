import { useState } from "react";
// import {c}
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Title, Paragraph } from "components/text";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide6/cube-1.png";
const cube_d = "assets/volume-of-cube/slide6/cube-2.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";

const Slide6 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(`= side \\times side \\times side`);
   latex.push(`= s \\times s \\times s`);
   latex.push(`= (side)^3`);
   latex.push(` = (side)^3`);

   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         bg="DARK"
         downIcon={downIcon}
         navBar={navBar}
         diagram={
            <TransitionImage
               images={[cube_red, cube_d]}
               activeIndex={activeIndex}
            />
         }
         title="Formula"
      >
         <Paragraph marginBottom="2vh" color={colors.WHITE}>
            For a cube with{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               side length ‘s’
            </TextSpanBg>{" "}
         </Paragraph>
         <Paragraph marginBottom="1vh" color={colors.WHITE}>
            Volume{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph marginBottom="1vh" color={colors.WHITE}>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph marginBottom="2vh" color={colors.WHITE}>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Pill
            width="fit-content"
            fontSize="2.2rem"
            bgColor={colors.GREEN}
            color={colors.WHITE}
         >
            Volume of cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            cubic units
         </Pill>
      </TextAndDiagramSlide>
   );
};

export default Slide6;
