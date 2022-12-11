import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide13/cube-1.png";
const cube_f = "assets/volume-of-cube/slide12/cube-2.png";
const cube_s = "assets/volume-of-cube/slide12/cube-3.png";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";

const Slide12 = ({ downIcon, navBar }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const onHover = (e) => {
      setActiveIndex(Number(e.target.id));
   };
   const onHoverOut = (e) => {
      setActiveIndex(0);
   };
   let latex = [];
   latex.push(`= \\sqrt{2} \\times {\\frac{f}{4}}^3`);
   latex.push(`= \\sqrt{2}`);
   let mathjaxCounter = 0;
   return (
      <TextAndDiagramSlide
         title="Diagonal of a Face"
         secondaryTitle="Volume of a Cube using Diagonal"
         downIcon={downIcon}
         navBar={navBar}
         diagram={
            <TransitionImage
               images={[cube_red, cube_f, cube_s]}
               activeIndex={activeIndex}
            />
         }
      >
         <Paragraph marginBottom="2vh">
            Given the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
            >
               diagonal length
            </TextSpanBg>{" "}
            of a face of a cube:
         </Paragraph>
         <Pill
            width="fit-content"
            fontSize="2.2rem"
            bgColor={colors.GREEN}
            marginBottom="2vh"
            color={colors.WHITE}
         >
            Volume of a cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            cubic units
         </Pill>
         <Paragraph>
            Here, f{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> x{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
               color={colors.RED}
            >
               s
            </TextSpanBg>{" "}
            cubic units
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide12;
