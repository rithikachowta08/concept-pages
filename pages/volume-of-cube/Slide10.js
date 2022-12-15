import { useState } from "react";

import { TextSpanBg, Paragraph } from "components/text";
import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import Pill from "components/Pill";
const cube_red = "assets/volume-of-cube/slide10/cube-1.png";
const cube_d = "assets/volume-of-cube/slide10/cube-2.png";
const cube_s = "assets/volume-of-cube/slide10/cube-3.png";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
import MathElement from "components/MathElement/index.js";

const Slide10 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };

   let latex = [];
   latex.push(`= \\sqrt{3} \\times \\frac{{d}^3}{9}`);
   latex.push(`= \\sqrt{3}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_d, cube_s]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         bg="DARK"
         secondaryTitle="Volume of a cube using diagonal"
         title="Diagonal of a Cube"
      >
         <Paragraph color={colors.WHITE}>
            Given the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               diagonal length
            </TextSpanBg>{" "}
            of a cube:
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            Volume of a cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Pill>
         <Paragraph color={colors.WHITE}>
            Here, d{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> x{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               textDecoration="underline"
               hoverColor={colors.AQUA}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               {" "}
               s
            </TextSpanBg>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};

export default Slide10;
