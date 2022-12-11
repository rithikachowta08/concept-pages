import TextAndDiagramSlide from "components/slides/TextAndDiagramSlide";
import { TextSpanBg, Paragraph } from "components/text";
import { useState } from "react";
import { colors } from "utils/colors";
import TransitionImage from "components/media/TransitionImage";
const cube_red = "assets/volume-of-cube/slide11/cube-1.png";
const cube_diagonal = "assets/volume-of-cube/slide11/cube-2.png";
import MathElement from "components/MathElement/index.js";

const Slide11 = ({ downIcon, navBar }) => {
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
   return (
      <TextAndDiagramSlide
         diagram={
            <TransitionImage
               images={[cube_red, cube_diagonal]}
               activeIndex={activeIndex}
            />
         }
         downIcon={downIcon}
         navBar={navBar}
         title="Illustrative Example"
         secondaryTitle="Volume of a Cube using Diagonal"
      >
         <Paragraph marginBottom="2vh">
            Find the volume of a cube whose diagonal{" "}
            <TextSpanBg
               id={1}
               onHover={onHover}
               onHoverOut={onHoverOut}
               color={colors.RED}
               hoverColor={colors.DARK_BLUE}
               fontWeight={700}
               fontSize="2.2rem"
            >
               diagonal
            </TextSpanBg>{" "}
            is 3 feet long.
         </Paragraph>
         <Paragraph>Solution:</Paragraph>
         <Paragraph>
            Volume{" "}
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
         <Paragraph>
            <MathElement htmlString={latex[mathjaxCounter++]}></MathElement>
         </Paragraph>
      </TextAndDiagramSlide>
   );
};
export default Slide11;
