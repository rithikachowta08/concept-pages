import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph, TextLine } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide14/1.svg";
const cube_f = "assets/volume-of-cube/slide14/2.svg";
const cube_s = "assets/volume-of-cube/slide14/3.svg";
import Pill from "components/Pill";
import MathElement from "components/MathElement/index.js";

const Slide14 = ({ downIcon, navBar }) => {
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
         <Paragraph>
           
           <TextLine> Given the{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}>
               diagonal length
            </TextSpanBg>{" "}
            of a face of a cube:
            </TextLine>
         </Paragraph>
         <Pill
            width="fit-content"
            bgColor={colors.OCEAN_GREEN}
            color={colors.BLACK}
         >
            Volume of a cube{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>{" "}
            cubic units
         </Pill>
         <Paragraph>
           <TextLine> Here, length of diagonal (f){" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement> x{" "}
            <TextSpanBg
               id={2}
               onHover={onHover}
               onHoverOut={onHoverOut}
               hoverColor={colors.DARK_BLUE}
               color={colors.RED}
            >
              length of sides(s)
            </TextSpanBg>{" "}
            </TextLine>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide14;
